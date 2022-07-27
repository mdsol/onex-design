/* eslint-disable react/no-array-index-key */
import { useEffect, useState, useMemo } from 'react';
import { useTable, usePagination, useSortBy, useFilters } from 'react-table';
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
import TablePagination from '../../../../TablePagination/scss';
import DataGridCell from './components/DataGridCell';
import DataGridCustomCell from './components/DataGridCustomCell';
import DataGridEditableCell from './components/DataGridEditableCell';
import DataGridHeader from './components/DataGridHeader';
import DraggableTableRow from './components/Draggable/DraggableTableRow';
import StaticTableRow from './components/Draggable/StaticTableRow';
import DragHandle from './components/Draggable/DragHandle';
import Check from '../../../../Check/scss';

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
  handleDragged,
  draggable,
  setData,
  setBulkActionsProps,
  getRowId,
  filterData,
  ...accProps
}) => {
  const [_selectedRowIds, _setSelectedRowIds] = useState(selectedRowIds);
  const [activeId, setActiveId] = useState();

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
    setFilter,
    state: { pageSize, pageIndex },
  } = useTable(
    {
      columns,
      data,
      autoResetPage: !skipPageReset,
      updateData,
      getRowId,
      initialState: {
        pageIndex: 0,
        pageSize: rowsPerPageOptions.length ? rowsPerPageOptions[0] : data.length,
        sortBy: draggable ? [] : sortBy,
      },
      disableSortBy: draggable,
      ...accProps,
    },
    useFilters,
    useSortBy,
    usePagination,
  );

  useEffect(() => {
    Object.entries(filterData).forEach(([key, value]) => {
      setFilter(key, value);
    });
  }, [filterData]);

  const changeCheckboxes = (value) =>
    rows.reduce(
      (prevVal, curVal) => ({
        ...prevVal,
        [curVal.id]: value,
      }),
      {},
    );

  const handleHeaderCheck = () => {
    if (Object.values(_selectedRowIds).every((item) => item === true)) {
      _setSelectedRowIds(changeCheckboxes(false));
    } else _setSelectedRowIds(changeCheckboxes(true));
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
  const items = useMemo(() => rows?.map(({ id }) => id), [rows]);

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
        const reArranged = arrayMove(newData, oldIndex, newIndex);
        handleDragged(reArranged);
        return reArranged;
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
    const row = rows.find(({ id }) => id === activeId);
    prepareRow(row);
    return row;
  }, [activeId, rows, prepareRow]);

  useEffect(() => {
    _setSelectedRowIds(selectedRowIds);
  }, [selectedRowIds]);

  useEffect(() => {
    setBulkActionsProps(() => ({
      hasSelectedRows: Object.values(_selectedRowIds).some((item) => item),
      isAllRowsSelected: Object.values(_selectedRowIds).filter((i) => i).length === data.length,
      selectedRowIds: _selectedRowIds,
      handleHeaderCheck,
    }));
  }, [_selectedRowIds]);

  const tableClasses = classNames('onex-data-grid__table', {
    [className]: className,
  });

  const headerRows = () =>
    headerGroups.map((headerGroup, headerRowInd) => (
      <tr key={`header_row_${headerRowInd}`} {...headerGroup.getHeaderGroupProps()}>
        {draggable ? (
          <th key={`header_draggable_${headerRowInd}`} style={{ visibility: 'hidden' }}>
            <DragHandle />
          </th>
        ) : null}
        {useRowSelection ? (
          <th key={`header_cell_check_${headerRowInd}`} style={{ visibility: 'hidden' }}>
            <Check />
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
    ));

  const renderTable = () => (
    <>
      <ReactTable className={tableClasses} {...getTableProps()}>
        <thead className="onex-data-grid__table-headers">{headerRows()}</thead>
        <tbody className="onex-data-grid__table-body" {...getTableBodyProps()}>
          {draggable ? (
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <DraggableTableRow
                    key={row.original.id}
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
                  key={row.id}
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
              <tbody className="onex-data-grid__table-body" {...getTableBodyProps()}>
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
  handleDragged: PropTypes.func,
  draggable: PropTypes.bool,
  setData: PropTypes.func,
  setBulkActionsProps: PropTypes.func,
  getRowId: PropTypes.func,
  filterData: PropTypes.object,
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
  handleDragged: () => {},
  draggable: false,
  setData: undefined,
  setBulkActionsProps: undefined,
  getRowId: undefined,
};

export default DataGridTable;
