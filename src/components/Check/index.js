import React, { useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Check = React.forwardRef((props, ref) => {
    const { id, className, checked, disabled, indeterminate, size, label, type, onChange } = props;
    const checkboxRef = useRef();
    const formGroupClassNames = classNames('с-check', `c-check--size-${size}`, {
        [className]: className,
        disabled,
    });

    useEffect(() => {
        checkboxRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    return (
        <Form.Group controlId={id} className={formGroupClassNames} ref={ref}>
            <Form.Check.Input
                ref={checkboxRef}
                type={type}
                id={id}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            {label && <Form.Check.Label>{label}</Form.Check.Label>}
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
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

Check.defaultProps = {
    className: undefined,
    checked: false,
    disabled: false,
    indeterminate: false,
    size: 'sm',
    type: 'checkbox',
    label: undefined,
    onChange: undefined,
};

export default Check;
