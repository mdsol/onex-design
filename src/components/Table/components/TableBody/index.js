import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableBody = (props) => {
    const { children, className, dataTestId } = props;

    const tableClasses = classNames('c-table__body', {
        [className]: className,
    });

    const bodyChildren = React.Children.map(children, (child) =>
        React.cloneElement(child, {
            variant: 'body',
        }),
    );

    return (
        <tbody className={tableClasses} data-test-id={dataTestId}>
            {bodyChildren}
        </tbody>
    );
};

TableBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    dataTestId: PropTypes.string,
};

TableBody.defaultProps = {
    className: undefined,
    children: undefined,
    dataTestId: undefined,
};

export default TableBody;
