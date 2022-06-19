import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Toast as ReactToast, ToastContainer } from 'react-bootstrap';
import Button from '../../Buttons/scss';
import Icon from '../../Icon/scss';

const iconVariants = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
};

const Toast = React.forwardRef((props, ref) => {
  const {
    className,
    animation,
    autohide,
    variant,
    delay,
    show,
    closeButton,
    position,
    showDefaultIcon,
    icon,
    header,
    children,
    onClose,
    dataTestId,
    ...accProps
  } = props;

  const toastClassNames = classNames('onex-toast', `onex-toast--variant-${variant}`, {
    [className]: className,
  });

  // eslint-disable-next-line no-nested-ternary
  const toastPosition = position.includes('left')
    ? position.replace('left', 'start')
    : position.includes('right')
    ? position.replace('right', 'end')
    : position;

  return (
    <ToastContainer
      {...accProps}
      ref={ref}
      className={toastClassNames}
      position={toastPosition}
      data-test-id={dataTestId}
    >
      <ReactToast
        className="onex-toast__block"
        show={show}
        delay={delay}
        animation={animation}
        autohide={autohide}
        bg={variant}
      >
        <ReactToast.Header className="onex-toast__header" closeButton={false}>
          {(showDefaultIcon || icon) && (
            <div className="onex-toast__icon">{icon || <Icon>{iconVariants[variant]}</Icon>}</div>
          )}
          <div className="onex-toast__message">{header}</div>
          {closeButton && (
            <Button
              className="onex-toast__btn-close"
              variant="tertiary"
              type="icon"
              onClick={onClose}
            >
              <Icon>close</Icon>
            </Button>
          )}
        </ReactToast.Header>
        {children && <ReactToast.Body className="onex-toast__body"> {children} </ReactToast.Body>}
      </ReactToast>
    </ToastContainer>
  );
});

Toast.propTypes = {
  className: PropTypes.string,
  animation: PropTypes.bool,
  autohide: PropTypes.bool,
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  delay: PropTypes.number,
  show: PropTypes.bool,
  closeButton: PropTypes.bool,
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'middle-left',
    'middle-center',
    'middle-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ]),
  icon: PropTypes.node,
  showDefaultIcon: PropTypes.bool,
  onClose: PropTypes.func,
  dataTestId: PropTypes.string,
  header: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Toast.defaultProps = {
  className: undefined,
  animation: true,
  autohide: true,
  variant: 'info',
  delay: 5000,
  show: false,
  closeButton: true,
  position: 'bottom-right',
  icon: undefined,
  showDefaultIcon: true,
  onClose: undefined,
  dataTestId: undefined,
  header: undefined,
  children: undefined,
};

export default Toast;
