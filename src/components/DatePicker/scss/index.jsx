import { useState, useEffect, useRef } from 'react';
import { Overlay } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { enUS as defaultLocale } from 'date-fns/locale';
import { addYears, format, parse, isValid } from 'date-fns';
import DateInput from './components/DateInput';
import Calendar from './components/Calendar';

const DatePicker = (props) => {
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
    dateDisplayFormat,
    disabledDates,
    disabledDay,
    calendarClassName,
    locale,
    weekdayDisplayFormat,
    dayDisplayFormat,
    minDate,
    maxDate,
    weekStartsOn,
    dataTestId,
  } = props;

  const dateOptions = {
    locale,
    ...(weekStartsOn && { weekStartsOn }),
  };

  const datePickerClassNames = classNames('onex-date-picker-wrapper', {
    [className]: className,
  });

  const formatDate = (newValue, _dateDisplayFormat, _dateOptions) => {
    const val = Date.parse(newValue);
    if (val && isValid(val)) {
      return format(val, _dateDisplayFormat, _dateOptions);
    }
    return '';
  };

  const formatCalendarDate = (newValue) => {
    const val = Date.parse(newValue);
    if (val && isValid(val)) {
      return val;
    }
    return null;
  };

  const target = useRef(null);
  const [showCalendar, setShowCalendar] = useState(null);
  const [_value, _setValue] = useState(formatDate(value, dateDisplayFormat, dateOptions));
  const [date, setDate] = useState(formatCalendarDate(value));
  const [isError, setIsError] = useState(isInvalid);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    _setValue(formatDate(value, dateDisplayFormat, dateOptions));
  }, [value]);

  const update = (newValue) => {
    if (isError || !isChanged || !newValue) {
      if (isError) {
        onChange({
          isValid: false,
          value: newValue,
        });
      }
      return;
    }
    const parsed = parse(newValue, dateDisplayFormat, new Date(), dateOptions);
    if (isValid(parsed)) {
      setIsChanged(false);
      onChange({
        isValid: true,
        value: parsed,
      });
      setDate(parsed);
    } else {
      onChange({
        isValid: false,
        value: parsed,
      });
      setIsError(true);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      update(_value);
    }
  };

  const handleChange = (e) => {
    _setValue(e.target.value);
    setIsError(false);
    setIsChanged(true);
  };

  const onBlur = () => {
    update(_value);
  };

  const handleToggleCalendar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowCalendar(!showCalendar);
  };

  const pickerOnChange = (pickedDate) => {
    onChange({
      isValid: true,
      value: pickedDate,
    });
  };

  return (
    <div className={datePickerClassNames} data-test-id={dataTestId}>
      <DateInput
        autoFocus={autoFocus}
        label={label}
        placeholder={placeholder || dateDisplayFormat}
        errorMessage={errorMessage}
        size={size === 'md' ? 'lg' : size}
        disabled={disabled}
        isInvalid={isError}
        readOnly={readOnly}
        required={required}
        helpText={helpText}
        value={_value}
        target={target}
        showCalendar={showCalendar}
        handleToggleCalendar={handleToggleCalendar}
        handleChange={handleChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
      <Overlay
        rootClose
        onHide={() => setShowCalendar(false)}
        container={target.current}
        target={target.current}
        show={showCalendar}
        offset={[0, 4]}
        placement="bottom-start"
      >
        {({ placement, arrowProps, show: _show, popper, ...overlayProps }) => (
          <Calendar
            date={date}
            setDate={pickerOnChange}
            overlayProps={overlayProps}
            disabledDates={disabledDates}
            disabledDay={disabledDay}
            className={calendarClassName}
            locale={locale}
            dateDisplayFormat={dateDisplayFormat}
            weekdayDisplayFormat={weekdayDisplayFormat}
            dayDisplayFormat={dayDisplayFormat}
            dateOptions={dateOptions}
            minDate={minDate}
            maxDate={maxDate}
            weekStartsOn={weekStartsOn}
            setValue={_setValue}
            formatDate={formatDate}
            setShowCalendar={setShowCalendar}
            setIsError={setIsError}
          />
        )}
      </Overlay>
    </div>
  );
};

/* eslint-disable */
DatePicker.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  disabledDates: PropTypes.array,
  disabledDay: PropTypes.func,
  calendarClassName: PropTypes.string,
  locale: PropTypes.object,
  dateDisplayFormat: PropTypes.string,
  weekdayDisplayFormat: PropTypes.string,
  dayDisplayFormat: PropTypes.string,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  weekStartsOn: PropTypes.number,
  dataTestId: PropTypes.string,
};
/* eslint-enable */

DatePicker.defaultProps = {
  autoFocus: false,
  className: undefined,
  label: undefined,
  errorMessage: undefined,
  value: '',
  placeholder: '',
  size: 'sm',
  readOnly: false,
  disabled: false,
  isInvalid: false,
  required: false,
  helpText: undefined,
  onChange: () => {},
  disabledDates: [],
  disabledDay: () => {},
  calendarClassName: undefined,
  locale: defaultLocale,
  dateDisplayFormat: 'yyyy/MM/dd',
  weekdayDisplayFormat: 'E',
  dayDisplayFormat: 'd',
  maxDate: addYears(new Date(), 20),
  minDate: addYears(new Date(), -100),
  weekStartsOn: undefined,
  dataTestId: undefined,
};

export default DatePicker;
