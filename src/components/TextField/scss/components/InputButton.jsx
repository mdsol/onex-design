import { memo } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../Icon/scss';

const InputButton = memo(({ type, showClearBtn, value, disabled, handleClick, showPassword }) => {
  if (type === 'password') {
    return (
      <button
        className="onex-text-field__toggle-pass"
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        <Icon>{showPassword ? 'visibility' : 'visibility_off'}</Icon>
      </button>
    );
  }

  if (showClearBtn && value) {
    return (
      <button
        className="onex-text-field__clear-btn"
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        <Icon>highlight_off</Icon>
      </button>
    );
  }

  return null;
});

InputButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['text', 'password']),
  showClearBtn: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  showPassword: PropTypes.bool,
};

InputButton.defaultProps = {
  value: '',
  type: 'text',
  showClearBtn: false,
  disabled: false,
  handleClick: undefined,
  showPassword: false,
};

export default InputButton;
