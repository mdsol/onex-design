import { useState, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Icon/scss';
import Select from '../../Select/scss';
import Button from '../../Buttons/scss';

const TablePagination = ({
  rows,
  className,
  rowsPerPageOptions,
  defaultRowsPerPage,
  dataTestId,
  previousPage,
  nextPage,
  setPageSize,
  canPreviousPage,
  canNextPage,
  lastRow,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState([
    {
      value: defaultRowsPerPage,
      label: defaultRowsPerPage,
    },
  ]);

  const rowsPerPageOpts = useMemo(
    () => rowsPerPageOptions.map((item) => ({ value: item, label: item })),
    [rowsPerPageOptions],
  );

  const tablePaginationClassNames = classNames('onex-table-pagination', {
    [className]: className,
  });

  const handleRowsPerPageSelect = (option) => {
    if (option.length) {
      const row = Number(option[0]?.value);
      setRowsPerPage(option);
      setPageSize?.(row);
    }
  };

  const handleNextActiveRow = () => {
    nextPage();
  };

  const handlePrevActiveRow = () => {
    previousPage();
  };

  return (
    <div className={tablePaginationClassNames} data-test-id={dataTestId}>
      <div className="onex-table-pagination__rows-per-page">
        <span className="onex-table-pagination__rows-text">Rows per page</span>
        <Select
          className="onex-table-pagination__rows-select"
          size="sm"
          options={rowsPerPageOpts}
          onSelect={handleRowsPerPageSelect}
          selectedValues={rowsPerPage}
          closeMenuOnSelect
          isSearchable
        />
      </div>
      <span className="onex-table-pagination__rows-text-info">
        {lastRow} of {rows}
      </span>
      <div className="page-arrows">
        <Button
          variant="tertiary"
          size="sm"
          className={`${!canPreviousPage ? `disabled` : ''}`}
          disabled={!canPreviousPage}
          onClick={handlePrevActiveRow}
        >
          <Icon>chevron_left</Icon>
        </Button>
        <Button
          variant="tertiary"
          size="sm"
          className={`page-arrows__button-next ${!canNextPage ? `disabled` : ''}`}
          disabled={!canNextPage}
          onClick={handleNextActiveRow}
        >
          <Icon>chevron_right</Icon>
        </Button>
      </div>
    </div>
  );
};

TablePagination.propTypes = {
  className: PropTypes.string,
  previousPage: PropTypes.func,
  dataTestId: PropTypes.string,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])),
  rows: PropTypes.number,
  nextPage: PropTypes.func,
  defaultRowsPerPage: PropTypes.number,
  setPageSize: PropTypes.func,
  canPreviousPage: PropTypes.bool,
  canNextPage: PropTypes.bool,
  lastRow: PropTypes.number,
};

TablePagination.defaultProps = {
  className: undefined,
  previousPage: undefined,
  dataTestId: undefined,
  rowsPerPageOptions: [],
  rows: 0,
  nextPage: undefined,
  defaultRowsPerPage: 0,
  setPageSize: undefined,
  canPreviousPage: false,
  canNextPage: false,
  lastRow: 0,
};

export default TablePagination;
