import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ToggleButton } from 'react-bootstrap';

const CustomToggleButton = React.forwardRef((props, ref) => {
  const { children, className, disabled, value, id, name, dataTestId, ...accProps } = props;
  const buttonClassNames = classNames('onex-toggle-btn', {
    [className]: className,
  });

  return (
    <div className="onex-toggle-btn-wrapper">
      <ToggleButton
        id={id}
        ref={ref}
        className={buttonClassNames}
        value={value}
        disabled={disabled}
        name={name}
        variant="toggle"
        data-test-id={dataTestId}
        {...accProps}
      >
        {children}
      </ToggleButton>
    </div>
  );
});

CustomToggleButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

CustomToggleButton.defaultProps = {
  className: undefined,
  disabled: false,
  children: undefined,
  value: undefined,
  dataTestId: undefined,
};

export default CustomToggleButton;
