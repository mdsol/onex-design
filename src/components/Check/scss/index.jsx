import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

const Check = React.forwardRef((props, ref) => {
  const {
    id,
    className,
    checked,
    disabled,
    indeterminate,
    size,
    type,
    dataTestId,
    children,
    onChange,
  } = props;
  const checkboxRef = useRef();
  const formGroupClassNames = classNames('onex-check', `onex-check--size-${size}`, {
    [className]: className,
    disabled,
  });

  useEffect(() => {
    checkboxRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <Form.Group controlId={id} className={formGroupClassNames} ref={ref} data-test-id={dataTestId}>
      <Form.Check.Input
        ref={checkboxRef}
        type={type}
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        data-indeterminate={indeterminate}
        className={classNames({ indeterminate })}
      />
      {children && <Form.Check.Label>{children}</Form.Check.Label>}
    </Form.Group>
  );
});

Check.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  type: PropTypes.oneOf(['checkbox', 'radio']),
  dataTestId: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Check.defaultProps = {
  className: undefined,
  checked: false,
  disabled: false,
  indeterminate: false,
  size: 'sm',
  type: 'checkbox',
  dataTestId: undefined,
  onChange: undefined,
  children: undefined,
};

export default Check;
