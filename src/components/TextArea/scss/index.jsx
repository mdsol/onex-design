import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const TextArea = React.forwardRef((props, ref) => {
  const {
    className,
    label,
    errorMessage,
    helpText,
    placeholder,
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
    ...accProps
  } = props;

  const inputClassNames = classNames('onex-text-area', {
    [className]: className,
    'onex-text-area--disabled': disabled,
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
    <Form.Group {...accProps} className={inputClassNames} data-test-id={dataTestId}>
      <div className="onex-text-area__header">
        {label && <Form.Label>{label}</Form.Label>}
        {maxNumLength && (
          <div
            className={classNames('onex-text-area__nums', {
              'onex-text-area__nums--err': symbolNum < 0,
            })}
          >
            {symbolNum}
          </div>
        )}
      </div>
      <Form.Control
        ref={ref}
        as="textarea"
        placeholder={placeholder}
        disabled={disabled}
        isInvalid={isInvalid}
        readOnly={readOnly}
        required={required}
        value={_value}
        rows={rows}
        onChange={onHandleChange}
      />
      <div className="onex-text-area__footer">
        {!disabled && isInvalid && errorMessage && (
          <Form.Text className="onex-text-area__error">{errorMessage}</Form.Text>
        )}
        {!errorMessage && helpText && (
          <Form.Text className="onex-text-area__help">{helpText}</Form.Text>
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
