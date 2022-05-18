import PropTypes from 'prop-types';
import { ProgressBar as ReactProgressBar } from 'react-bootstrap';
import classNames from 'classnames';

const ProgressBar = ({ className, variant, ...props }) => {
  const classes = classNames('onex-progressbar', `onex-progressbar__bg-${variant}`, {
    [className]: className,
  });

  return <ReactProgressBar {...props} className={classes} variant={variant} />;
};

ProgressBar.propTypes = {
  now: PropTypes.number,
  variant: PropTypes.oneOf(['info', 'danger', 'success', 'warning']),
  min: PropTypes.number,
  max: PropTypes.number,
  striped: PropTypes.bool,
  animated: PropTypes.bool,
  className: PropTypes.string,
};

ProgressBar.defaultProps = {
  now: 0,
  variant: 'info',
  min: 0,
  max: 100,
  striped: false,
  animated: false,
  className: '',
};

export default ProgressBar;
