import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CircleCloseIcon from '../../icons/CircleCloseIcon';
import SearchIcon from '../../icons/SearchIcon';

const TextField = React.forwardRef((props, ref) => {
    const {
        className,
        label,
        errorMessage,
        placeholder,
        size,
        readOnly,
        disabled,
        value,
        onChange,
        isInvalid,
        required,
        icon,
        showClearBtn,
        showDefaultIcon,
        dataTestId,
    } = props;

    const inputClassNames = classNames('c-text-field', {
        [className]: className,
        'c-text-field--lg': size === 'lg',
        'c-text-field--sm': size === 'sm',
        'c-text-field--disabled': disabled,
        'c-text-field--has-icon': icon || showDefaultIcon,
        'c-text-field--has-clear-btn': showClearBtn,
    });

    const [_value, _setValue] = useState(value);

    const changeValue = (val) => {
        _setValue(val);
        onChange?.(val);
    };

    const handleClear = () => {
        changeValue('');
    };

    const onHandleChange = (event) => {
        changeValue(event.target.value);
    };

    useEffect(() => {
        _setValue(value);
    }, [value]);

    return (
        <Form.Group className={inputClassNames} data-test-id={dataTestId}>
            {label && size === 'lg' && <Form.Label>{label}</Form.Label>}
            <div className="c-text-field__input">
                <Form.Control
                    ref={ref}
                    type="text"
                    placeholder={placeholder}
                    size={size}
                    disabled={disabled}
                    isInvalid={isInvalid}
                    readOnly={readOnly}
                    required={required}
                    value={_value}
                    onChange={onHandleChange}
                />
                {(icon || showDefaultIcon) && (
                    <div className="c-text-field__icon">
                        {icon && icon}
                        {showDefaultIcon && !icon && <SearchIcon />}
                    </div>
                )}
                {showClearBtn && (
                    <button
                        className="c-text-field__clear-btn"
                        type="button"
                        onClick={handleClear}
                        disabled={disabled}
                    >
                        <CircleCloseIcon />
                    </button>
                )}
            </div>
            {isInvalid && !disabled && (
                <Form.Text className="c-text-field__error">{errorMessage}</Form.Text>
            )}
        </Form.Group>
    );
});

TextField.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm']),
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    required: PropTypes.bool,
    icon: PropTypes.node,
    onChange: PropTypes.func,
    showClearBtn: PropTypes.bool,
    showDefaultIcon: PropTypes.bool,
    dataTestId: PropTypes.string,
};

TextField.defaultProps = {
    className: undefined,
    label: undefined,
    errorMessage: undefined,
    value: '',
    placeholder: undefined,
    size: 'sm',
    readOnly: false,
    disabled: false,
    isInvalid: false,
    required: false,
    showClearBtn: false,
    showDefaultIcon: false,
    icon: undefined,
    onChange: undefined,
    dataTestId: undefined,
};

export default TextField;
