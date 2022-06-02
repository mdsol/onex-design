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
  hasPrimaryAction,
  hasSecondaryAction,
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
      {children && (
        <>
          <div className="onex-alert__body">{children}</div>
          <div className="onex-alert__control">
            {hasPrimaryAction && (
              <Button onClick={primaryAction} size="md" variant="secondary">
                {primaryText}
              </Button>
            )}
            {hasSecondaryAction && (
              <Button onClick={secondaryAction} size="md" variant="tertiary">
                {secondaryText}
              </Button>
            )}
          </div>
        </>
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
  hasPrimaryAction: PropTypes.bool,
  hasSecondaryAction: PropTypes.bool,
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
  hasPrimaryAction: false,
  hasSecondaryAction: false,
};

export default Alert;
