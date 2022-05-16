import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ToggleButtonGroup as ReactToggleButtonGroup } from 'react-bootstrap';

const ToggleButtonGroup = (props) => {
  const {
    children,
    className,
    vertical,
    size,
    type,
    onChange,
    value,
    defaultValue,
    name,
    variant,
    dataTestId,
  } = props;

  const buttonClassNames = classNames(
    'onex-toggle-btn-group',
    `onex-toggle-btn-group--${variant}`,
    {
      [className]: className,
    },
  );

  return (
    <ReactToggleButtonGroup
      className={buttonClassNames}
      vertical={vertical}
      size={size}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      defaultValue={defaultValue}
      data-test-id={dataTestId}
    >
      {children}
    </ReactToggleButtonGroup>
  );
};

ToggleButtonGroup.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  variant: PropTypes.oneOf(['tab', 'button']),
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    PropTypes.number,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    PropTypes.number,
    PropTypes.string,
  ]),
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

ToggleButtonGroup.defaultProps = {
  className: undefined,
  vertical: false,
  size: 'sm',
  children: undefined,
  type: 'radio',
  onChange: undefined,
  value: undefined,
  variant: 'tab',
  defaultValue: undefined,
  dataTestId: undefined,
};

export default ToggleButtonGroup;
