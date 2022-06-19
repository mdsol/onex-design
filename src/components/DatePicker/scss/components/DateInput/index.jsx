import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import Icon from '../../../../Icon/scss';

const DateInput = React.forwardRef((props, ref) => {
  const {
    autoFocus,
    label,
    errorMessage,
    placeholder,
    size,
    readOnly,
    disabled,
    value,
    isInvalid,
    required,
    helpText,
    handleChange,
    handleToggleCalendar,
    onKeyDown,
    onBlur,
    target,
    showCalendar,
    ...accProps
  } = props;

  const dateInputClassNames = classNames('onex-date-picker', {
    'onex-date-picker--lg': size === 'lg' || size === 'md',
    'onex-date-picker--sm': size === 'sm',
    'onex-date-picker--disabled': disabled,
    'onex-date-picker--focused': showCalendar,
  });

  return (
    <Form.Group ref={target} {...accProps} className={dateInputClassNames}>
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
          value={value}
          onKeyDown={onKeyDown}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <button
          className="onex-date-picker__toggle-calendar"
          type="button"
          onClick={handleToggleCalendar}
          disabled={disabled}
        >
          <Icon>calendar_today</Icon>
        </button>
      </div>
      {!disabled && isInvalid && errorMessage && (
        <Form.Text className="onex-date-picker__help onex-date-picker__help--error">
          {errorMessage}
        </Form.Text>
      )}
      {!errorMessage && helpText && (
        <Form.Text className="onex-date-picker__help">{helpText}</Form.Text>
      )}
    </Form.Group>
  );
});

/* eslint-disable */
DateInput.propTypes = {
  autoFocus: PropTypes.bool,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  required: PropTypes.bool,
  helpText: PropTypes.string,
  handleChange: PropTypes.func,
  handleToggleCalendar: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  target: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  showCalendar: PropTypes.bool,
};
/* eslint-enable */

DateInput.defaultProps = {
  autoFocus: false,
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
  handleChange: undefined,
  handleToggleCalendar: undefined,
  onKeyDown: undefined,
  onBlur: undefined,
  target: undefined,
  showCalendar: undefined,
};

export default DateInput;
