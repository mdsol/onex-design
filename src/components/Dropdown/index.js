import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const CustomDropdown = React.forwardRef((props, ref) => {
    const {
        className,
        disabled,
        id,
        title,
        items,
        variant,
        size,
        buttonStyle,
        align,
        onSelect,
        dataTestId,
    } = props;
    const buttonClassNames = classNames('c-dropdown', `c-dropdown--${buttonStyle}`, {
        [className]: className,
    });

    return (
        <DropdownButton
            ref={ref}
            className={buttonClassNames}
            id={id}
            title={title}
            disabled={disabled}
            variant={variant}
            size={size}
            align={align}
            onSelect={onSelect}
            data-test-id={dataTestId}
        >
            {!!items?.length &&
                items.map((item) => {
                    const {
                        title: itemTitle,
                        href,
                        hasDividerAfter,
                        active,
                        disabled: itemDisabled,
                        eventKey,
                    } = item;

                    return (
                        <>
                            <Dropdown.Item
                                key={eventKey}
                                href={href}
                                active={active}
                                eventKey={eventKey}
                                disabled={itemDisabled}
                            >
                                {itemTitle}
                            </Dropdown.Item>
                            {hasDividerAfter && <Dropdown.Divider />}
                        </>
                    );
                })}
        </DropdownButton>
    );
});

CustomDropdown.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
    variant: PropTypes.oneOf(['primary', 'secondary', 'link', 'icon-link']),
    align: PropTypes.oneOf(['start', 'end']),
    buttonStyle: PropTypes.oneOf(['text', 'icon']),
    size: PropTypes.oneOf(['lg', 'sm']),
    disabled: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            hasDividerAfter: PropTypes.bool,
            active: PropTypes.bool,
            disabled: PropTypes.bool,
            eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            href: PropTypes.string,
        }),
    ),
    onSelect: PropTypes.func,
    dataTestId: PropTypes.string,
};

CustomDropdown.defaultProps = {
    className: undefined,
    disabled: false,
    title: undefined,
    items: null,
    variant: 'primary',
    size: 'sm',
    onSelect: undefined,
    align: 'start',
    buttonStyle: 'text',
    dataTestId: undefined,
};

export default CustomDropdown;
