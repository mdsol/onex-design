import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import DataGridTooltip from '../DataGridTooltip';
import DatePicker from '../../../../../../DatePicker/scss';
import Icon from '../../../../../../Icon/scss';

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

  const dateInputClassNames = classNames('onex-data-grid-date-cell-date', {
    'onex-data-grid-date-cell--disabled': disabled,
    'onex-data-grid-date-cell--focused': showCalendar,
  });

  return (
    <Form.Group ref={target} {...accProps} className={dateInputClassNames}>
      <div className="onex-data-grid-date-cell__input">
        <Form.Control
          ref={ref}
          autoFocus={autoFocus}
          placeholder={placeholder}
          disabled={disabled}
          isInvalid={isInvalid}
          readOnly={readOnly}
          required={required}
          value={value}
          onKeyDown={onKeyDown}
          onChange={handleChange}
          onBlur={onBlur}
          {...accProps}
        />
        {((isInvalid && errorMessage) || helpText) && (
          <div className="onex-data-grid-date-cell__tooltip">
            <DataGridTooltip
              type={isInvalid ? 'error' : 'info'}
              message={isInvalid ? errorMessage : helpText}
            />
          </div>
        )}
        <button
          className={classNames('onex-data-grid-date-cell__toggle-icon', {
            'onex-data-grid-date-cell__toggle-icon--open': showCalendar,
          })}
          type="button"
          onClick={handleToggleCalendar}
          disabled={disabled}
        >
          <Icon>{showCalendar ? 'expand_less' : 'expand_more'}</Icon>
        </button>
      </div>
    </Form.Group>
  );
});

const DataGridDateCell = ({ cell, row, updateData }) => {
  const cellProps = typeof cell.value === 'object' ? cell.value : { value: cell.value };

  const [value, setValue] = useState('');

  const dataGridEditableCellClassNames = classNames(
    'onex-data-grid-date-cell',
    `onex-data-grid-date-cell__text-align-${cell?.column.textAlign || 'left'}`,
    `onex-data-grid-date-cell__text-variant-${cell?.column.textVariant || 'regular'}`,
    {
      'onex-data-grid__cell-divider': cell?.column.hasDivider,
      'onex-data-grid-date-cell--error': cell?.column.isInvalid,
    },
  );

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateData(row.index, cell?.column.id, value);
  };

  useEffect(() => {
    setValue(cellProps.value);
  }, [cellProps.value]);

  return (
    <td className={dataGridEditableCellClassNames} {...cell.getCellProps()}>
      <DatePicker
        className="onex-data-grid-date-cell"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        CustomInputComponent={DateInput}
        helpText="Test help text"
        isInvalid
        errorMessage="some error message"
      />
    </td>
  );
};

/* eslint-disable */
DataGridDateCell.propTypes = {
  cell: PropTypes.shape({
    getCellProps: PropTypes.func,
    render: PropTypes.func,
    column: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  row: PropTypes.object,
  updateData: PropTypes.func,
};
/* eslint-enable */

DataGridDateCell.defaultProps = {
  cell: undefined,
  updateData: undefined,
};

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

export default DataGridDateCell;
