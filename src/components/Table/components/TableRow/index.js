import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableRow = (props) => {
    const { children, className, hover, selected, variant, dataTestId } = props;

    const tableClasses = classNames('c-table__row', `c-table__cell--variant-${variant}`, {
        [className]: className,
        'c-table__row--hover': hover,
        'c-table__row--selected': selected,
    });

    const rowChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            variant,
        });
    });

    return <tr className={tableClasses} data-test-id={dataTestId}>{rowChildren}</tr>;
};

TableRow.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    variant: PropTypes.oneOf(['body', 'footer', 'header']),
    hover: PropTypes.bool,
    selected: PropTypes.bool,
    dataTestId: PropTypes.string,
};

TableRow.defaultProps = {
    className: undefined,
    children: undefined,
    hover: false,
    selected: false,
    variant: 'body',
    dataTestId: undefined,
};

export default TableRow;
