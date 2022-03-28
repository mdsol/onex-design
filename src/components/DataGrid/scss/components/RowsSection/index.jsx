import { useState } from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Typography from '../../../../Typography/scss';
import Check from '../../../../Check/scss';
import TablePagination from '../../../../TablePagination/scss';

import { ChevronDownIcon, SettingsRoundIcon, MoreVerticalIcon } from '../../../../../icons';

const RowsSection = ({ columns, data, className }) => {
  // Use the state and functions returned from useTable to build your UI

  const [showRows, setShowRows] = useState(false);
  const [checkedRows, setCheckedRows] = useState({});
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
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
          <tr
            className="onex-dataGrid__sectionHeader"
            onClick={() => setShowRows(!showRows)}
            {...headerGroups[0].getHeaderGroupProps()}
          >
            {headerGroups[0].headers.map((column) => (
              <th {...column.getHeaderProps()}>
                <Typography variant="h5">{column.render('Header')}</Typography>
              </th>
            ))}
            <th>
              <ChevronDownIcon
                className={`onex-dataGrid__showRowsIndicator ${showRows && 'isShown'}`}
              />
            </th>
          </tr>
          {showRows && (
            <tr
              className="onex-dataGrid__sectionHeaders"
              {...headerGroups[1].getHeaderGroupProps()}
            >
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
                <th colSpan={i === headerGroups[1].headers.length - 1 ? '2' : '1'}>
                  <Typography variant="caption" uppercase>
                    {column.render('Header')}
                  </Typography>
                </th>
              ))}
              <th className="onex-dataGrid__rowIcon">
                <SettingsRoundIcon />
              </th>
            </tr>
          )}
        </thead>
        {showRows && (
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
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
                    <td {...cell.getCellProps()}>
                      <Typography variant="label">{cell.render('Cell')}</Typography>
                    </td>
                  ))}
                  <td colSpan="2" className="onex-dataGrid__rowIcon">
                    <MoreVerticalIcon />
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {showRows && (
        <div className="onex-dataGrid__pagination">
          <TablePagination
            defaultRowsPerPage={5}
            rowsDividers={[5, 10, 15, 20]}
            rows={data.length}
            size="lg"
          />
        </div>
      )}
    </>
  );
};

RowsSection.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  data: PropTypes.arrayOf(PropTypes.node),
};

RowsSection.defaultProps = {
  className: undefined,
  columns: [],
  data: [],
};

export default RowsSection;
