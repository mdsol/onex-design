import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';

import Select from '../Select';
import CheckIcon from '../../icons/CheckIcon';
import CustomButton from '../Button';
import XIcon from '../../icons/XIcon';

const selectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

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
}) => {
    const [_selectedOptions, setSelectedOptions] = useState([]);
    const [isActive, setIsActive] = useState(false);
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
                <Form.Text className="c-text-field__error">{errorMessage}</Form.Text>
            )}
        </Form.Group>
    );
};

InlineEditSelect.propTypes = {
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    selectedOptions: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)),
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    onEditSelect: PropTypes.func,
    controlId: PropTypes.string,
    size: PropTypes.string,
    dataTestId: PropTypes.string,
};

InlineEditSelect.defaultProps = {
    className: undefined,
    errorMessage: undefined,
    selectedOptions: [],
    disabled: false,
    isInvalid: false,
    onEditSelect: undefined,
    controlId: '',
    size: 'lg',
    dataTestId: '',
};

export default InlineEditSelect;
