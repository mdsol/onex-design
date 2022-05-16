import PropTypes, { oneOfType } from 'prop-types';
import classNames from 'classnames';
import { Alert as ReactAlert } from 'react-bootstrap';
import React from 'react';
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
  body,
  primaryAction,
  primaryText,
  secondaryAction,
  secondaryText,
  show,
  transition,
}) => {
  const classes = classNames('onex-alert', {
    [className]: className,
  });

  return (
    <ReactAlert show={show} transition={transition} variant={variant} className={classes}>
      <ReactAlert.Heading>
        <span className="onex-alert__icon">
          <Icon>{iconVariants[variant]}</Icon>
        </span>
        {title}
      </ReactAlert.Heading>
      <div className="onex-alert__body">{body}</div>
      <div className="onex-alert__control">
        {primaryAction && (
          <Button onClick={primaryAction} variant="secondary">
            {primaryText}
          </Button>
        )}
        {secondaryAction && (
          <Button onClick={secondaryAction} variant="tertiary">
            {secondaryText}
          </Button>
        )}
      </div>
    </ReactAlert>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  title: PropTypes.string,
  body: oneOfType([PropTypes.string, PropTypes.element]),
  primaryAction: PropTypes.func,
  primaryText: PropTypes.string,
  secondaryAction: PropTypes.func,
  secondaryText: PropTypes.string,
  show: PropTypes.bool,
  transition: oneOfType([PropTypes.bool, PropTypes.elementType]),
};

Alert.defaultProps = {
  className: '',
  variant: 'info',
  title: 'Title',
  body: '',
  primaryAction: null,
  primaryText: '',
  secondaryAction: null,
  secondaryText: '',
  show: false,
  transition: false,
};

export default Alert;
