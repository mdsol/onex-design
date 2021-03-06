import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TableHead = (props) => {
  const { children, className, dataTestId, ...accProps } = props;

  const tableClasses = classNames('onex-table__head', {
    [className]: className,
  });

  const headChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      variant: 'header',
    }),
  );

  return (
    <thead {...accProps} className={tableClasses} data-test-id={dataTestId}>
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
