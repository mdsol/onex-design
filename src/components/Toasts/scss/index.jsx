import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import {
  ErrorRounded,
  WarningRounded,
  InfoRounded,
  CheckCircleRounded,
  CloseRounded,
} from '@mui/icons-material';
import Button from '../../Buttons/scss';

const IconVariants = {
  info: <InfoRounded />,
  success: <CheckCircleRounded />,
  warning: <WarningRounded />,
  error: <ErrorRounded />,
};

const CustomToast = React.forwardRef((props, ref) => {
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
      ref={ref}
      className={toastClassNames}
      position={toastPosition}
      data-test-id={dataTestId}
    >
      <Toast
        className="onex-toast__block"
        show={show}
        delay={delay}
        animation={animation}
        autohide={autohide}
        bg={variant}
      >
        <Toast.Header className="onex-toast__header" closeButton={false}>
          {(showDefaultIcon || icon) && (
            <div className="onex-toast__icon">{icon || IconVariants[variant]}</div>
          )}
          <div className="onex-toast__message">{header}</div>
          {closeButton && (
            <Button
              className="onex-toast__btn-close"
              variant="tertiary"
              type="icon"
              onClick={onClose}
            >
              <CloseRounded />
            </Button>
          )}
        </Toast.Header>
        {children && <Toast.Body className="onex-toast__body"> {children} </Toast.Body>}
      </Toast>
    </ToastContainer>
  );
});

CustomToast.propTypes = {
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

CustomToast.defaultProps = {
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

export default CustomToast;
