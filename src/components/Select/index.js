import { useEffect } from 'react';
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
    useEffect(() => {
        onSelect?.(selectedValues);
    }, [selectedValues, onSelect]);

    const selectClassNames = classNames('c-select', {
        [className]: className,
        'c-select--lg': size === 'lg',
        'c-select--sm': size === 'sm',
        'c-select--invalid': isInvalid,
    });

    const handleChange = (option) => {
        if (!isMulti) {
            onSelect([option]);
        }
        onSelect?.([...option]);
    };

    return (
        <div>
            <Select
                className={selectClassNames}
                classNamePrefix="c-select"
                isMulti={isMulti}
                options={options}
                isDisabled={isDisabled}
                onChange={handleChange}
                aria-invalid
                value={selectedValues}
                data-test-id={dataTestId}
            />
            {isInvalid && !isDisabled && (
                <Form.Text className="c-text-field__error">{errorMessage}</Form.Text>
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
