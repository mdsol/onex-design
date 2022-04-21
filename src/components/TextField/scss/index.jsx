import React, { useEffect, useState, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

const HelpText = ({
  helpText,
  errorMessage,
  isInvalid,
  disabled,
  passwordHelpText,
  passwordVariant,
}) => {
  if (isInvalid && !disabled) {
    return <Form.Text className="onex-text-field__help--error">{errorMessage}</Form.Text>;
  }

  if (passwordVariant && !disabled) {
    return (
      <Form.Text className="onex-text-field__help--password">
        {passwordHelpText[passwordVariant]}
      </Form.Text>
    );
  }

  if (helpText) {
    return <Form.Text className="onex-text-field__help">{helpText}</Form.Text>;
  }

  return null;
};

const InputButton = ({ type, showClearBtn, value, disabled, handleClick, showPassword }) => {
  if (type === 'password') {
    return (
      <button
        className="onex-text-field__clear-btn"
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        {showPassword ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
      </button>
    );
  }

  if (showClearBtn && value) {
    return (
      <button
        className="onex-text-field__clear-btn"
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        <HighlightOffRoundedIcon />
      </button>
    );
  }

  return null;
};

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
    trailingIcon,
    showClearBtn,
    helpText,
    dataTestId,
    passwordHelpText,
    passwordVariant,
  } = props;

  const [_value, _setValue] = useState(value);
  const [showPassword, setShowPassword] = useState(true);

  const inputClassNames = useMemo(
    () =>
      classNames('onex-text-field', {
        [className]: className,
        'onex-text-field--lg': size === 'lg',
        'onex-text-field--sm': size === 'sm',
        'onex-text-field--disabled': disabled,
        'onex-text-field--has-clear-btn': showClearBtn,
        'onex-text-field--filled': _value,
        'onex-text-field--has-trailing-icon': trailingIcon,
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
    <Form.Group className={inputClassNames} data-test-id={dataTestId}>
      {label && <Form.Label>{label}</Form.Label>}
      <div className="onex-text-field__input">
        <Form.Control
          ref={ref}
          autoFocus={autoFocus}
          type={inputType}
          placeholder={placeholder}
          size={size}
          disabled={disabled}
          isInvalid={isInvalid}
          readOnly={readOnly}
          required={required}
          value={_value}
          onChange={onHandleChange}
        />
        {type === 'password' || (showClearBtn && !!_value) ? (
          <InputButton
            disabled={disabled}
            showClearBtn={showClearBtn}
            value={_value}
            type={type}
            handleClick={type === 'password' ? handleTogglePassword : handleClear}
          />
        ) : (
          trailingIcon && <div className="onex-text-field__trailing-icon">{trailingIcon}</div>
        )}
      </div>

      <HelpText
        helpText={helpText}
        disabled={disabled}
        errorMessage={errorMessage}
        passwordHelpText={passwordHelpText}
        passwordVariant={passwordVariant}
      />
    </Form.Group>
  );
});

const passwordVariantType = PropTypes.oneOf(['strong', 'medium', 'weak']);

const passwordHelpTextType = PropTypes.shape({
  [passwordVariantType]: PropTypes.string,
});

TextField.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  type: PropTypes.oneOf(['text', 'password']),
  passwordVariant: passwordVariantType,
  passwordHelpText: passwordHelpTextType,
  trailingIcon: PropTypes.node,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  showClearBtn: PropTypes.bool,
  helpText: PropTypes.string,
  dataTestId: PropTypes.string,
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
  trailingIcon: undefined,
  helpText: undefined,
  onChange: undefined,
  dataTestId: undefined,
};

HelpText.propTypes = {
  errorMessage: PropTypes.string,
  passwordVariant: passwordVariantType,
  passwordHelpText: passwordHelpTextType,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  helpText: PropTypes.string,
};

HelpText.defaultProps = {
  errorMessage: undefined,
  passwordVariant: undefined,
  disabled: false,
  isInvalid: false,
  passwordHelpText: {},
  helpText: undefined,
};

InputButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['text', 'password']),
  showClearBtn: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  showPassword: PropTypes.bool,
};

InputButton.defaultProps = {
  value: '',
  type: 'text',
  showClearBtn: false,
  disabled: false,
  handleClick: undefined,
  showPassword: false,
};

export default TextField;
