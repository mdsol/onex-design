/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import { useTable, usePagination, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table as ReactTable } from 'react-bootstrap';

import Icon from '../../../../Icon/scss';
import Typography from '../../../../Typography/scss';
import TablePagination from '../../../../TablePagination/scss';

const DataGridTable = ({
  columns,
  data,
  className,
  rowsPerPageOptions,
  sortBy,
  multiSort,
  ...accProps
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    previousPage,
    nextPage,
    setPageSize,
    canNextPage,
    canPreviousPage,
    state: { pageSize, pageIndex },
  } = useTable(
    {
      columns,
      data,
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

  const tableClasses = classNames('onex-data-grid__table', {
    [className]: className,
  });

  return (
    <>
      <ReactTable className={tableClasses} {...getTableProps()}>
        <thead className="onex-data-grid__table-headers">
          {headerGroups.map((headerGroup, i) => (
            <tr key={`header_row_${i}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, ind) => (
                <th
                  key={`header_cell_row_${ind}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  onClick={() => column.toggleSortBy(undefined, multiSort)}
                >
                  <Typography variant="caption" uppercase>
                    {column.render('Header')}
                  </Typography>
                  {column.isSorted && (
                    <span className="onex-data-grid__table-headers-sort-by-icons">
                      <Icon className="sort-by-icon">
                        {column.isSortedDesc ? 'arrow_downward' : 'arrow_upward'}
                      </Icon>
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="onex-data-grid__table-body" {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={`${row}_${i}`} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td key={`${cell}_${i}`} {...cell.getCellProps()}>
                    <Typography variant="label">{cell.render('Cell')}</Typography>
                  </td>
                ))}
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
            pageSize={page.length}
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
      Header: PropTypes.string,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          Header: PropTypes.string,
          accessor: PropTypes.string,
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
};
/* eslint-enable */

DataGridTable.defaultProps = {
  className: undefined,
  columns: [],
  data: [],
  sortBy: [],
  multiSort: undefined,
  rowsPerPageOptions: [],
};

export default DataGridTable;
