import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import XIcon from '../../icons/XIcon';

const Tag = ({
    icon,
    variant,
    isRemovable,
    size,
    className,
    path,
    onSelect,
    onRemove,
    controlId,
    dataTestId,
    children,
}) => {
    const [selected, setSelected] = useState(false);
    const tagClassNames = classNames('c-tag', {
        [className]: className,
        'c-tag--lg': size === 'lg',
        'c-tag--sm': size === 'sm',
        'c-tag--rounded': variant === 'rounded',
        'c-tag--default': !variant || variant === 'default',
        'c-tag--link': path,
        'c-tag--selected': selected,
    });

    const handleSelect = () => {
        setSelected((prev) => !prev);
        onSelect?.({ [controlId]: !selected });
    };

    const handleRemove = (e) => {
        e.stopPropagation();
        onRemove?.(controlId);
    };

    return (
        <button
            type="button"
            className={tagClassNames}
            onClick={handleSelect}
            data-test-id={dataTestId}
        >
            {icon && <div className="c-tag__img">{icon}</div>}
            {children && !path && <span className="c-tag__text">{children}</span>}
            {children && path && <a href={path}>{children}</a>}
            {isRemovable && (
                <button type="button" className="c-tag__close" onClick={handleRemove}>
                    <XIcon className="c-tag__close__icon" />
                </button>
            )}
        </button>
    );
};

Tag.propTypes = {
    icon: PropTypes.node,
    variant: PropTypes.oneOf(['default', 'rounded']),
    isRemovable: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg']),
    className: PropTypes.string,
    path: PropTypes.string,
    onSelect: PropTypes.func,
    onRemove: PropTypes.func,
    controlId: PropTypes.string,
    dataTestId: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Tag.defaultProps = {
    icon: undefined,
    variant: 'default',
    isRemovable: false,
    size: 'sm',
    className: undefined,
    controlId: '',
    path: undefined,
    onSelect: undefined,
    onRemove: undefined,
    dataTestId: undefined,
    children: undefined,
};

export default Tag;
