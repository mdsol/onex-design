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
    if (newValue && isValid(newValue)) {
      return format(newValue, _dateDisplayFormat, _dateOptions);
    }
    return '';
  };

  const target = useRef(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(null);
  const [_value, _setValue] = useState(formatDate(value, dateDisplayFormat, dateOptions));
  const [isError, setIsError] = useState(isInvalid);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    _setValue(formatDate(value, dateDisplayFormat, dateOptions));
  }, [value]);

  const update = (newValue) => {
    if (isError || !isChanged || !newValue) {
      return;
    }
    const parsed = parse(newValue, dateDisplayFormat, new Date(), dateOptions);
    if (isValid(parsed)) {
      setIsChanged(false);
      onChange?.(parsed);
      setDate(parsed);
    } else {
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
    console.log();
    update(_value);
  };

  const handleToggleCalendar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowCalendar(!showCalendar);
  };

  return (
    <div className={datePickerClassNames} data-test-id={dataTestId}>
      <DateInput
        autoFocus={autoFocus}
        label={label}
        placeholder={placeholder}
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
        placement="bottom-start"
      >
        {({ placement, arrowProps, show: _show, popper, ...overlayProps }) => (
          <Calendar
            date={date}
            setDate={setDate}
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
  onChange: undefined,
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
