import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { NextArrowIcon } from '../../../icons';

const TablePagination = ({
  size,
  rows,
  className,
  rowsDividers,
  defaultRowsPerPage,
  dataTestId,
  previousPage,
  nextPage,
  setPageSize,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [lastActiveRow, setLastActiveRow] = useState(defaultRowsPerPage);

  const tablePaginationClassNames = classNames('tablePagination', {
    [className]: className,
    'tablePagination--lg': size === 'lg',
    'tablePagination--sm': size === 'sm',
  });

  const handleRowsPerPageSelect = (e) => {
    const row = Number(e);
    setRowsPerPage(row);
    setLastActiveRow(row);
    setPageSize(row);
  };

  const handleNextActiveRow = () => {
    setLastActiveRow((prev) => prev + rowsPerPage);
    nextPage();
  };

  const handlePrevActiveRow = () => {
    setLastActiveRow((prev) => prev - rowsPerPage);
    previousPage();
  };

  return (
    <div className={tablePaginationClassNames} data-test-id={dataTestId}>
      <div className="rowsPerPage">
        <span className="rows-text">Rows per page</span>
        <DropdownButton
          onSelect={handleRowsPerPageSelect}
          variant="page"
          id="dropdown-basic"
          title={rowsPerPage}
        >
          {rowsDividers?.map((item) => (
            <Dropdown.Item key={item} eventKey={item}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <span className="rows-text">
        {lastActiveRow - rowsPerPage + 1}-{lastActiveRow} of {rows}
      </span>
      <div className="pageArrows">
        <button
          type="button"
          className={`${lastActiveRow === rowsPerPage ? `disabled` : ''}`}
          disabled={lastActiveRow === rowsPerPage}
          onClick={handlePrevActiveRow}
        >
          <NextArrowIcon />
        </button>
        <button
          type="button"
          className={`pageArrows_button_next ${lastActiveRow === rows ? `disabled` : ''}`}
          disabled={lastActiveRow === rows}
          onClick={handleNextActiveRow}
        >
          <NextArrowIcon />
        </button>
      </div>
    </div>
  );
};

TablePagination.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  previousPage: PropTypes.func,
  dataTestId: PropTypes.string,
  rowsDividers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])),
  rows: PropTypes.number,
  nextPage: PropTypes.func,
  defaultRowsPerPage: PropTypes.number,
  setPageSize: PropTypes.func,
};

TablePagination.defaultProps = {
  className: undefined,
  size: 'sm',
  previousPage: undefined,
  dataTestId: undefined,
  rowsDividers: [],
  rows: 0,
  nextPage: undefined,
  defaultRowsPerPage: 0,
  setPageSize: undefined,
};

export default TablePagination;
