import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import classNames from 'classnames';
import { NextArrowIcon } from '../../icons';

const TablePagination = ({
    size,
    rows,
    className,
    rowsDividers,
    onSetTableRowsPerPage,
    onSetLastActiveTableRow,
    defaultRowsPerPage,
    dataTestId,
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
        onSetTableRowsPerPage(row);
        onSetLastActiveTableRow(row);
    };

    const handleNextActiveRow = () => {
        setLastActiveRow((prev) => prev + rowsPerPage);
        onSetLastActiveTableRow(lastActiveRow + rowsPerPage);
    };

    const handlePrevActiveRow = () => {
        setLastActiveRow((prev) => prev - rowsPerPage);
        onSetLastActiveTableRow(lastActiveRow - rowsPerPage);
    };

    return (
        <div className={tablePaginationClassNames} data-test-id={dataTestId}>
            <div className="rowsPerPage">
                <span className="rows-text">Rows per page</span>
                <DropdownButton
                    onSelect={handleRowsPerPageSelect}
                    variant="success"
                    id="dropdown-basic"
                    title={rowsPerPage}
                >
                    {rowsDividers?.map((item) => (
                        <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
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
    onSetTableRowsPerPage: PropTypes.func,
    dataTestId: PropTypes.string,
    rowsDividers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])),
    rows: PropTypes.number,
    onSetLastActiveTableRow: PropTypes.func,
    defaultRowsPerPage: PropTypes.number,
};

TablePagination.defaultProps = {
    className: undefined,
    size: 'sm',
    onSetTableRowsPerPage: undefined,
    dataTestId: undefined,
    rowsDividers: [],
    rows: 0,
    onSetLastActiveTableRow: undefined,
    defaultRowsPerPage: 0,
};

export default TablePagination;
