import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TableBody = (props) => {
  const { children, className, dataTestId, ...accProps } = props;

  const tableClasses = classNames('onex-table__body', {
    [className]: className,
  });

  const bodyChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      variant: 'body',
    }),
  );

  return (
    <tbody {...accProps} className={tableClasses} data-test-id={dataTestId}>
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
