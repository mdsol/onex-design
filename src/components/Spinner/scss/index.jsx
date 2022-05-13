import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Spinner as ReactSpinner } from 'react-bootstrap';

const Spinner = ({ className, ...props }) => {
  const classes = classNames('onex-spinner', `onex-spinner--${props.size}`, {
    [className]: className,
  });

  return (
    <div className={classes}>
      <ReactSpinner {...props} variant="primary" animation="border" />
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'md',
  className: '',
};

export default Spinner;
