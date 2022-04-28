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
  variant: PropTypes.string,
};

CustomProgressBar.defaultProps = {
  now: 0,
  variant: 'info',
};

export default CustomProgressBar;
