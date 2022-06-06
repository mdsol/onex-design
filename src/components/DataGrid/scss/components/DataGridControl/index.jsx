import classNames from 'classnames';
import PropTypes from 'prop-types';

const DataGridControl = (props) => {
  const { children, className, dataTestId } = props;

  const dataGridControlsClasses = classNames('onex-data-grid-control', {
    [className]: className,
  });

  return (
    <div className={dataGridControlsClasses} data-test-id={dataTestId}>
      {children}
    </div>
  );
};

DataGridControl.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataTestId: PropTypes.string,
};

DataGridControl.defaultProps = {
  className: undefined,
  children: undefined,
  dataTestId: undefined,
};

export default DataGridControl;
