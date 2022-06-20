import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';

const Switch = React.forwardRef((props, ref) => {
  const { className, disabled, checked, label, id, onChange, dataTestId, ...accProps } = props;
  const switchClassNames = classNames('onex-switch', {
    [className]: className,
  });

  return (
    <Form.Switch
      {...accProps}
      ref={ref}
      className={switchClassNames}
      disabled={disabled}
      checked={checked}
      label={label}
      id={id}
      onChange={onChange}
      data-test-id={dataTestId}
    />
  );
});

Switch.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  dataTestId: PropTypes.string,
};

Switch.defaultProps = {
  className: undefined,
  disabled: false,
  checked: false,
  label: undefined,
  onChange: undefined,
  dataTestId: undefined,
};

export default Switch;
