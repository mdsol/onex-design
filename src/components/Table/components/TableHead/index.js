import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableHead = (props) => {
    const { children, className, dataTestId } = props;

    const tableClasses = classNames('c-table__head', {
        [className]: className,
    });

    const headChildren = React.Children.map(children, (child) =>
        React.cloneElement(child, {
            variant: 'header',
        }),
    );

    return (
        <thead className={tableClasses} data-test-id={dataTestId}>
            {headChildren}
        </thead>
    );
};

TableHead.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    dataTestId: PropTypes.string,
};

TableHead.defaultProps = {
    className: undefined,
    children: undefined,
    dataTestId: undefined,
};

export default TableHead;
