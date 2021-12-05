import React, { useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Check = React.forwardRef((props, ref) => {
    const {
        id,
        className,
        checked,
        defaultChecked,
        disabled,
        indeterminate,
        size,
        type,
        dataTestId,
        children,
        onChange,
    } = props;
    const checkboxRef = useRef();
    const formGroupClassNames = classNames('с-check', `c-check--size-${size}`, {
        [className]: className,
        disabled,
    });

    useEffect(() => {
        checkboxRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    return (
        <Form.Group
            controlId={id}
            className={formGroupClassNames}
            ref={ref}
            data-test-id={dataTestId}
        >
            <Form.Check.Input
                ref={checkboxRef}
                type={type}
                id={id}
                disabled={disabled}
                checked={checked}
                defaultChecked={defaultChecked}
                onChange={onChange}
            />
            {children && <Form.Check.Label>{children}</Form.Check.Label>}
        </Form.Group>
    );
});

Check.propTypes = {
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
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
    defaultChecked: false,
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
