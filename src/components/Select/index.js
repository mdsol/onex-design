import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';

const CustomSelect = ({
    className,
    isMulti,
    isDisabled,
    size,
    isInvalid,
    errorMessage,
    selectedValues,
    onSelect,
    options,
    dataTestId,
}) => {
    const [selectedOptions, seSelectedOptions] = useState(selectedValues);
    useEffect(() => {
        onSelect?.(selectedValues);
    }, [selectedValues, onSelect]);

    const selectClassNames = classNames('onex-select', {
        [className]: className,
        'onex-select--lg': size === 'lg',
        'onex-select--sm': size === 'sm',
        'onex-select--invalid': isInvalid,
    });

    const handleChange = (option) => {
        if (!isMulti) {
            seSelectedOptions([option]);
            return onSelect?.([option]);
        }
        seSelectedOptions([...option]);
        return onSelect?.([...option]);
    };

    return (
        <div>
            <Select
                className={selectClassNames}
                classNamePrefix="onex-select"
                isMulti={isMulti}
                options={options}
                isDisabled={isDisabled}
                onChange={handleChange}
                aria-invalid
                value={selectedOptions}
                data-test-id={dataTestId}
            />
            {isInvalid && !isDisabled && (
                <Form.Text className="onex-text-field__error">{errorMessage}</Form.Text>
            )}
        </div>
    );
};

const optionType = PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});

CustomSelect.propTypes = {
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    selectedValues: PropTypes.arrayOf(optionType),
    options: PropTypes.arrayOf(optionType),
    size: PropTypes.oneOf(['lg', 'sm']),
    isMulti: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    onSelect: PropTypes.func,
    dataTestId: PropTypes.string,
};

CustomSelect.defaultProps = {
    className: undefined,
    errorMessage: undefined,
    selectedValues: [],
    size: 'sm',
    isMulti: false,
    isDisabled: false,
    isInvalid: false,
    options: [],
    onSelect: undefined,
    dataTestId: '',
};

export default CustomSelect;
