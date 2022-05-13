import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Spinner as ReactSpinner } from 'react-bootstrap';

const Spinner = ({ className, ...props }) => {
  const classes = classNames('onex-spinner', `onex-spinner--${props.size}`, {
    [className]: className,
  });

  return (
    <div className={classes}>
      <ReactSpinner {...props} variant="primary" />
    </div>
  );
};

Spinner.propTypes = {
  animation: PropTypes.oneOf(['border', 'grow']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

Spinner.defaultProps = {
  animation: 'border',
  size: 'md',
  className: '',
};

export default Spinner;
