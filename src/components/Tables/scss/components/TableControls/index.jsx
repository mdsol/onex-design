import classNames from 'classnames';
import PropTypes from 'prop-types';

const TableControl = (props) => {
  const { children, className, dataTestId, ...accProps } = props;

  const tableControlsClasses = classNames('onex-table-control', {
    [className]: className,
  });

  return (
    <div {...accProps} className={tableControlsClasses} data-test-id={dataTestId}>
      {children}
    </div>
  );
};

TableControl.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataTestId: PropTypes.string,
};

TableControl.defaultProps = {
  className: undefined,
  children: undefined,
  dataTestId: undefined,
};

export default TableControl;
