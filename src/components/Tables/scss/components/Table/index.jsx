import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Table as ReactTable } from 'react-bootstrap';

const Table = (props) => {
  const {
    children,
    className,
    striped,
    bordered,
    hover,
    tableStyle,
    tableControlComponent,
    dataTestId,
    ...accProps
  } = props;

  const tableClasses = classNames('onex-table', {
    [className]: className,
    'onex-table--filled': tableStyle === 'filled',
  });

  const tableWrapClasses = classNames('onex-table-wrap', {
    'onex-table-wrap--filled': tableStyle === 'filled',
  });

  return (
    <div {...accProps} className={tableWrapClasses}>
      {tableControlComponent}
      <ReactTable
        className={tableClasses}
        striped={striped}
        bordered={bordered}
        hover={hover}
        data-test-id={dataTestId}
      >
        {children}
      </ReactTable>
    </div>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tableStyle: PropTypes.oneOf(['filled', 'default']),
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  tableControlComponent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataTestId: PropTypes.string,
};

Table.defaultProps = {
  className: undefined,
  children: undefined,
  striped: false,
  bordered: false,
  hover: false,
  tableStyle: 'default',
  tableControlComponent: undefined,
  dataTestId: undefined,
};

export default Table;
