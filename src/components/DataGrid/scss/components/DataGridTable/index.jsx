/* eslint-disable react/no-array-index-key */
import { useEffect, useState, useMemo } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table as ReactTable } from 'react-bootstrap';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

// import Icon from '../../../../Icon/scss';
// import Typography from '../../../../Typography/scss';
import TablePagination from '../../../../TablePagination/scss';
import Check from '../../../../Check/scss';
import DataGridCell from './components/DataGridCell';
import DataGridCustomCell from './components/DataGridCustomCell';
import DataGridEditableCell from './components/DataGridEditableCell';
import DataGridHeader from './components/DataGridHeader';
import DraggableTableRow from './components/Draggable/DraggableTableRow';
import StaticTableRow from './components/Draggable/StaticTableRow';

const handleColumnType = (row, cell, cellInd, updateData) => {
  if (cell?.column.type === 'editable') {
    return (
      <DataGridEditableCell
        key={`body_cell_${row.id}_${cellInd}`}
        row={row}
        cell={cell}
        updateData={updateData}
      />
    );
  }
  if (cell?.column.type === 'custom') {
    return <DataGridCustomCell key={`body_cell_${row.id}_${cellInd}`} row={row} cell={cell} />;
  }
  return <DataGridCell key={`body_cell_${row.id}_${cellInd}`} row={row} cell={cell} />;
};

const DataGridTable = ({
  columns,
  data,
  className,
  rowsPerPageOptions,
  sortBy,
  multiSort,
  updateData,
  skipPageReset,
  selectedRowIds,
  useRowSelection,
  rowSelectionType,
  handleSelection,
  draggable,
  setData,
  ...accProps
}) => {
  const [_selectedRowIds, _setSelectedRowIds] = useState(selectedRowIds);
  const [activeId, setActiveId] = useState();

  const indeterminate =
    Object.values(_selectedRowIds).some((item) => item) &&
    Object.values(_selectedRowIds).filter((i) => i).length !== data.length;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    previousPage,
    nextPage,
    setPageSize,
    canNextPage,
    canPreviousPage,
    pageCount,
    state: { pageSize, pageIndex },
  } = useTable(
    {
      columns,
      data,
      autoResetPage: !skipPageReset,
      updateData,
      initialState: {
        pageIndex: 0,
        pageSize: rowsPerPageOptions.length ? rowsPerPageOptions[0] : data.length,
        sortBy: draggable ? [] : sortBy,
      },
      disableSortBy: draggable,
      ...accProps,
    },
    useSortBy,
    usePagination,
  );

  useEffect(() => {
    _setSelectedRowIds(selectedRowIds);
  }, [selectedRowIds]);

  useEffect(() => {
    handleSelection?.(_selectedRowIds);
  }, [_selectedRowIds]);

  const tableClasses = classNames('onex-data-grid__table', {
    [className]: className,
  });

  const handleHeaderCheck = (e) => {
    const checkboxes = rows.reduce(
      (prevVal, curVal) => ({
        ...prevVal,
        [curVal.id]: e.target.checked,
      }),
      {},
    );
    _setSelectedRowIds(checkboxes);
  };

  const handleRowCheck = (e, row) => {
    if (rowSelectionType === 'multi') {
      _setSelectedRowIds({
        ..._selectedRowIds,
        [row.id]: e.target.checked,
      });
    } else {
      _setSelectedRowIds({
        [row.id]: e.target.checked,
      });
    }
  };

  // react drag and drop functions

  const items = useMemo(() => data?.map(({ id }) => id), [data]);

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {}),
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  // eslint-disable-next-line consistent-return
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setData((currentData) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        const newData = currentData.map((row) => ({ ...row }));
        return arrayMove(newData, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const selectedRow = useMemo(() => {
    if (!activeId) {
      return null;
    }
    const row = rows.find(({ original }) => original.id === activeId);
    prepareRow(row);
    return row;
  }, [activeId, rows, prepareRow]);

  const renderTable = () => (
    <>
      <ReactTable className={tableClasses} {...getTableProps()}>
        <thead className="onex-data-grid__table-headers">
          {headerGroups.map((headerGroup, headerRowInd) => (
            <tr key={`header_row_${headerRowInd}`} {...headerGroup.getHeaderGroupProps()}>
              {draggable && (
                <th>
                  <span />
                </th>
              )}
              {/* eslint-disable-next-line no-nested-ternary */}
              {!useRowSelection ? null : rowSelectionType === 'multi' ? (
                <th>
                  <Check
                    id={`onex-data-grid-header-check_${headerRowInd}`}
                    checked={
                      !indeterminate &&
                      Object.values(_selectedRowIds).length === data.length &&
                      Object.values(_selectedRowIds).every((item) => item)
                    }
                    indeterminate={indeterminate}
                    className="onex-data-grid__table-headers-check"
                    onChange={handleHeaderCheck}
                  />
                </th>
              ) : null}
              {headerGroup.headers.map((column, headerCellInd) => (
                <DataGridHeader
                  key={`header_cell_row_${headerCellInd}`}
                  column={column}
                  multiSort={multiSort}
                />
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="onex-data-grid__table-body" {...getTableBodyProps()}>
          {draggable ? (
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <DraggableTableRow
                    key={row.original.id || row.id}
                    row={row}
                    _selectedRowIds={_selectedRowIds}
                    useRowSelection={useRowSelection}
                    rowSelectionType={rowSelectionType}
                    handleRowCheck={handleRowCheck}
                    handleColumnType={handleColumnType}
                    updateData={updateData}
                    draggable={draggable}
                  />
                );
              })}
            </SortableContext>
          ) : (
            page.map((row) => {
              prepareRow(row);
              return (
                <DraggableTableRow
                  key={row.original.id || row.id}
                  row={row}
                  _selectedRowIds={_selectedRowIds}
                  useRowSelection={useRowSelection}
                  rowSelectionType={rowSelectionType}
                  handleRowCheck={handleRowCheck}
                  handleColumnType={handleColumnType}
                  updateData={updateData}
                  draggable={draggable}
                />
              );
            })
          )}
        </tbody>
      </ReactTable>
      {draggable && (
        <DragOverlay>
          {activeId && (
            <ReactTable className={tableClasses} {...getTableProps()}>
              <tbody
                className="onex-data-grid__table-body"
                style={{ backgroundColor: 'white', opacity: '1' }}
                {...getTableBodyProps()}
              >
                <StaticTableRow
                  row={selectedRow}
                  handleColumnType={handleColumnType}
                  updateData={updateData}
                  useRowSelection={useRowSelection}
                />
              </tbody>
            </ReactTable>
          )}
        </DragOverlay>
      )}
    </>
  );

  return (
    <>
      {draggable ? (
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
        >
          {renderTable()}
        </DndContext>
      ) : (
        renderTable()
      )}
      {!!rowsPerPageOptions.length && (
        <div className="onex-data-grid__pagination">
          <TablePagination
            defaultRowsPerPage={pageSize}
            rowsPerPageOptions={rowsPerPageOptions}
            rows={data.length}
            previousPage={previousPage}
            nextPage={nextPage}
            setPageSize={setPageSize}
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
            lastRow={(pageIndex + 1) * pageSize}
          />
        </div>
      )}
    </>
  );
};

/* eslint-disable */
DataGridTable.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
      accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      type: PropTypes.oneOf(['action', 'custom', 'editable']),
      hasDivider: PropTypes.bool,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          Header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
          accessor: PropTypes.string,
          type: PropTypes.oneOf(['action', 'custom', 'editable']),
          hasDivider: PropTypes.bool,
          textAlign: PropTypes.oneOf(['left', 'right']),
          textVariant: PropTypes.oneOf(['regular', 'semibold']),
        }),
      ),
    }),
  ),
  data: PropTypes.array,
  sortBy: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      desc: PropTypes.bool,
    }),
  ),
  multiSort: PropTypes.bool,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  updateData: PropTypes.func,
  skipPageReset: PropTypes.bool,
  selectedRowIds: PropTypes.object,
  useRowSelection: PropTypes.bool,
  rowSelectionType: PropTypes.oneOf(['single', 'multi']),
  handleSelection: PropTypes.func,
  draggable: PropTypes.bool,
  setData: PropTypes.func,
};
/* eslint-enable */

DataGridTable.defaultProps = {
  className: undefined,
  columns: [],
  data: [],
  sortBy: [],
  multiSort: undefined,
  rowsPerPageOptions: [],
  updateData: undefined,
  skipPageReset: undefined,
  selectedRowIds: [],
  useRowSelection: false,
  rowSelectionType: undefined,
  handleSelection: undefined,
  draggable: false,
  setData: undefined,
};

export default DataGridTable;
