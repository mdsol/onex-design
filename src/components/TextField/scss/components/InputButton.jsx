import { memo } from 'react';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import PropTypes from 'prop-types';

const InputButton = memo(({ type, showClearBtn, value, disabled, handleClick, showPassword }) => {
  if (type === 'password') {
    return (
      <button
        className="onex-text-field__toggle-pass"
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
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
        <HighlightOffRoundedIcon />
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
