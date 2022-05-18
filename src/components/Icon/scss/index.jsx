import classNames from 'classnames';
import PropTypes from 'prop-types';

const Icon = ({ children, className }) => {
  const classes = classNames('material-icons-round onex-material-icon', { [className]: className });

  return <span className={classes}>{children}</span>;
};

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

Icon.defaultProps = {
  className: undefined,
  children: undefined,
};

export default Icon;
