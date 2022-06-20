import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ToggleButton as ReactToggleButton } from 'react-bootstrap';

const ToggleButton = React.forwardRef((props, ref) => {
  const { children, className, disabled, value, id, name, dataTestId, ...accProps } = props;
  const buttonClassNames = classNames('onex-toggle-btn-wrapper', {
    [className]: className,
  });

  return (
    <div className={buttonClassNames}>
      <ReactToggleButton
        {...accProps}
        id={id}
        ref={ref}
        className="onex-toggle__btn"
        value={value}
        disabled={disabled}
        name={name}
        variant="toggle"
        data-test-id={dataTestId}
      >
        {children}
      </ReactToggleButton>
    </div>
  );
});

ToggleButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

ToggleButton.defaultProps = {
  className: undefined,
  disabled: false,
  children: undefined,
  value: undefined,
  dataTestId: undefined,
};

export default ToggleButton;
