import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import CheckIcon from '../../../icons/CheckIcon';
import XIcon from '../../../icons/XIcon';
import CustomButton from '../../Buttons/scss';
import Select from '../../Select/scss';

const InlineEditSelect = ({
  onEditSelect,
  selectedOptions,
  controlId,
  isInvalid,
  disabled,
  errorMessage,
  className,
  size,
  dataTestId,
  selectOptions,
  isMulti,
  onActive,
}) => {
  const [_selectedOptions, setSelectedOptions] = useState([]);
  const [isActive, setIsActive] = useState(onActive);
  const [_status, setStatus] = useState('done');

  useEffect(() => {
    setSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  const inlineEditSelectClassNames = classNames('inline-edit-select', {
    [className]: className,
    'inline-edit-select--invalid': isInvalid,
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
    onEditSelect?.(_selectedOptions);
  };
  const handleCancel = () => {
    setStatus('cancel');
    setIsActive(false);
    setSelectedOptions(selectedOptions);
    onEditSelect?.(selectedOptions);
  };

  const handleSelect = (options) => {
    setSelectedOptions(options);
    setStatus('changing');
  };

  return (
    <Form.Group
      className="inline-edit-select-wrapper"
      controlId={controlId}
      onFocus={onFocus}
      onBlur={onBlur}
      data-test-id={dataTestId}
    >
      <Select
        onSelect={handleSelect}
        options={selectOptions}
        className={inlineEditSelectClassNames}
        selectedValues={_selectedOptions}
        size={size}
        isMulti={isMulti}
      />
      {isActive && !isInvalid && (
        <div className="status-buttons">
          <CustomButton
            className="status-buttons__complete"
            variant="primary"
            onClick={handleComplete}
          >
            <CheckIcon />
          </CustomButton>
          <CustomButton
            className="status-buttons__cancel"
            variant="secondary"
            onClick={handleCancel}
          >
            <XIcon />
          </CustomButton>
        </div>
      )}
      {isInvalid && !disabled && (
        <Form.Text className="onex-text-field__error">{errorMessage}</Form.Text>
      )}
    </Form.Group>
  );
};

InlineEditSelect.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  selectedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  onEditSelect: PropTypes.func,
  controlId: PropTypes.string,
  size: PropTypes.string,
  dataTestId: PropTypes.string,
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isMulti: PropTypes.bool,
  onActive: PropTypes.bool,
};

InlineEditSelect.defaultProps = {
  className: undefined,
  errorMessage: undefined,
  disabled: false,
  isInvalid: false,
  onEditSelect: undefined,
  controlId: '',
  size: 'lg',
  dataTestId: '',
  isMulti: false,
  onActive: false,
};

export default InlineEditSelect;
