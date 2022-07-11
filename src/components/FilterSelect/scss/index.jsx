import { useEffect, useRef, useMemo, useState, memo } from 'react';
import classNames from 'classnames';
import ReactSelect, { components } from 'react-select';
import PropTypes from 'prop-types';
import { Overlay as ReactOverlay, Button as ReactButton } from 'react-bootstrap';
import Icon from '../../Icon/scss';
import Check from '../../Check/scss';

// const MenuList = ({ selectProps, ...props }) => {
//   const { onInputChange, inputValue, onMenuInputFocus } = selectProps;
//
//   // Copied from source
//   const ariaAttributes = {
//     'aria-autocomplete': 'list',
//     'aria-label': selectProps['aria-label'],
//     'aria-labelledby': selectProps['aria-labelledby'],
//   };
//
//   return (
//     <div>
//       <input
//         style={{
//           width: '100%',
//           boxSizing: 'border-box',
//           padding: 10,
//           border: 'none',
//           borderBottom: '1px solid lightgrey',
//         }}
//         autoCorrect="off"
//         autoComplete="off"
//         spellCheck="false"
//         type="text"
//         value={inputValue}
//         onChange={(e) =>
//           onInputChange(e.currentTarget.value, {
//             action: 'input-change',
//           })
//         }
//         onMouseDown={(e) => {
//           e.stopPropagation();
//           e.target.focus();
//         }}
//         onTouchEnd={(e) => {
//           e.stopPropagation();
//           e.target.focus();
//         }}
//         onFocus={onMenuInputFocus}
//         placeholder="Search..."
//         {...ariaAttributes}
//       />
//       <components.MenuList {...props} selectProps={selectProps} />
//     </div>
//   );
// };

const Option = ({ selectedOptions, showCheckInOption, ...props }) => {
  const checkedValue = selectedOptions?.some((elem) => elem.value === props.value);

  return (
    <components.Option
      {...props}
      className={classNames({
        'onex-filter-select__option--text': !showCheckInOption,
      })}
    >
      {showCheckInOption ? (
        <Check id={props.children} checked={checkedValue} className="multi-filter-select-check">
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
  selectedValues,
  options,
  groupedOptions,
  size,
  onSelect,
  isMulti,
  dataTestId,
  ...props
}) => {
  const selectStyles = {
    control: (provided) => ({ ...provided, minWidth: 240, margin: 8 }),
    // menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
  };
  const target = useRef(null);
  const locSelectedValues = useMemo(
    () => (Array.isArray(selectedValues) ? selectedValues : [selectedValues]),
    [selectedValues],
  );

  const [selectedOptions, setSelectedOptions] = useState(locSelectedValues);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [value, setValue] = useState(locSelectedValues.length ? locSelectedValues[0] : null);

  useEffect(() => {
    setSelectedOptions(locSelectedValues);
  }, [locSelectedValues]);

  const selectClassNames = classNames('onex-filter-select', `onex-filter-select--${size}`, {
    [className]: className,
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
      <ReactButton
        className={`onex-filter-select__dropdown-button ${menuIsOpen ? 'menu-open' : ''}`}
        variant="secondary"
        disabled={disabled}
        ref={target}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <div className="dropdown-button-content">
          {value ? `State: ${value[0].label}` : 'Select a State'}
          <Icon className="dropdown-button-content__icon">expand_more</Icon>
        </div>
      </ReactButton>
      <ReactOverlay
        rootClose
        onHide={() => setMenuIsOpen(false)}
        container={target.current}
        target={target.current}
        show={menuIsOpen}
        offset={[0, 4]}
        placement="bottom-start"
      >
        {({ placement, arrowProps, show: _show, popper, ...overlayProps }) => (
          <div className="onex-filter-select-menu-wrapper" {...overlayProps}>
            <ReactSelect
              data-test-id={dataTestId}
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
              styles={selectStyles}
              menuIsOpen
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
  selectedValues: [],
  options: [],
  groupedOptions: [],
  size: 'sm',
  onSelect: undefined,
  isMulti: false,
  dataTestId: '',
};

export default FilterSelect;
