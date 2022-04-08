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
  pageSize,
  canPreviousPage,
  canNextPage,
  lastRow,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const tablePaginationClassNames = classNames('tablePagination', {
    [className]: className,
    'tablePagination--lg': size === 'lg',
    'tablePagination--sm': size === 'sm',
  });

  const handleRowsPerPageSelect = (e) => {
    const row = Number(e);
    setRowsPerPage(row);
    setPageSize(row);
  };

  const handleNextActiveRow = () => {
    nextPage();
  };

  const handlePrevActiveRow = () => {
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
        {lastRow - pageSize + 1}-{lastRow} of {rows}
      </span>
      <div className="pageArrows">
        <button
          type="button"
          className={`${!canPreviousPage ? `disabled` : ''}`}
          disabled={!canPreviousPage}
          onClick={handlePrevActiveRow}
        >
          <NextArrowIcon />
        </button>
        <button
          type="button"
          className={`pageArrows_button_next ${!canNextPage ? `disabled` : ''}`}
          disabled={!canNextPage}
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
  pageSize: PropTypes.number,
  canPreviousPage: PropTypes.bool,
  canNextPage: PropTypes.bool,
  lastRow: PropTypes.number,
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
  pageSize: 0,
  canPreviousPage: false,
  canNextPage: false,
  lastRow: 0,
};

export default TablePagination;
