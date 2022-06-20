import React, { useEffect, useState, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
// eslint-disable-next-line import/named
import { passwordVariantType, passwordHelpTextType } from './propTypes';
import HelpText from './components/HelpText';
import InputButton from './components/InputButton';

const TextField = React.forwardRef((props, ref) => {
  const {
    autoFocus,
    className,
    label,
    errorMessage,
    placeholder,
    size,
    type,
    readOnly,
    disabled,
    value,
    onChange,
    isInvalid,
    required,
    showClearBtn,
    helpText,
    dataTestId,
    passwordHelpText,
    passwordVariant,
    maxLength,
    minLength,
    ...accProps
  } = props;

  const [_value, _setValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const inputClassNames = useMemo(
    () =>
      classNames('onex-text-field', {
        [className]: className,
        'onex-text-field--lg': size === 'lg' || size === 'md',
        'onex-text-field--sm': size === 'sm',
        'onex-text-field--disabled': disabled,
        'onex-text-field--has-clear-btn': showClearBtn,
        'onex-text-field--filled': _value,
        'onex-text-field--text': type === 'text',
        'onex-text-field--password': size === 'password',
      }),
    [_value],
  );

  const changeValue = (val) => {
    _setValue(val);
    onChange?.(val);
  };

  const handleClear = () => {
    changeValue('');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onHandleChange = (event) => {
    changeValue(event.target.value);
  };

  const inputType = useMemo(() => {
    if (type === 'text') {
      return type;
    }

    return showPassword ? 'text' : type;
  }, [showPassword]);

  useEffect(() => {
    _setValue(value);
  }, [value]);

  return (
    <Form.Group {...accProps} className={inputClassNames} data-test-id={dataTestId}>
      {label && <Form.Label>{label}</Form.Label>}
      <div className="onex-text-field__input">
        <Form.Control
          ref={ref}
          autoFocus={autoFocus}
          type={inputType}
          placeholder={placeholder}
          size={size === 'md' ? 'lg' : size}
          disabled={disabled}
          isInvalid={isInvalid}
          readOnly={readOnly}
          required={required}
          value={_value}
          onChange={onHandleChange}
          maxLength={maxLength}
          minLength={minLength}
        />
        <InputButton
          disabled={disabled}
          showClearBtn={showClearBtn}
          value={_value}
          type={type}
          showPassword={showPassword}
          handleClick={type === 'password' ? handleTogglePassword : handleClear}
        />
      </div>

      <HelpText
        helpText={helpText}
        disabled={disabled}
        errorMessage={errorMessage}
        passwordHelpText={passwordHelpText}
        passwordVariant={passwordVariant}
        isInvalid={isInvalid}
        value={_value}
      />
    </Form.Group>
  );
});

TextField.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['md', 'sm']),
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  passwordVariant: passwordVariantType,
  passwordHelpText: passwordHelpTextType,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  showClearBtn: PropTypes.bool,
  helpText: PropTypes.string,
  dataTestId: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
};

TextField.defaultProps = {
  autoFocus: false,
  className: undefined,
  label: undefined,
  errorMessage: undefined,
  value: '',
  placeholder: undefined,
  size: 'sm',
  type: 'text',
  passwordVariant: undefined,
  readOnly: false,
  disabled: false,
  isInvalid: false,
  required: false,
  showClearBtn: false,
  passwordHelpText: {},
  helpText: undefined,
  onChange: undefined,
  dataTestId: undefined,
  maxLength: undefined,
  minLength: undefined,
};

export default TextField;
