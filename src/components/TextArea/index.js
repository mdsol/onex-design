import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = React.forwardRef((props, ref) => {
    const {
        className,
        label,
        errorMessage,
        helpText,
        placeholder,
        size,
        readOnly,
        disabled,
        value,
        onChange,
        isError,
        maxNumLength,
        required,
        setError,
        rows,
        dataTestId,
    } = props;

    const inputClassNames = classNames('c-text-area', {
        [className]: className,
        'c-text-area--lg': size === 'lg',
        'c-text-area--sm': size === 'sm',
        'c-text-area--disabled': disabled,
    });

    const [_value, _setValue] = useState(value);
    const [isInvalid, setInvalid] = useState(isError);
    const [symbolNum, setSymbolNum] = useState(maxNumLength);

    const onHandleSetError = (isErr) => {
        setError?.(isErr);
        setInvalid(isErr);
    };

    const changeValue = (val) => {
        const num = maxNumLength - val.length;

        setSymbolNum(num);
        _setValue(val);
        onChange?.(val);
        onHandleSetError(num < 0);
    };

    const onHandleChange = (event) => {
        changeValue(event.target.value);
    };

    useEffect(() => {
        setInvalid(isError);
    }, [isError]);

    useEffect(() => {
        const num = maxNumLength - value.length;

        setSymbolNum(num);
        _setValue(value);
        setInvalid(isError || num < 0);
    }, [maxNumLength, value]);

    return (
        <Form.Group className={inputClassNames} data-test-id={dataTestId}>
            {label && size === 'lg' && <Form.Label>{label}</Form.Label>}
            <Form.Control
                ref={ref}
                as="textarea"
                placeholder={placeholder}
                size={size}
                disabled={disabled}
                isInvalid={isInvalid}
                readOnly={readOnly}
                required={required}
                value={_value}
                rows={rows}
                onChange={onHandleChange}
            />
            <div className="c-text-area__footer">
                {!disabled && isInvalid && (
                    <Form.Text className="c-text-area__error">{errorMessage}</Form.Text>
                )}
                {!isInvalid && helpText && (
                    <Form.Text className="c-text-area__help">{helpText}</Form.Text>
                )}
                {maxNumLength && (
                    <div
                        className={classNames('c-text-area__nums', {
                            'c-text-area__nums--err': symbolNum < 0,
                        })}
                    >
                        {symbolNum}
                    </div>
                )}
            </div>
        </Form.Group>
    );
});

TextArea.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    helpText: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm']),
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    isError: PropTypes.bool,
    required: PropTypes.bool,
    maxNumLength: PropTypes.number,
    rows: PropTypes.number,
    onChange: PropTypes.func,
    setError: PropTypes.func,
    dataTestId: PropTypes.string,
};

TextArea.defaultProps = {
    className: undefined,
    label: undefined,
    errorMessage: undefined,
    helpText: undefined,
    value: '',
    placeholder: undefined,
    size: 'sm',
    readOnly: false,
    disabled: false,
    isError: false,
    required: false,
    maxNumLength: undefined,
    onChange: undefined,
    setError: undefined,
    rows: undefined,
    dataTestId: undefined,
};

export default TextArea;
