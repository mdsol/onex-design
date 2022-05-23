import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Icon/scss';

const iconVariants = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
};

const Hint = ({ className, variant, children, icon, dataTestId }) => {
  const classes = classNames('onex-hint', `onex-hint--variant-${variant}`, {
    [className]: className,
  });

  return (
    <div className={classes} data-test-id={dataTestId}>
      <div className="onex-hint__icon">{icon || <Icon>{iconVariants[variant]}</Icon>}</div>
      <span className="onex-hint__body">{children}</span>
    </div>
  );
};

Hint.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  children: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  dataTestId: PropTypes.string,
};

Hint.defaultProps = {
  className: '',
  variant: 'info',
  children: undefined,
  icon: undefined,
  dataTestId: undefined,
};

export default Hint;
