import React from 'react';
import { ToggleButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomToggleButton = React.forwardRef((props, ref) => {
    const { children, className, disabled, value, id, name, ...accProps } = props;
    const buttonClassNames = classNames('c-toggle-btn', {
        [className]: className,
    });

    return (
        <div className="c-toggle-btn-wrapper">
            <ToggleButton
                id={id}
                ref={ref}
                className={buttonClassNames}
                value={value}
                disabled={disabled}
                name={name}
                variant="toggle"
                {...accProps}
            >
                {children}
            </ToggleButton>
        </div>
    );
});

CustomToggleButton.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
};

CustomToggleButton.defaultProps = {
    className: undefined,
    disabled: false,
    children: undefined,
    value: undefined,
};

export default CustomToggleButton;
