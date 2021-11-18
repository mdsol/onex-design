import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuItem = ({
    text,
    className,
    path,
    onSelect,
    controlId,
    disabled,
    leadingIcon,
    trailingIcon,
    badge,
    unavailable,
}) => {
    const [selected, setSelected] = useState(false);
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
        <div className={menuItemClassNames}>
            {selected && <span className="c-menuItem--selected__indicator" />}
            <a href={path} onClick={handleSelect}>
                {leadingIcon && <div className="c-menuItem__icon__leading">{leadingIcon}</div>}
                <span>{text}</span>
                {trailingIcon && <div className="c-menuItem__icon__trailing">{trailingIcon}</div>}
                {badge && <div className="c-menuItem__badge">{badge}</div>}
            </a>
        </div>
    );
};

MenuItem.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    path: PropTypes.string,
    onSelect: PropTypes.func,
    controlId: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    leadingIcon: PropTypes.arrayOf(PropTypes.node),
    trailingIcon: PropTypes.arrayOf(PropTypes.node),
    badge: PropTypes.arrayOf(PropTypes.node),
    unavailable: PropTypes.bool,
};

MenuItem.defaultProps = {
    text: '',
    className: undefined,
    path: '',
    onSelect: undefined,
    disabled: false,
    leadingIcon: undefined,
    trailingIcon: undefined,
    badge: undefined,
    unavailable: false,
};

export default MenuItem;
