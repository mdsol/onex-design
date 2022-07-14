import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ToggleButtonGroup as ReactToggleButtonGroup } from 'react-bootstrap';
import ToggleButton from '../../ToggleButton/scss';
import Icon from '../../Icon/scss';

const SegmentedToggle = ({
  variant,
  size,
  items,
  defaultValue,
  onChange,
  groupName,
  className,
  dataTestId,
  ...accProps
}) => {
  const classes = classNames('onex-segmentedToggle', `onex-segmentedToggle-size-${size}`, {
    [className]: className,
    icons: variant !== 'text',
  });
  return (
    <ReactToggleButtonGroup
      {...accProps}
      onChange={onChange}
      type="radio"
      name={groupName}
      defaultValue={defaultValue}
      className={classes}
      data-test-id={dataTestId}
    >
      {items.map(({ id, value, name, disabled = false, label }) => (
        <ToggleButton key={id} value={value} id={id} name={name} disabled={disabled}>
          {variant === 'icons' ? <Icon>{label}</Icon> : label}
        </ToggleButton>
      ))}
    </ReactToggleButtonGroup>
  );
};

SegmentedToggle.propTypes = {
  variant: PropTypes.oneOf(['icons', 'customIcons', 'text']),
  size: PropTypes.oneOf(['sm', 'md']),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      disabled: PropTypes.bool,
    }),
  ),
  defaultValue: PropTypes.string,
  groupName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

SegmentedToggle.defaultProps = {
  variant: 'text',
  size: 'md',
  items: [],
  defaultValue: '',
  onChange: null,
  className: '',
  dataTestId: '',
};

export default SegmentedToggle;
