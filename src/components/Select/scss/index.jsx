import { useEffect, useState, memo, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import Check from '../../Check/scss';
import Icon from '../../Icon/scss';
import Tooltip from '../../DataGrid/scss/components/DataGridTable/components/DataGridTooltip/index';

// eslint-disable-next-line react/prop-types
const ClearIndicator = ({ innerProps: { ref, ...restInnerProps } }) => (
  <div className="onex-select__clear-btn" {...restInnerProps} ref={ref}>
    <Icon>highlight_off</Icon>
  </div>
);

const MultiValueRemove = (props) => (
  <components.MultiValueRemove {...props}>
    <Icon>close</Icon>
  </components.MultiValueRemove>
);

const BadgeValue = ({ children, tooltip, ...props }) => (
  <components.SingleValue {...props} className={classNames('onex-select__value--badge')}>
    <div>{children}</div>
    {!!tooltip && <Tooltip type={tooltip.type} message={tooltip.text} />}
  </components.SingleValue>
);

const Option = ({ selectedOptions, showCheckInOption, ...props }) => {
  const checkedValue = selectedOptions?.some((elem) => elem.value === props.value);
  const hasSubLabel = !!props.data.subLabel;

  return (
    <components.Option
      {...props}
      className={classNames({
        'onex-select__option--text': !showCheckInOption,
        'onex-select__option--subLabel': hasSubLabel,
      })}
    >
      {showCheckInOption ? (
        <Check id={props.children} checked={checkedValue} className="multiselect-check">
          {props.children}
          {props.data.subLabel ? <div className="sub-label-text">{props.data.subLabel}</div> : null}
        </Check>
      ) : (
        <>
          {props.children}
          {props.data.subLabel ? <div className="sub-label-text">{props.data.subLabel}</div> : null}
        </>
      )}
    </components.Option>
  );
};

const BadgeOption = ({ ...props }) => (
  <components.Option {...props} className={classNames('onex-select__option--badge')}>
    <div>{props.children}</div>
  </components.Option>
);

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
  hideSelectedOptions,
  isSearchable,
  closeMenuOnSelect,
  isBadged,
  tooltip,
  ...props
}) => {
  const locSelectedValues = useMemo(
    () => (Array.isArray(selectedValues) ? selectedValues : [selectedValues]),
    [selectedValues],
  );

  const [selectedOptions, setSelectedOptions] = useState(locSelectedValues);

  useEffect(() => {
    setSelectedOptions(locSelectedValues);
  }, [locSelectedValues]);

  const selectClassNames = classNames('onex-select', {
    [className]: className,
    'onex-select--md': isMulti || size === 'md',
    'onex-select--sm': !isMulti && size === 'sm',
    'onex-select--invalid': isInvalid,
    'is-disabled': isDisabled,
    'is-badged': isBadged,
  });

  const handleChange = (option) => {
    if (!isMulti) {
      setSelectedOptions([option]);
      onSelect?.([option]);
    }

    setSelectedOptions([...option]);
    return onSelect?.([...option]);
  };

  if (isBadged) {
    return (
      <div className={selectClassNames}>
        <ReactSelect
          classNamePrefix="onex-select"
          options={groupedOptions.length ? groupedOptions : options}
          isDisabled={isDisabled}
          components={{
            // eslint-disable-next-line react/prop-types
            Option: memo(({ children, ...args }) => (
              <BadgeOption {...args}>{children}</BadgeOption>
            )),
            SingleValue: ({ children, ...args }) => (
              <BadgeValue {...args} tooltip={tooltip}>
                {children}
              </BadgeValue>
            ),
          }}
          onChange={handleChange}
          aria-invalid
          value={selectedOptions}
          data-test-id={dataTestId}
          hideSelectedOptions={hideSelectedOptions}
          closeMenuOnSelect
          tabSelectsValue={false}
          isSearchable={false}
          {...props}
        />
        {isInvalid && (
          <Form.Text className="onex-select__help-text onex-select__help--error">
            {errorMessage}
          </Form.Text>
        )}
      </div>
    );
  }

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
            ClearIndicator: isMulti && ClearIndicator,
          }}
          isMulti={isMulti}
          loadOptions={onLoadOptions}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          hideSelectedOptions={hideSelectedOptions}
          isSearchable={isSearchable}
          closeMenuOnSelect={closeMenuOnSelect}
          tabSelectsValue={false}
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
            ClearIndicator: isMulti && ClearIndicator,
          }}
          onChange={handleChange}
          aria-invalid
          value={selectedOptions}
          data-test-id={dataTestId}
          hideSelectedOptions={hideSelectedOptions}
          isSearchable={isSearchable}
          closeMenuOnSelect={closeMenuOnSelect}
          tabSelectsValue={false}
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
  subLabel: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});

const groupedOptions = PropTypes.shape({
  label: PropTypes.string,
  options: PropTypes.arrayOf(optionType),
});

BadgeValue.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tooltip: PropTypes.shape({
    type: PropTypes.oneOf(['info', 'error']),
    text: PropTypes.string,
  }),
};

BadgeValue.defaultProps = {
  children: undefined,
  tooltip: undefined,
};

Option.propTypes = {
  selectedOptions: PropTypes.arrayOf(optionType),
  showCheckInOption: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  data: PropTypes.objectOf(optionType),
};

Option.defaultProps = {
  selectedOptions: [],
  showCheckInOption: false,
  value: [],
  children: undefined,
  data: undefined,
};

BadgeOption.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  data: PropTypes.objectOf(optionType),
};

BadgeOption.defaultProps = {
  value: '',
  children: undefined,
  data: undefined,
};

Select.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  selectedValues: PropTypes.arrayOf(optionType),
  options: PropTypes.arrayOf(optionType),
  groupedOptions: PropTypes.arrayOf(groupedOptions),
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
  hideSelectedOptions: PropTypes.bool,
  isSearchable: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  isBadged: PropTypes.bool,
  tooltip: PropTypes.shape({
    type: PropTypes.oneOf(['info', 'error']),
    text: PropTypes.string,
  }),
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
  dataTestId: '',
  isAsync: false,
  onLoadOptions: undefined,
  getOptionValue: undefined,
  getOptionLabel: undefined,
  hideSelectedOptions: false,
  isSearchable: true,
  closeMenuOnSelect: false,
  isBadged: false,
  tooltip: undefined,
};

export default Select;
