import React, { useState, useEffect, useRef } from 'react';
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
        controlId,
        size,
        readOnly,
        disabled,
        value,
        onChange,
        isError,
        maxNumLength,
        htmlSize,
        required,
        setError,
        rows,
    } = props;

    const inputClassNames = classNames('c-text-area', {
        [className]: className,
        'c-text-area--lg': size === 'lg',
        'c-text-area--sm': size === 'sm',
        'c-text-area--disabled': disabled,
    });

    const [_value, _setValue] = useState(value);
    const [isInvalid, setInvalid] = useState(false);

    const symbolNum = useRef(maxNumLength);

    const onHandleSetError = (isErr) => {
        setError?.(isErr);
        setInvalid(isErr);
    };

    const changeValue = (val) => {
        symbolNum.current = maxNumLength - val.length;

        _setValue(val);
        onChange?.(val);

        onHandleSetError(symbolNum.current < 0);
    };

    const onHandleChange = (event) => {
        changeValue(event.target.value);
    };

    useEffect(() => {
        symbolNum.current = maxNumLength - Number(value?.length);

        _setValue(value);
    }, [maxNumLength, value]);

    useEffect(() => {
        setInvalid(isError);
    }, [isError]);

    return (
        <Form.Group className={inputClassNames} controlId={controlId}>
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
                htmlSize={htmlSize}
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
                            'c-text-area__nums--err': symbolNum.current < 0,
                        })}
                    >
                        {symbolNum.current}
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
    controlId: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    isError: PropTypes.bool,
    required: PropTypes.bool,
    htmlSize: PropTypes.number,
    maxNumLength: PropTypes.number,
    rows: PropTypes.number,
    onChange: PropTypes.func,
    setError: PropTypes.func,
};

TextArea.defaultProps = {
    className: undefined,
    label: undefined,
    errorMessage: undefined,
    helpText: undefined,
    value: '',
    placeholder: undefined,
    size: 'sm',
    controlId: undefined,
    readOnly: false,
    disabled: false,
    isError: false,
    required: false,
    maxNumLength: undefined,
    htmlSize: undefined,
    onChange: undefined,
    setError: undefined,
    rows: undefined,
};

export default TextArea;
