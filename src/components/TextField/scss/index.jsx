import React, { useEffect, useState, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const TextField = React.forwardRef((props, ref) => {
  const {
    autoFocus,
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
    trailingIcon,
    showClearBtn,
    showDefaultIcon,
    helpText,
    dataTestId,
  } = props;

  const [_value, _setValue] = useState(value);

  const inputClassNames = useMemo(
    () =>
      classNames('onex-text-field', {
        [className]: className,
        'onex-text-field--lg': size === 'lg',
        'onex-text-field--sm': size === 'sm',
        'onex-text-field--disabled': disabled,
        'onex-text-field--has-icon': icon || showDefaultIcon,
        'onex-text-field--has-clear-btn': showClearBtn,
        'onex-text-field--filled': _value,
        'onex-text-field--has-trailing-icon': trailingIcon,
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

  const onHandleChange = (event) => {
    changeValue(event.target.value);
  };

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
          <div className="onex-text-field__icon">
            {icon && icon}
            {showDefaultIcon && !icon && <SearchRoundedIcon />}
          </div>
        )}
        {showClearBtn && !!_value ? (
          <button
            className="onex-text-field__clear-btn"
            type="button"
            onClick={handleClear}
            disabled={disabled}
          >
            <CancelRoundedIcon />
          </button>
        ) : (
          trailingIcon && <div className="onex-text-field__trailing-icon">{trailingIcon}</div>
        )}
      </div>
      {(helpText || (isInvalid && !disabled)) && (
        <Form.Text
          className={classNames('onex-text-field__help', {
            'onex-text-field__help--error': isInvalid,
          })}
        >
          {helpText || errorMessage}
        </Form.Text>
      )}
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
  size: PropTypes.oneOf(['lg', 'sm']),
  trailingIcon: PropTypes.node,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  required: PropTypes.bool,
  icon: PropTypes.node,
  onChange: PropTypes.func,
  showClearBtn: PropTypes.bool,
  showDefaultIcon: PropTypes.bool,
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
  readOnly: false,
  disabled: false,
  isInvalid: false,
  required: false,
  showClearBtn: false,
  showDefaultIcon: false,
  icon: undefined,
  trailingIcon: undefined,
  helpText: undefined,
  onChange: undefined,
  dataTestId: undefined,
};

export default TextField;
