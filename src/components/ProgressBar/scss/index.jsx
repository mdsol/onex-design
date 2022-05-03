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
  animated: PropTypes.bool,
  className: PropTypes.string
};

CustomProgressBar.defaultProps = {
  now: 0,
  variant: 'info',
  min: 0,
  max: 100,
  striped: false,
  animated: false,
  className: '',
};

export default CustomProgressBar;
