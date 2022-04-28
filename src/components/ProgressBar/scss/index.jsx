import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import classNames from 'classnames';

const CustomProgressBar = (props) => {
  const classes = classNames('onex-progressbar', {
    [props.className]: props.className,
  });

  return <ProgressBar {...props} className={classes} />;
};

CustomProgressBar.propTypes = {
  now: PropTypes.number,
  variant: PropTypes.oneOf(['info', 'danger', 'success', 'warning']).isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  striped: PropTypes.bool,
  animated: PropTypes.bool
};

CustomProgressBar.defaultProps = {
  now: 0,
  variant: 'info',
};

export default CustomProgressBar;
