import { useEffect, useState, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import Check from '../../Check/scss';

// eslint-disable-next-line react/prop-types
const ClearIndicator = ({ innerProps: { ref, ...restInnerProps } }) => (
  <div className="onex-select__clear-btn" {...restInnerProps} ref={ref}>
    <HighlightOffRoundedIcon />
  </div>
);

const MultiValueRemove = (props) => (
  <components.MultiValueRemove {...props}>
    <CloseRoundedIcon />
  </components.MultiValueRemove>
);

const Option = ({ selectedOptions, showCheckInOption, ...props }) => {
  const checkedValue = selectedOptions.some((elem) => elem.value === props.value);

  return (
    <components.Option
      {...props}
      className={classNames({ 'onex-select__option--text': !showCheckInOption })}
    >
      {showCheckInOption ? (
        <Check id={props.children} checked={checkedValue} className="multiselect-check">
          {props.children}
        </Check>
      ) : (
        props.children
      )}
    </components.Option>
  );
};

/*
 * Select component
 */

const Select = ({
  className,
  isMulti,
  isDisabled,
  size,
  label,
  helpText,
  isInvalid,
  errorMessage,
  selectedValues,
  onSelect,
  options,
  groupedOptions,
  dataTestId,
  isAsync,
  onLoadOptions,
  getOptionValue,
  getOptionLabel,
  hasClearButton,
  ...props
}) => {
  const [selectedOptions, setSelectedOptions] = useState(selectedValues);

  useEffect(() => {
    onSelect?.(selectedValues);
  }, [selectedValues, onSelect]);

  const selectClassNames = classNames('onex-select', {
    [className]: className,
    'onex-select--md': size === 'md',
    'onex-select--sm': size === 'sm',
    'onex-select--invalid': isInvalid,
    'is-disabled': isDisabled,
  });

  const handleChange = (option) => {
    if (!isMulti) {
      setSelectedOptions([option]);
      onSelect?.([option]);
    }

    setSelectedOptions([...option]);
    return onSelect?.([...option]);
  };

  return (
    <div className={selectClassNames}>
      {label && <Form.Label className="onex-select__label">{label}</Form.Label>}
      {isAsync ? (
        <AsyncSelect
          cacheOptions
          defaultOptions
          classNamePrefix="onex-select"
          name="search"
          components={{
            MultiValueRemove,
            // eslint-disable-next-line react/prop-types
            Option: memo(({ children, ...args }) => (
              <Option {...args} showCheckInOption={isMulti} selectedOptions={selectedOptions}>
                {children}
              </Option>
            )),
            ClearIndicator: hasClearButton && ClearIndicator,
          }}
          isMulti={isMulti}
          loadOptions={onLoadOptions}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
          {...props}
        />
      ) : (
        <ReactSelect
          classNamePrefix="onex-select"
          isMulti={isMulti}
          options={groupedOptions.length ? groupedOptions : options}
          isDisabled={isDisabled}
          components={{
            MultiValueRemove,
            // eslint-disable-next-line react/prop-types
            Option: memo(({ children, ...args }) => (
              <Option {...args} showCheckInOption={isMulti} selectedOptions={selectedOptions}>
                {children}
              </Option>
            )),
            ClearIndicator: hasClearButton && ClearIndicator,
          }}
          onChange={handleChange}
          aria-invalid
          value={selectedOptions}
          data-test-id={dataTestId}
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
          {...props}
        />
      )}
      {isInvalid && (
        <Form.Text className="onex-select__help-text onex-select__help--error">
          {errorMessage}
        </Form.Text>
      )}
      {helpText && !isInvalid && (
        <Form.Text className="onex-select__help-text">{helpText}</Form.Text>
      )}
    </div>
  );
};

const optionType = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});

const groupedOptions = PropTypes.shape({
  label: PropTypes.string,
  options: PropTypes.arrayOf(optionType),
});

Option.propTypes = {
  selectedOptions: PropTypes.arrayOf(optionType),
  showCheckInOption: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Option.defaultProps = {
  selectedOptions: [],
  showCheckInOption: false,
  value: [],
  children: undefined,
};

Select.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  selectedValues: PropTypes.arrayOf(optionType),
  options: PropTypes.arrayOf(optionType),
  groupedOptions: PropTypes.arrayOf(groupedOptions),
  hasClearButton: PropTypes.bool,
  size: PropTypes.oneOf(['md', 'sm']),
  label: PropTypes.string,
  helpText: PropTypes.string,
  isMulti: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  onSelect: PropTypes.func,
  dataTestId: PropTypes.string,
  isAsync: PropTypes.bool,
  onLoadOptions: PropTypes.func,
  getOptionValue: PropTypes.func,
  getOptionLabel: PropTypes.func,
};

Select.defaultProps = {
  className: undefined,
  errorMessage: undefined,
  selectedValues: [],
  size: 'sm',
  label: undefined,
  helpText: undefined,
  isMulti: false,
  isDisabled: false,
  isInvalid: false,
  options: [],
  groupedOptions: [],
  onSelect: undefined,
  hasClearButton: false,
  dataTestId: '',
  isAsync: false,
  onLoadOptions: undefined,
  getOptionValue: undefined,
  getOptionLabel: undefined,
};

export default Select;
