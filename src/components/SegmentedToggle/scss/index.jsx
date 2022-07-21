import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ToggleButtonGroup as ReactToggleButtonGroup } from 'react-bootstrap';
import ToggleButton from '../../ToggleButton/scss';
import Icon from '../../Icon/scss';

const SegmentedToggle = React.forwardRef(
  (
    { variant, size, items, value, onChange, groupName, className, dataTestId, ...accProps },
    ref,
  ) => {
    const classes = classNames('onex-segmentedToggle', `onex-segmentedToggle-size-${size}`, {
      [className]: className,
      icons: variant !== 'text',
    });
    return (
      <ReactToggleButtonGroup
        {...accProps}
        ref={ref}
        onChange={onChange}
        type="radio"
        name={groupName}
        value={value}
        className={classes}
        data-test-id={dataTestId}
      >
        {items.map(({ id, value: _value, name, disabled = false, label }) => (
          <ToggleButton
            key={id}
            value={_value}
            id={id}
            name={name}
            disabled={disabled}
            onChange={onChange}
          >
            {variant === 'icons' ? <Icon>{label}</Icon> : label}
          </ToggleButton>
        ))}
      </ReactToggleButtonGroup>
    );
  },
);

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
  value: PropTypes.string,
  groupName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

SegmentedToggle.defaultProps = {
  variant: 'text',
  size: 'md',
  value: undefined,
  items: [],
  onChange: null,
  className: '',
  dataTestId: '',
};

export default SegmentedToggle;
