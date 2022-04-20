import React, { useEffect, useState, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchField = React.forwardRef((props, ref) => {
  const {
    autoFocus,
    className,
    placeholder,
    size,
    disabled,
    value,
    onChange,
    showClearBtn,
    dataTestId,
  } = props;

  const [_value, _setValue] = useState(value);

  const inputClassNames = useMemo(
    () =>
      classNames('onex-search-field', {
        [className]: className,
        'onex-search-field--lg': size === 'lg',
        'onex-search-field--sm': size === 'sm',
        'onex-search-field--disabled': disabled,
        'onex-search-field--has-clear-btn': showClearBtn,
        'onex-search-field--filled': _value,
      }),
    [_value],
  );

  const changeValue = (val) => {
    _setValue(val);
    onChange?.(val);
  };

  const handleClear = () => {
    changeValue('');
  };

  const onHandleChange = (event) => {
    changeValue(event.target.value);
  };

  useEffect(() => {
    _setValue(value);
  }, [value]);

  return (
    <Form.Group className={inputClassNames} data-test-id={dataTestId}>
      <div className="onex-search-field__input">
        <Form.Control
          ref={ref}
          autoFocus={autoFocus}
          type="text"
          placeholder={placeholder}
          size={size}
          disabled={disabled}
          value={_value}
          onChange={onHandleChange}
        />
        <div className="onex-search-field__icon">
          <SearchRoundedIcon />
        </div>
        {showClearBtn && !!_value && (
          <button
            className="onex-search-field__clear-btn"
            type="button"
            onClick={handleClear}
            disabled={disabled}
          >
            <HighlightOffRoundedIcon />
          </button>
        )}
      </div>
    </Form.Group>
  );
});

SearchField.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  showClearBtn: PropTypes.bool,
  dataTestId: PropTypes.string,
};

SearchField.defaultProps = {
  autoFocus: false,
  className: undefined,
  value: '',
  placeholder: undefined,
  size: 'sm',
  disabled: false,
  showClearBtn: false,
  onChange: undefined,
  dataTestId: undefined,
};

export default SearchField;
