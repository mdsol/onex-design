import classNames from 'classnames';
import PropTypes from 'prop-types';
import Badge from '../../../../Badge/scss';
import Typography from '../../../../Typography/scss';

const DataGridName = (props) => {
  const { children, className, badgeNumber, dataTestId } = props;

  const dataGridNameClasses = classNames('onex-data-grid-name', {
    [className]: className,
  });

  return (
    <div className={dataGridNameClasses} data-test-id={dataTestId}>
      {children && <Typography variant="h4">{children}</Typography>}
      {badgeNumber && (
        <Badge size="sm" type="default">
          {badgeNumber}
        </Badge>
      )}
    </div>
  );
};

DataGridName.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  badgeNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataTestId: PropTypes.string,
};

DataGridName.defaultProps = {
  className: undefined,
  children: undefined,
  badgeNumber: undefined,
  dataTestId: undefined,
};

export default DataGridName;
