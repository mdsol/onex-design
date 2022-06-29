import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Form as ReactForm } from 'react-bootstrap';

const Check = React.forwardRef((props, ref) => {
  const {
    id,
    className,
    checked,
    disabled,
    indeterminate,
    type,
    dataTestId,
    children,
    value,
    onChange,
    ...accProps
  } = props;
  const checkboxRef = useRef();
  const formGroupClassNames = classNames('onex-check', {
    [className]: className,
    disabled,
  });

  useEffect(() => {
    checkboxRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <ReactForm.Group
      {...accProps}
      controlId={id}
      className={formGroupClassNames}
      ref={ref}
      data-test-id={dataTestId}
    >
      <ReactForm.Check.Label className="onex-check__wrapper">
        <ReactForm.Check.Input
          ref={checkboxRef}
          type={type}
          id={id}
          disabled={disabled}
          checked={checked}
          value={value}
          data-indeterminate={indeterminate}
          onChange={onChange}
          className={classNames({ indeterminate })}
        />
        <span className="onex-check__custom" />
        {children && <ReactForm.Check.Label>{children}</ReactForm.Check.Label>}
      </ReactForm.Check.Label>
    </ReactForm.Group>
  );
});

Check.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  dataTestId: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Check.defaultProps = {
  className: undefined,
  checked: false,
  disabled: false,
  indeterminate: false,
  type: 'checkbox',
  value: undefined,
  dataTestId: undefined,
  onChange: undefined,
  children: undefined,
};

export default Check;
