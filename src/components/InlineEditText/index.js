import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import PenEditIcon from '../../icons/PenEdit';
import CheckIcon from '../../icons/CheckIcon';
import CustomButton from '../Button';
import XIcon from '../../icons/XIcon';

const InlineEditText = React.forwardRef((props, ref) => {
    const {
        className,
        label,
        errorMessage,
        placeholder,
        controlId,
        size,
        readOnly,
        disabled,
        value,
        onChange,
        isInvalid,
        required,
        dataTestId,
    } = props;

    const [_value, setValue] = useState(value);
    const [isActive, setIsActive] = useState(false);
    const [_status, setStatus] = useState('done');

    useEffect(() => {
        setValue(value);
    }, [value]);

    const inputClassNames = classNames('onex-text-field', {
        [className]: className,
        'onex-text-field--lg': size === 'lg',
        'onex-text-field--sm': size === 'sm',
        'onex-text-field--complete': _status === 'done',
    });

    const onFocus = () => {
        setIsActive(true);
    };
    const onBlur = () => {
        if (_status !== 'changing') {
            setIsActive(false);
        }
    };
    const handleComplete = () => {
        setStatus('done');
        setIsActive(false);
        onChange?.(_value);
    };
    const handleCancel = () => {
        setStatus('cancel');
        setIsActive(false);
        setValue(value);
        onChange?.(value);
    };
    const changeValue = (val) => {
        setValue(val);
        setStatus('changing');
    };

    const onHandleChange = (event) => {
        changeValue(event.target.value);
    };

    return (
        <Form.Group
            ref={ref}
            className={inputClassNames}
            controlId={controlId}
            onFocus={onFocus}
            onBlur={onBlur}
            data-test-id={dataTestId}
        >
            {label && size === 'lg' && <Form.Label>{label}</Form.Label>}
            <div className="onex-edit-text">
                <Form.Control
                    type="text"
                    placeholder={placeholder}
                    size={size}
                    disabled={disabled}
                    isInvalid={isInvalid}
                    readOnly={readOnly}
                    required={required}
                    value={_value}
                    onChange={onHandleChange}
                    className={classNames({
                        'onex-edit-text__input': !isActive,
                        'onex-edit-text__input__active': isActive,
                        'onex-edit-text__input__disabled': disabled,
                    })}
                />
                {!isActive && (
                    <div className="onex-edit-text__icon">
                        <PenEditIcon />
                    </div>
                )}
            </div>
            {isActive && !isInvalid && (
                <div className="status-buttons">
                    <CustomButton
                        className="status-buttons__complete"
                        variant="primary"
                        onClick={handleComplete}
                    >
                        <CheckIcon />
                    </CustomButton>
                    <CustomButton
                        className="status-buttons__cancel"
                        variant="secondary"
                        onClick={handleCancel}
                    >
                        <XIcon />
                    </CustomButton>
                </div>
            )}
            {isInvalid && !disabled && (
                <Form.Text className="onex-text-field__error">{errorMessage}</Form.Text>
            )}
        </Form.Group>
    );
});

InlineEditText.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm']),
    controlId: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    dataTestId: PropTypes.string,
};

InlineEditText.defaultProps = {
    className: undefined,
    label: undefined,
    errorMessage: undefined,
    value: '',
    placeholder: undefined,
    size: 'sm',
    controlId: undefined,
    readOnly: false,
    disabled: false,
    isInvalid: false,
    required: false,
    onChange: undefined,
    dataTestId: undefined,
};

export default InlineEditText;
