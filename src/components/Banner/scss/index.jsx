import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Icon/scss';

const iconVariants = {
  info: 'campaign',
  warning: 'warning',
  error: 'error',
};

const Banner = ({ className, variant, children, icon, dataTestId }) => {
  const classes = classNames('onex-banner', `onex-banner--variant-${variant}`, {
    [className]: className,
  });

  return (
    <div className={classes} data-test-id={dataTestId}>
      <div className="onex-banner__icon">{icon || <Icon>{iconVariants[variant]}</Icon>}</div>
      <span className="onex-banner__body">{children}</span>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'warning', 'error']),
  children: PropTypes.node,
  icon: PropTypes.node,
  dataTestId: PropTypes.string,
};

Banner.defaultProps = {
  className: '',
  variant: 'info',
  children: undefined,
  icon: undefined,
  dataTestId: undefined,
};

export default Banner;
