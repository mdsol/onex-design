import { useEffect, useRef, useMemo, useState, memo } from 'react';
import classNames from 'classnames';
import ReactSelect, { components } from 'react-select';
import PropTypes from 'prop-types';
import { Overlay as ReactOverlay, Button as ReactButton } from 'react-bootstrap';
import Icon from '../../Icon/scss';
import Check from '../../Check/scss';
import Button from '../../Buttons/scss';

const Menu = ({ handleApplyFilter, children, ...props }) => (
  <components.Menu {...props}>
    {children}
    <div className="onex-filter-select__menu-action">
      <Button variant="primary" size="sm" onClick={handleApplyFilter}>
        Apply
      </Button>
    </div>
  </components.Menu>
);

const Option = ({ selectedOptions, showCheckInOption, ...props }) => {
  const checkedValue = selectedOptions?.some((elem) => elem.value === props.value);

  return (
    <components.Option {...props}>
      {showCheckInOption ? (
        <Check
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
  ...props
}) => {
  const target = useRef(null);
  const locSelectedValues = useMemo(
    () => (Array.isArray(selectedValues) ? selectedValues : [selectedValues]),
    [selectedValues],
  );

  const [selectedOptions, setSelectedOptions] = useState(locSelectedValues);
  const [filteredOptions, setFilteredOptions] = useState(locSelectedValues);
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState(locSelectedValues.length ? locSelectedValues[0] : null);

  useEffect(() => {
    setSelectedOptions(locSelectedValues);
    setFilteredOptions(locSelectedValues);
  }, [locSelectedValues]);

  useEffect(() => {
    setValue(filteredOptions.length ? filteredOptions[0] : null);
  }, [filteredOptions]);

  const selectClassNames = classNames('onex-filter-select', `onex-filter-select--${size}`, {
    [className]: className,
  });

  const handleChange = (option) => {
    if (!isMulti) {
      setSelectedOptions([option]);
      onSelect?.([option]);
    }

    setSelectedOptions([...option]);
  };

  const handleRemoveValue = (e) => {
    e.stopPropagation();
    const data = selectedOptions.slice(1);
    setSelectedOptions(data);
    setFilteredOptions(data);
  };

  const handleApplyFilter = () => {
    console.log('Apply filter');
    setFilteredOptions(selectedOptions);
    setShowMenu(false);
    return onSelect?.(selectedOptions);
  };

  return (
    <div className={selectClassNames} data-test-id={dataTestId}>
      <ReactButton
        className={classNames('onex-filter-select__dropdown-button', {
          'onex-filter-select__dropdown-button__menu-open': showMenu,
          'onex-filter-select__dropdown-button__value-selected': value,
        })}
        variant="secondary"
        disabled={disabled}
        ref={target}
        onClick={() => setShowMenu(!showMenu)}
        onKeyDown={() => setShowMenu(!showMenu)}
      >
        <div className="dropdown-button-content">
          {value ? (
            <>
              {label}: <span className="dropdown-button-content__value"> {value?.label} </span>
              {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */}
              <div
                role="button"
                className="dropdown-button-content__remove-value"
                onClick={handleRemoveValue}
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
        onHide={() => setShowMenu(false)}
        container={target.current}
        target={target.current}
        show={showMenu}
        offset={[0, 4]}
        placement="bottom-start"
      >
        {({ placement, arrowProps, show: _show, popper, ...overlayProps }) => (
          <div className="onex-filter-select-menu-wrapper" {...overlayProps}>
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
                Menu: memo(({ children, ...args }) => (
                  <Menu {...args} handleApplyFilter={handleApplyFilter}>
                    {children}
                  </Menu>
                )),
                // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
                Option: memo(({ children, ...args }) => (
                  <Option {...args} showCheckInOption={isMulti} selectedOptions={selectedOptions}>
                    {children}
                  </Option>
                )),
              }}
              onChange={handleChange}
              handleApplyFilter={handleApplyFilter}
              backspaceRemovesValue={false}
              controlShouldRenderValue={false}
              hideSelectedOptions={false}
              placeholder="Search"
              isClearable={false}
              menuIsOpen
              isMulti={isMulti}
              {...props}
            />
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

/* eslint-disable */
Menu.propTypes = {
  handleApplyFilter: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  props: PropTypes.object,
};
/* eslint-enable */

Menu.defaultProps = {
  handleApplyFilter: undefined,
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
};

export default FilterSelect;
