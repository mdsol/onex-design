import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

const CustomSelect = ({
  className,
  isMulti,
  isDisabled,
  size,
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
  const [selectedOptions, seSelectedOptions] = useState(selectedValues);
  useEffect(() => {
    onSelect?.(selectedValues);
  }, [selectedValues, onSelect]);

  const selectClassNames = classNames('onex-select', {
    [className]: className,
    'onex-select--lg': size === 'lg',
    'onex-select--sm': size === 'sm',
    'onex-select--invalid': isInvalid,
  });

  const handleChange = (option) => {
    if (!isMulti) {
      seSelectedOptions([option]);
      return onSelect?.([option]);
    }
    seSelectedOptions([...option]);
    return onSelect?.([...option]);
  };

  return (
    <div className={selectClassNames}>
      {isAsync ? (
        <AsyncSelect
          cacheOptions
          defaultOptions
          classNamePrefix="onex-select"
          name="search"
          isMulti={isMulti}
          loadOptions={onLoadOptions}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
        />
      ) : (
        <Select
          classNamePrefix="onex-select"
          isMulti={isMulti}
          options={options}
          isDisabled={isDisabled}
          onChange={handleChange}
          aria-invalid
          value={selectedOptions}
          data-test-id={dataTestId}
        />
      )}
      {isInvalid && !isDisabled && (
        <Form.Text className="onex-text-field__error">{errorMessage}</Form.Text>
      )}
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
