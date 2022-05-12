import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Spinner } from 'react-bootstrap';

const DefaultSpinner = ({ className, ...props }) => {
  const classes = classNames('onex-spinner', `onex-spinner--${props.size}`, {
    [className]: className,
  });

  return (
    <div className={classes}>
      <Spinner {...props} variant="primary" />
    </div>
  );
};

DefaultSpinner.propTypes = {
  animation: PropTypes.oneOf(['border', 'grow']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

DefaultSpinner.defaultProps = {
  animation: 'border',
  size: 'md',
  className: '',
};

export default DefaultSpinner;
