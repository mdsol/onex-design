import React from 'react';
import { Calendar as ReactCalendar } from 'react-date-range';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../../../Buttons/scss';

const Calendar = React.forwardRef((props, ref) => {
  const {
    className,
    date,
    setDate,
    overlayProps,
    disabledDates,
    disabledDay,
    locale,
    dateDisplayFormat,
    weekdayDisplayFormat,
    dayDisplayFormat,
    dateOptions,
    minDate,
    maxDate,
    weekStartsOn,
    setValue,
    formatDate,
  } = props;

  const calendarClassNames = classNames('onex-date-picker-calendar', {
    [className]: className,
  });

  const handleToday = () => {
    setDate(new Date());
    setValue(formatDate(new Date(), dateDisplayFormat, dateOptions));
  };

  const onChange = (item) => {
    setDate(item);
    setValue(formatDate(item, dateDisplayFormat, dateOptions));
  };

  return (
    <div ref={ref} {...overlayProps} className={calendarClassNames}>
      <ReactCalendar
        showMonthArrow
        showMonthAndYearPickers
        disabledDates={disabledDates}
        disabledDay={disabledDay}
        locale={locale}
        weekdayDisplayFormat={weekdayDisplayFormat}
        dayDisplayFormat={dayDisplayFormat}
        month={1}
        date={date}
        minDate={minDate}
        maxDate={maxDate}
        weekStartsOn={weekStartsOn}
        onChange={onChange}
        color="rgba(0, 112, 192, 1)"
      />
      <hr className="onex-date-picker-calendar__divider" />
      <Button
        className="onex-date-picker-calendar__today-btn"
        variant="tertiary"
        onClick={handleToday}
      >
        Today
      </Button>
    </div>
  );
});

/* eslint-disable */
Calendar.propTypes = {
  className: PropTypes.string,
  setDate: PropTypes.func,
  date: PropTypes.object,
  overlayProps: PropTypes.object,
  disabledDates: PropTypes.array,
  disabledDay: PropTypes.func,
  locale: PropTypes.object,
  dateDisplayFormat: PropTypes.string,
  weekdayDisplayFormat: PropTypes.string,
  dayDisplayFormat: PropTypes.string,
  dateOptions: PropTypes.object,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  weekStartsOn: PropTypes.number,
  setValue: PropTypes.func,
  formatDate: PropTypes.func,
};
/* eslint-enable */

Calendar.defaultProps = {
  className: undefined,
  date: undefined,
  setDate: undefined,
  overlayProps: undefined,
  disabledDates: [],
  disabledDay: () => {},
  locale: undefined,
  dateDisplayFormat: '',
  weekdayDisplayFormat: '',
  dayDisplayFormat: '',
  dateOptions: undefined,
  minDate: undefined,
  maxDate: undefined,
  weekStartsOn: undefined,
  setValue: undefined,
  formatDate: undefined,
};

export default Calendar;
