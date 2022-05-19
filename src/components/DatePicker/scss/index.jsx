import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

const DatePicker = React.forwardRef((props, ref) => {
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
    helpText,
    dataTestId,
  } = props;

  const [_value, _setValue] = useState(value);
  const [showCalendar, setShowCalendar] = useState(false);

  const datePickerClassNames = classNames('onex-date-picker', {
    [className]: className,
  });

  const changeValue = (val) => {
    _setValue(val);
    onChange?.(val);
  };

  const onHandleChange = (event) => {
    changeValue(event.target.value);
  };

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <Form.Group className={datePickerClassNames} data-test-id={dataTestId}>
      {label && <Form.Label>{label}</Form.Label>}
      <div className="onex-date-picker__input">
        <Form.Control
          ref={ref}
          autoFocus={autoFocus}
          placeholder={placeholder}
          size={size === 'md' ? 'lg' : size}
          disabled={disabled}
          isInvalid={isInvalid}
          readOnly={readOnly}
          required={required}
          value={_value}
          onChange={onHandleChange}
        />
        <button
          className="onex-date-picker__toggle-calendar"
          type="button"
          onClick={handleToggleCalendar}
          disabled={disabled}
        >
          <CalendarTodayRoundedIcon />
        </button>
      </div>
      <div className="onex-date-picker__footer">
        {!disabled && isInvalid && errorMessage && (
          <Form.Text className="onex-date-picker__error">{errorMessage}</Form.Text>
        )}
        {!errorMessage && helpText && (
          <Form.Text className="onex-date-picker__help">{helpText}</Form.Text>
        )}
      </div>
    </Form.Group>
  );
});

DatePicker.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['md', 'sm']),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  dataTestId: PropTypes.string,
};

DatePicker.defaultProps = {
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
  helpText: undefined,
  onChange: undefined,
  dataTestId: undefined,
};

export default DatePicker;
