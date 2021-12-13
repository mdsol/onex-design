import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuItem = ({
    className,
    path,
    onSelect,
    controlId,
    disabled,
    leadingIcon,
    trailingIcon,
    badge,
    unavailable,
    dataTestId,
    children,
    isSelected,
}) => {
    const [selected, setSelected] = useState(isSelected);
    const menuItemClassNames = classNames('c-menuItem', {
        [className]: className,
        'c-menuItem--disabled': disabled,
        'c-menuItem--selected': selected,
        'c-menuItem--unavailable': unavailable,
    });

    const handleSelect = (e) => {
        e.preventDefault();
        if (!disabled && !unavailable) {
            setSelected((prev) => !prev);
            onSelect({ [controlId]: !selected });
        }
    };
    return (
        <div className={menuItemClassNames} data-test-id={dataTestId}>
            {selected && <span className="c-menuItem--selected__indicator" />}
            <a href={path} onClick={handleSelect}>
                {leadingIcon && <div className="c-menuItem__icon__leading">{leadingIcon}</div>}
                <span>{children}</span>
                {trailingIcon && <div className="c-menuItem__icon__trailing">{trailingIcon}</div>}
                {badge && <div className="c-menuItem__badge">{badge}</div>}
            </a>
        </div>
    );
};

MenuItem.propTypes = {
    className: PropTypes.string,
    path: PropTypes.string,
    onSelect: PropTypes.func,
    controlId: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    leadingIcon: PropTypes.arrayOf(PropTypes.node),
    trailingIcon: PropTypes.arrayOf(PropTypes.node),
    badge: PropTypes.arrayOf(PropTypes.node),
    unavailable: PropTypes.bool,
    isSelected: PropTypes.bool,
    dataTestId: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

MenuItem.defaultProps = {
    className: undefined,
    path: '',
    onSelect: undefined,
    disabled: false,
    leadingIcon: undefined,
    trailingIcon: undefined,
    badge: undefined,
    unavailable: false,
    dataTestId: undefined,
    children: '',
    isSelected: false,
};

export default MenuItem;
