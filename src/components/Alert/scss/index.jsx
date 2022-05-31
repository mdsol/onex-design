import PropTypes, { oneOfType } from 'prop-types';
import classNames from 'classnames';
import { Alert as ReactAlert } from 'react-bootstrap';
import Button from '../../Buttons/scss';
import Icon from '../../Icon/scss';

const iconVariants = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
};

const Alert = ({
  className,
  variant,
  title,
  children,
  primaryAction,
  primaryText,
  secondaryAction,
  secondaryText,
  show,
  transition,
  dataTestId,
}) => {
  const classes = classNames('onex-alert', {
    [className]: className,
  });

  return (
    <ReactAlert
      show={show}
      transition={transition}
      variant={variant}
      className={classes}
      data-test-id={dataTestId}
    >
      <ReactAlert.Heading>
        <span className="onex-alert__icon">
          <Icon>{iconVariants[variant]}</Icon>
        </span>
        {title}
      </ReactAlert.Heading>
      <div className="onex-alert__body">{children}</div>
      {children && (
        <div className="onex-alert__control">
          {primaryAction && (
            <Button onClick={primaryAction} size="md" variant="secondary">
              {primaryText}
            </Button>
          )}
          {secondaryAction && (
            <Button onClick={secondaryAction} size="md" variant="tertiary">
              {secondaryText}
            </Button>
          )}
        </div>
      )}
    </ReactAlert>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  title: PropTypes.string,
  children: oneOfType([PropTypes.string, PropTypes.element]),
  primaryAction: PropTypes.func,
  primaryText: PropTypes.string,
  secondaryAction: PropTypes.func,
  secondaryText: PropTypes.string,
  show: PropTypes.bool,
  transition: oneOfType([PropTypes.bool, PropTypes.elementType]),
  dataTestId: PropTypes.string,
};

Alert.defaultProps = {
  className: '',
  variant: 'info',
  title: 'Title',
  children: undefined,
  primaryAction: null,
  primaryText: '',
  secondaryAction: null,
  secondaryText: '',
  show: false,
  transition: false,
  dataTestId: undefined,
};

export default Alert;
