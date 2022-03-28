import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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
    helpText,
    dataTestId,
  } = props;

  const inputClassNames = classNames('onex-text-field', {
    [className]: className,
    'onex-text-field--lg': size === 'lg',
    'onex-text-field--sm': size === 'sm',
    'onex-text-field--disabled': disabled,
    'onex-text-field--has-icon': icon || showDefaultIcon,
    'onex-text-field--has-clear-btn': showClearBtn,
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
      <div className="onex-text-field__input">
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
          <div className="onex-text-field__icon">
            {icon && icon}
            {showDefaultIcon && !icon && <SearchOutlinedIcon />}
          </div>
        )}
        {showClearBtn && (
          <button
            className="onex-text-field__clear-btn"
            type="button"
            onClick={handleClear}
            disabled={disabled}
          >
            <HighlightOffOutlinedIcon />
          </button>
        )}
      </div>
      {(helpText || (isInvalid && !disabled)) && (
        <Form.Text className="onex-text-field__help">{errorMessage}</Form.Text>
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
  helpText: PropTypes.string,
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
  helpText: undefined,
  onChange: undefined,
  dataTestId: undefined,
};

export default TextField;
