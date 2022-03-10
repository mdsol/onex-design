import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const CustomTable = (props) => {
  const {
    children,
    className,
    striped,
    bordered,
    hover,
    tableStyle,
    tableControlComponent,
    dataTestId,
  } = props;

  const tableClasses = classNames('onex-table', {
    [className]: className,
    'onex-table--filled': tableStyle === 'filled',
  });

  const tableWrapClasses = classNames('onex-table-wrap', {
    'onex-table-wrap--filled': tableStyle === 'filled',
  });

  return (
    <div className={tableWrapClasses}>
      {tableControlComponent}
      <Table
        className={tableClasses}
        striped={striped}
        bordered={bordered}
        hover={hover}
        data-test-id={dataTestId}
      >
        {children}
      </Table>
    </div>
  );
};

CustomTable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tableStyle: PropTypes.oneOf(['filled', 'default']),
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  tableControlComponent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataTestId: PropTypes.string,
};

CustomTable.defaultProps = {
  className: undefined,
  children: undefined,
  striped: false,
  bordered: false,
  hover: false,
  tableStyle: 'default',
  tableControlComponent: undefined,
  dataTestId: undefined,
};

export default CustomTable;
