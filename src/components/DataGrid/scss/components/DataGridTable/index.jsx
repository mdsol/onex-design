/* eslint-disable react/no-array-index-key */
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table as ReactTable } from 'react-bootstrap';

import Typography from '../../../../Typography/scss';

const DataGridTable = ({ columns, data, className }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const tableClasses = classNames('onex-data-grid__table', {
    [className]: className,
  });

  console.log('headerGroup', headerGroups);

  return (
    <ReactTable className={tableClasses} {...getTableProps()}>
      <thead className="onex-data-grid__table-headers">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                <Typography variant="caption" uppercase>
                  {column.render('Header')}
                </Typography>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="onex-data-grid__table-body" {...getTableBodyProps()}>
        {rows.map((row, i) => {
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
  rowsDividers: PropTypes.arrayOf(PropTypes.number),
};
/* eslint-enable */

DataGridTable.defaultProps = {
  className: undefined,
  columns: [],
  data: [],
  rowsDividers: [],
};

export default DataGridTable;
