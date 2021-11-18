import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomButton = React.forwardRef((props, ref) => {
    const { children, className, ...accProps } = props;
    const buttonClassNames = classNames('c-btn', {
        [className]: className,
    });

    return (
        <Button ref={ref} className={buttonClassNames} {...accProps}>
            {children}
            {accProps.variant === 'link' && <span className="c-btn__decorator" />}
        </Button>
    );
});

CustomButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary', 'link', 'icon-link']),
    size: PropTypes.oneOf(['lg', 'sm']),
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

CustomButton.defaultProps = {
    className: undefined,
    disabled: false,
    variant: 'primary',
    size: 'sm',
    children: undefined,
    onClick: undefined,
};

export default CustomButton;
