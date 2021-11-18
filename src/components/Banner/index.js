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

const Banner = React.forwardRef((props, ref) => {
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
        message,
        onClose,
    } = props;

    const bannerClassNames = classNames('c-banner', `c-banner--variant-${variant}`, {
        [className]: className,
    });

    return (
        <ToastContainer ref={ref} className={bannerClassNames} position={position}>
            <Toast
                className="c-banner__block"
                show={show}
                delay={delay}
                animation={animation}
                autohide={autohide}
                bg={variant}
            >
                <Toast.Header className="c-banner__header" closeButton={false}>
                    {(showDefaultIcon || icon) && (
                        <div className="c-banner__icon">{icon || IconVariants[variant]}</div>
                    )}
                    <div className="c-banner__message">{message}</div>
                    {closeButton && (
                        <Button
                            className="c-banner__btn-close"
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

Banner.propTypes = {
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
    message: PropTypes.string,
    onClose: PropTypes.func,
};

Banner.defaultProps = {
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
    message: undefined,
    onClose: undefined,
};

export default Banner;
