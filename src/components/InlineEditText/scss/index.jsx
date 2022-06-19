import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Icon from '../../Icon/scss';
import Button from '../../Buttons/scss';

const InlineEditText = React.forwardRef((props, ref) => {
  const {
    className,
    label,
    errorMessage,
    placeholder,
    controlId,
    size,
    readOnly,
    disabled,
    value,
    onChange,
    isInvalid,
    required,
    dataTestId,
    onActive,
    ...accProps
  } = props;

  const [_value, setValue] = useState(value);
  const [isActive, setIsActive] = useState(onActive);
  const [_status, setStatus] = useState('done');

  useEffect(() => {
    setValue(value);
  }, [value]);

  const inputClassNames = classNames('onex-text-field', {
    [className]: className,
    'onex-text-field--lg': size === 'lg',
    'onex-text-field--sm': size === 'sm',
    'onex-text-field--complete': _status === 'done',
  });

  const onFocus = () => {
    setIsActive(true);
  };
  const onBlur = () => {
    if (_status !== 'changing') {
      setIsActive(false);
    }
  };
  const handleComplete = () => {
    setStatus('done');
    setIsActive(false);
    onChange?.(_value);
  };
  const handleCancel = () => {
    setStatus('cancel');
    setIsActive(false);
    setValue(value);
    onChange?.(value);
  };
  const changeValue = (val) => {
    setValue(val);
    setStatus('changing');
  };

  const onHandleChange = (event) => {
    changeValue(event.target.value);
  };

  return (
    <Form.Group
      ref={ref}
      {...accProps}
      className={inputClassNames}
      controlId={controlId}
      onFocus={onFocus}
      onBlur={onBlur}
      data-test-id={dataTestId}
    >
      {label && size === 'lg' && <Form.Label>{label}</Form.Label>}
      <div className="onex-edit-text">
        <Form.Control
          type="text"
          placeholder={placeholder}
          size={size}
          disabled={disabled}
          isInvalid={isInvalid}
          readOnly={readOnly}
          required={required}
          value={_value}
          onChange={onHandleChange}
          className={classNames({
            'onex-edit-text__input': !isActive,
            'onex-edit-text__input__active': isActive,
            'onex-edit-text__input__disabled': disabled,
          })}
        />
        {!isActive && (
          <div className="onex-edit-text__icon">
            <Icon>edit</Icon>
          </div>
        )}
      </div>
      {isActive && !isInvalid && (
        <div className="status-buttons">
          <Button
            className="status-buttons__complete"
            variant="primary"
            size="sm"
            type="icon"
            onClick={handleComplete}
          >
            <Icon>done</Icon>
          </Button>
          <Button
            className="status-buttons__cancel"
            variant="secondary"
            size="sm"
            type="icon"
            onClick={handleCancel}
          >
            <Icon>close</Icon>
          </Button>
        </div>
      )}
      {isInvalid && !disabled && (
        <Form.Text className="onex-text-field__help onex-text-field__help--error">
          {errorMessage}
        </Form.Text>
      )}
    </Form.Group>
  );
});

InlineEditText.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  controlId: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  dataTestId: PropTypes.string,
  onActive: PropTypes.bool,
};

InlineEditText.defaultProps = {
  className: undefined,
  label: undefined,
  errorMessage: undefined,
  value: '',
  placeholder: undefined,
  size: 'sm',
  controlId: undefined,
  readOnly: false,
  disabled: false,
  isInvalid: false,
  required: false,
  onChange: undefined,
  dataTestId: undefined,
  onActive: false,
};

export default InlineEditText;
