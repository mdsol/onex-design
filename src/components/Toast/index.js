import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Toast, ToastContainer } from 'react-bootstrap';
import {
    CheckIcon,
    InfoRoundFillIcon,
    WarningTriangleFillIcon,
    ErrorFillIcon,
    XIcon,
} from '../../icons';
import Button from '../Button';

const IconVariants = {
    info: <InfoRoundFillIcon />,
    success: <CheckIcon />,
    warning: <WarningTriangleFillIcon />,
    error: <ErrorFillIcon />,
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
        children,
        onClose,
        dataTestId,
    } = props;

    const toastClassNames = classNames('c-toast', `c-toast--variant-${variant}`, {
        [className]: className,
    });

    return (
        <ToastContainer
            ref={ref}
            className={toastClassNames}
            position={position}
            data-test-id={dataTestId}
        >
            <Toast
                className="c-toast__block"
                show={show}
                delay={delay}
                animation={animation}
                autohide={autohide}
                bg={variant}
            >
                <Toast.Header className="c-toast__header" closeButton={false}>
                    {(showDefaultIcon || icon) && (
                        <div className="c-toast__icon">{icon || IconVariants[variant]}</div>
                    )}
                    <div className="c-toast__message">{children}</div>
                    {closeButton && (
                        <Button
                            className="c-toast__btn-close"
                            variant="icon-link"
                            onClick={onClose}
                        >
                            <XIcon />
                        </Button>
                    )}
                </Toast.Header>
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
        'top-start',
        'top-center',
        'top-end',
        'middle-start',
        'middle-center',
        'middle-end',
        'bottom-start',
        'bottom-center',
        'bottom-end',
    ]),
    icon: PropTypes.node,
    showDefaultIcon: PropTypes.bool,
    onClose: PropTypes.func,
    dataTestId: PropTypes.string,
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
    position: 'top-end',
    icon: undefined,
    showDefaultIcon: true,
    onClose: undefined,
    dataTestId: undefined,
    children: undefined,
};

export default CustomToast;
