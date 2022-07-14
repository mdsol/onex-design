import { useEffect, useRef, useMemo, useState, memo } from 'react';
import classNames from 'classnames';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';
import { Overlay as ReactOverlay, Button as ReactButton } from 'react-bootstrap';
import Icon from '../../Icon/scss';
import Check from '../../Check/scss';
import Button from '../../Buttons/scss';

const Option = ({ selectedOptions, showCheckInOption, ...props }) => {
  const checkedValue = selectedOptions?.some((elem) => elem.value === props.value);

  return (
    <components.Option {...props}>
      {showCheckInOption ? (
        <Check
          tabIndex={-1}
          id={props.children}
          checked={checkedValue}
          onChange={() => {}}
          className="multi-filter-select-check"
        >
          {props.children}
        </Check>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{props.children}</>
      )}
    </components.Option>
  );
};

const ValueContainer = ({ children, ...props }) => (
  <>
    <div className="onex-filter-select__search-icon">
      <Icon>search</Icon>
    </div>
    <components.ValueContainer {...props}>{children}</components.ValueContainer>
  </>
);

const FilterSelect = ({
  className,
  disabled,
  label,
  selectedValues,
  options,
  groupedOptions,
  size,
  onSelect,
  isMulti,
  dataTestId,
  isAsync,
  onLoadOptions,
  getOptionValue,
  getOptionLabel,
  ...props
}) => {
  const applyButtonRef = useRef(null);
  const target = useRef(null);
  const locSelectedValues = useMemo(
    () => (Array.isArray(selectedValues) ? selectedValues : [selectedValues]),
    [selectedValues],
  );

  const [selectedOptions, setSelectedOptions] = useState(locSelectedValues);
  const [filteredOptions, setFilteredOptions] = useState(locSelectedValues);
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState(locSelectedValues.length ? locSelectedValues[0] : null);
  const [applyButtonIsFocused, setApplyButtonIsFocused] = useState(false);

  useEffect(() => {
    setSelectedOptions(locSelectedValues);
    setFilteredOptions(locSelectedValues);
  }, [locSelectedValues]);

  useEffect(() => {
    setValue(
      filteredOptions.length > 1
        ? { label: filteredOptions.length, value: filteredOptions.length }
        : filteredOptions.length && filteredOptions[0],
    );
  }, [filteredOptions]);

  const selectClassNames = classNames('onex-filter-select', `onex-filter-select--${size}`, {
    [className]: className,
  });

  const handleHide = () => {
    setSelectedOptions(filteredOptions);
    setFilteredOptions(filteredOptions);
    setShowMenu(false);
    setApplyButtonIsFocused(false);
  };

  const handleChange = (option) => {
    if (!isMulti) {
      setSelectedOptions([option]);
      setFilteredOptions([option]);
      setShowMenu(false);
      onSelect?.([option]);
    }
    setSelectedOptions([...option]);
  };

  const handleClearFilter = (e) => {
    e.stopPropagation();
    setSelectedOptions([]);
    setFilteredOptions([]);
  };

  const handleApplyFilter = () => {
    setFilteredOptions(selectedOptions);
    setShowMenu(false);
    return onSelect?.(selectedOptions);
  };

  const handleDropdownKeyboard = (e) => {
    if (e.code === 'ArrowDown') {
      setShowMenu(true);
    }
    if (e.code === 'Backspace') {
      handleClearFilter(e);
    }
  };

  const handleMenuKeyboard = (e) => {
    if (e.code === 'Tab') {
      if (!isMulti && showMenu) {
        setShowMenu(false);
      }
      if (isMulti && showMenu && !applyButtonIsFocused) {
        e.preventDefault();
        e.stopPropagation();
        setApplyButtonIsFocused(true);
        applyButtonRef.current.focus();
      }
      if (isMulti && showMenu && applyButtonIsFocused) {
        handleHide();
      }
    }
  };

  return (
    <div className={selectClassNames} data-test-id={dataTestId} onKeyDown={handleMenuKeyboard}>
      <ReactButton
        className={classNames('onex-filter-select__dropdown-button', {
          'onex-filter-select__dropdown-button__menu-open': showMenu,
          'onex-filter-select__dropdown-button__value-selected': value,
        })}
        variant="secondary"
        disabled={disabled}
        ref={target}
        onClick={() => setShowMenu(!showMenu)}
        onKeyDown={handleDropdownKeyboard}
      >
        <div className="dropdown-button-content">
          {value ? (
            <>
              {label}: <span className="dropdown-button-content__value"> {value?.label} </span>
              {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */}
              <div
                role="button"
                className="dropdown-button-content__remove-value"
                onClick={handleClearFilter}
              >
                <Icon className="dropdown-button-content__remove-value-icon">cancel</Icon>
              </div>
            </>
          ) : (
            label
          )}
          <Icon className="dropdown-button-content__icon">expand_more</Icon>
        </div>
      </ReactButton>
      <ReactOverlay
        rootClose
        onHide={handleHide}
        container={target.current}
        target={target.current}
        show={showMenu}
        offset={[0, 4]}
        placement="bottom-start"
      >
        {({ placement, arrowProps, show: _show, popper, ...overlayProps }) => (
          <div className="onex-filter-select-menu-wrapper" {...overlayProps}>
            {isAsync ? (
              <AsyncSelect
                cacheOptions
                autoFocus
                classNamePrefix="onex-filter-select"
                value={selectedOptions}
                options={groupedOptions.length ? groupedOptions : options}
                components={{
                  DropdownIndicator: null,
                  IndicatorSeparator: null,
                  ValueContainer,
                  // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
                  Option: memo(({ children, ...args }) => (
                    <Option {...args} showCheckInOption={isMulti} selectedOptions={selectedOptions}>
                      {children}
                    </Option>
                  )),
                }}
                onChange={handleChange}
                backspaceRemovesValue={false}
                controlShouldRenderValue={false}
                hideSelectedOptions={false}
                placeholder="Search"
                isClearable={false}
                menuIsOpen
                isMulti={isMulti}
                tabSelectsValue={false}
                loadOptions={onLoadOptions}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                {...props}
              />
            ) : (
              <ReactSelect
                autoFocus
                classNamePrefix="onex-filter-select"
                value={selectedOptions}
                options={groupedOptions.length ? groupedOptions : options}
                components={{
                  DropdownIndicator: null,
                  IndicatorSeparator: null,
                  ValueContainer,
                  // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
                  Option: memo(({ children, ...args }) => (
                    <Option {...args} showCheckInOption={isMulti} selectedOptions={selectedOptions}>
                      {children}
                    </Option>
                  )),
                }}
                onChange={handleChange}
                backspaceRemovesValue={false}
                controlShouldRenderValue={false}
                hideSelectedOptions={false}
                placeholder="Search"
                isClearable={false}
                menuIsOpen
                isMulti={isMulti}
                tabSelectsValue={false}
                {...props}
              />
            )}
            {isMulti && (
              <div className="onex-filter-select__menu-action">
                <Button
                  ref={applyButtonRef}
                  variant="primary"
                  size="sm"
                  onClick={handleApplyFilter}
                >
                  Apply
                </Button>
              </div>
            )}
          </div>
        )}
      </ReactOverlay>
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

/* eslint-disable */
ValueContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  props: PropTypes.object,
};
/* eslint-enable */

ValueContainer.defaultProps = {
  children: undefined,
  props: undefined,
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

FilterSelect.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  selectedValues: PropTypes.arrayOf(optionType),
  options: PropTypes.arrayOf(optionType),
  groupedOptions: PropTypes.arrayOf(groupedOptions),
  size: PropTypes.oneOf(['md', 'sm']),
  onSelect: PropTypes.func,
  isMulti: PropTypes.bool,
  dataTestId: PropTypes.string,
  isAsync: PropTypes.bool,
  onLoadOptions: PropTypes.func,
  getOptionValue: PropTypes.func,
  getOptionLabel: PropTypes.func,
};

FilterSelect.defaultProps = {
  className: undefined,
  disabled: false,
  label: undefined,
  selectedValues: [],
  options: [],
  groupedOptions: [],
  size: 'sm',
  onSelect: undefined,
  isMulti: false,
  dataTestId: '',
  isAsync: false,
  onLoadOptions: undefined,
  getOptionValue: undefined,
  getOptionLabel: undefined,
};

export default FilterSelect;
