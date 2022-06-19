import classNames from 'classnames';
import PropTypes from 'prop-types';
import Badge from '../../../../Badge/scss';

const TableName = (props) => {
  const { children, className, badgeNumber, dataTestId, ...accProps } = props;

  const tableNameClasses = classNames('onex-table-name', {
    [className]: className,
  });

  return (
    <div {...accProps} className={tableNameClasses} data-test-id={dataTestId}>
      {children && <h2 className="onex-table-name__h2">{children}</h2>}
      {badgeNumber && (
        <Badge size="sm" type="primary">
          {badgeNumber}
        </Badge>
      )}
    </div>
  );
};

TableName.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  badgeNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataTestId: PropTypes.string,
};

TableName.defaultProps = {
  className: undefined,
  children: undefined,
  badgeNumber: undefined,
  dataTestId: undefined,
};

export default TableName;
