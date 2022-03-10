import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TableRow = (props) => {
  const { children, className, hover, selected, variant, dataTestId } = props;

  const tableClasses = classNames('onex-table__row', `onex-table__cell--variant-${variant}`, {
    [className]: className,
    'onex-table__row--hover': hover,
    'onex-table__row--selected': selected,
  });

  const rowChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      variant,
    }),
  );

  return (
    <tr className={tableClasses} data-test-id={dataTestId}>
      {rowChildren}
    </tr>
  );
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
