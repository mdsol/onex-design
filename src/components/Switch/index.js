import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomSwitch = React.forwardRef((props, ref) => {
    const { className, disabled, checked, label, id, onChange } = props;
    const switchClassNames = classNames('c-switch', {
        [className]: className,
    });

    return (
        <Form.Switch
            ref={ref}
            className={switchClassNames}
            disabled={disabled}
            checked={checked}
            label={label}
            id={id}
            onChange={onChange}
        />
    );
});

CustomSwitch.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

CustomSwitch.defaultProps = {
    className: undefined,
    disabled: false,
    checked: false,
    label: undefined,
    onChange: undefined,
};

export default CustomSwitch;
