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
}) => {
  const classes = classNames('onex-segmentedToggle', `onex-segmentedToggle-size-${size}`, {
    [className]: className,
    icons: variant !== 'text',
  });
  return (
    <ReactToggleButtonGroup
      onChange={onChange}
      type="radio"
      name={groupName}
      defaultValue={defaultValue}
      className={classes}
      data-test-id={dataTestId}
    >
      {items.map((item) => (
        <ToggleButton value={item.value} id={item.id} name={item.name} key={item.id}>
          {variant === 'icons' ? <Icon>{item.label}</Icon> : item.label}
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
