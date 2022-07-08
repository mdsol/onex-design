/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table as ReactTable } from 'react-bootstrap';

// import Icon from '../../../../Icon/scss';
// import Typography from '../../../../Typography/scss';
import TablePagination from '../../../../TablePagination/scss';
import Check from '../../../../Check/scss';
import DataGridCell from './components/DataGridCell';
import DataGridCustomCell from './components/DataGridCustomCell';
import DataGridEditableCell from './components/DataGridEditableCell';
import DataGridHeader from './components/DataGridHeader';

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
  ...accProps
}) => {
  const [_selectedRowIds, _setSelectedRowIds] = useState(selectedRowIds);
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
        sortBy,
      },
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

  return (
    <>
      <ReactTable className={tableClasses} {...getTableProps()}>
        <thead className="onex-data-grid__table-headers">
          {headerGroups.map((headerGroup, headerRowInd) => (
            <tr key={`header_row_${headerRowInd}`} {...headerGroup.getHeaderGroupProps()}>
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
              ) : (
                <th key={`header_cell_check_${headerRowInd}`}>
                  <span />
                </th>
              )}
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
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={`body_row_${row.id}`}
                {...row.getRowProps()}
                className={`onex-data-grid__table-body-row ${
                  _selectedRowIds[row.id] ? 'isSelected' : ''
                }`}
              >
                {useRowSelection && (
                  <td key={`body_cell_check_${row.id}`}>
                    <Check
                      id={`onex-data-grid-row-check_${row.id}`}
                      className="onex-data-grid__table-body-row-check"
                      checked={_selectedRowIds[row.id]}
                      type={rowSelectionType === 'multi' ? 'checkbox' : 'radio'}
                      onChange={(e) => handleRowCheck(e, row)}
                    />
                  </td>
                )}
                {row.cells.map((cell, cellInd) => handleColumnType(row, cell, cellInd, updateData))}
              </tr>
            );
          })}
        </tbody>
      </ReactTable>
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
            currentPage={pageIndex + 1}
            pageCount={pageCount}
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
      type: PropTypes.oneOf(['action', 'custom','editable']),
      hasDivider: PropTypes.bool,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          Header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
          accessor: PropTypes.string,
          type: PropTypes.oneOf(['action', 'custom','editable']),
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
};

export default DataGridTable;
