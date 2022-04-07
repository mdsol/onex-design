import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Select, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Check from '../../Check/scss';

const Control = ({ children, ...props }) => (
  <components.Control {...props}>
    {props.icon && <span className="onex-select__icon">{props.icon}</span>} {children}
  </components.Control>
);

Control.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  icon: PropTypes.node,
};

Control.defaultProps = {
  children: undefined,
  icon: undefined,
};

const MultiValueRemove = (props) => (
  <components.MultiValueRemove {...props}>
    <CloseRoundedIcon />
  </components.MultiValueRemove>
);

// eslint-disable-next-line react/prop-types
const MenuList = (props) => <components.MenuList {...props}>{props.children}</components.MenuList>;
const Option = ({ selectedOptions, ...props }) => {
  const checkedValue = selectedOptions.some((elem) => elem.value === props.value);

  return (
    <components.Option {...props}>
      <Check id={props.children} checked={checkedValue} className="multiselect-check">
        {props.children}
      </Check>
    </components.Option>
  );
};

const CustomSelect = ({
  className,
  isMulti,
  isDisabled,
  size,
  label,
  icon,
  helpText,
  isInvalid,
  errorMessage,
  selectedValues,
  onSelect,
  options,
  dataTestId,
  isAsync,
  onLoadOptions,
  getOptionValue,
  getOptionLabel,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(selectedValues);

  useEffect(() => {
    onSelect?.(selectedValues);
  }, [selectedValues, onSelect]);

  const selectClassNames = classNames('onex-select', {
    [className]: className,
    'onex-select--lg': size === 'lg',
    'onex-select--sm': size === 'sm',
    'onex-select--invalid': isInvalid,
    'is-disabled': isDisabled,
  });

  const handleChange = (option) => {
    if (!isMulti) {
      setSelectedOptions([option]);
      onSelect?.([option]);
    }

    setSelectedOptions([...selectedOptions, ...option]);
    return onSelect?.([...selectedOptions, ...option]);
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
            // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
            Control: ({ children, ...args }) => (
              <Control {...args} icon={icon}>
                {children}
              </Control>
            ),
            MultiValueRemove,
            // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
            MenuList,
            // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
            Option: ({ children, ...args }) => (
              <Option {...args} selectedOptions={selectedOptions}>
                {children}
              </Option>
            ),
          }}
          isMulti={isMulti}
          loadOptions={onLoadOptions}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
        />
      ) : (
        <Select
          classNamePrefix="onex-select"
          isMulti={isMulti}
          options={options}
          isDisabled={isDisabled}
          icon={icon}
          components={{
            // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
            Control: ({ children, ...args }) => (
              <Control {...args} icon={icon}>
                {children}
              </Control>
            ),
            // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
            MenuList,
            MultiValueRemove,
            // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
            Option: ({ children, ...args }) => (
              <Option {...args} selectedOptions={selectedOptions}>
                {children}
              </Option>
            ),
          }}
          onChange={handleChange}
          aria-invalid
          value={selectedOptions}
          data-test-id={dataTestId}
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
        />
      )}
      {isInvalid && <Form.Text className="onex-select__help-text">{errorMessage}</Form.Text>}
      {helpText && <Form.Text className="onex-select__help-text">{helpText}</Form.Text>}
    </div>
  );
};

const optionType = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});

CustomSelect.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  selectedValues: PropTypes.arrayOf(optionType),
  options: PropTypes.arrayOf(optionType),
  size: PropTypes.oneOf(['lg', 'sm']),
  label: PropTypes.string,
  icon: PropTypes.node,
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

CustomSelect.defaultProps = {
  className: undefined,
  errorMessage: undefined,
  selectedValues: [],
  size: 'sm',
  label: undefined,
  helpText: undefined,
  icon: undefined,
  isMulti: false,
  isDisabled: false,
  isInvalid: false,
  options: [],
  onSelect: undefined,
  dataTestId: '',
  isAsync: false,
  onLoadOptions: undefined,
  getOptionValue: undefined,
  getOptionLabel: undefined,
};

export default CustomSelect;
