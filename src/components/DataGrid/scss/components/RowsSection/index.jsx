/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useTable, usePagination } from 'react-table';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Typography from '../../../../Typography/scss';
import Check from '../../../../Check/scss';
import Icon from '../../../../Icon/scss';
import TablePagination from '../../../../TablePagination/scss';

const RowsSection = ({ columns, data, className, rowsDividers }) => {
  // Use the state and functions returned from useTable to build your UI

  // const [showRows, setShowRows] = useState(false);
  const [checkedRows, setCheckedRows] = useState({});
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    setPageSize,
    canNextPage,
    canPreviousPage,
    state: { pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: rowsDividers[0] },
    },
    usePagination,
  );
  // Render the UI for your table

  const tableClasses = classNames('onex-dataGrid__rowsSection', {
    [className]: className,
  });

  const handleHeaderCheck = (e) => {
    // eslint-disable-next-line react/prop-types
    const checkboxes = data.reduce(
      (obj, _, index) => ({
        ...obj,
        [index]: e.target.checked,
      }),
      {},
    );
    setCheckedRows(checkboxes);
  };

  return (
    <>
      <table className={tableClasses} {...getTableProps()}>
        <thead>
          {/* <tr
            className="onex-dataGrid__sectionHeader"
            onClick={() => setShowRows(!showRows)}
            {...headerGroups[0].getHeaderGroupProps()}
          >
            {headerGroups[0].headers.map((column, i) => (
              <th key={`${column.accessor}_${i}`} {...column.getHeaderProps()}>
                <Typography variant="h5">{column.render('Header')}</Typography>
              </th>
            ))}
            <th>
              <Icon
                className={`onex-dataGrid__showRowsIndicator ${showRows && 'isShown'}`}
              >expand_more</Icon>
            </th>
          </tr> */}
          <tr className="onex-dataGrid__sectionHeaders" {...headerGroups[1].getHeaderGroupProps()}>
            <th>
              <Check
                checked={
                  // eslint-disable-next-line react/prop-types
                  Object.values(checkedRows).length === data.length &&
                  Object.values(checkedRows).every((item) => item)
                }
                className="onex-dataGrid__rowCheck"
                onChange={handleHeaderCheck}
              />
            </th>
            {headerGroups[1].headers.map((column, i) => (
              <th
                key={`${column.accessor}_${i}`}
                // colSpan={i === headerGroups[1].headers.length - 1 ? '2' : '1'}
              >
                <Typography variant="caption" uppercase>
                  {column.render('Header')}
                </Typography>
              </th>
            ))}
            {/* <th className="onex-dataGrid__rowIcon">
              <Icon>settings</Icon>
            </th> */}
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={`${row}_${i}`} {...row.getRowProps()}>
                <td>
                  <Check
                    className="onex-dataGrid__rowCheck"
                    checked={checkedRows[i]}
                    onChange={(e) =>
                      setCheckedRows({
                        ...checkedRows,
                        [i]: e.target.checked,
                      })
                    }
                  />
                </td>
                {row.cells.map((cell) => (
                  <td key={`${cell}_${i}`} {...cell.getCellProps()}>
                    <Typography variant="label">{cell.render('Cell')}</Typography>
                  </td>
                ))}
                {/* <td colSpan="2" className="onex-dataGrid__rowIcon">
                  <Icon>more_vert</Icon>
               </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className="onex-dataGrid__pagination">
        <TablePagination
          defaultRowsPerPage={pageSize}
          rowsDividers={rowsDividers}
          rows={data.length}
          size="lg"
          previousPage={previousPage}
          nextPage={nextPage}
          setPageSize={setPageSize}
          pageSize={page.length}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          lastRow={Number(page[page.length - 1].id) + 1}
        />
      </div> */}
    </>
  );
};

RowsSection.propTypes = {
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      study: PropTypes.string,
      country: PropTypes.string,
      category: PropTypes.string,
      created: PropTypes.string,
    }),
  ),
  rowsDividers: PropTypes.arrayOf(PropTypes.number),
};

RowsSection.defaultProps = {
  className: undefined,
  columns: [],
  data: [],
  rowsDividers: [],
};

export default RowsSection;
