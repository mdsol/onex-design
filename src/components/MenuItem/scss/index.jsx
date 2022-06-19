import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Badge from '../../Badge/scss';

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
  ...accProps
}) => {
  const [selected, setSelected] = useState(isSelected);
  const menuItemClassNames = classNames('onex-menuItem', {
    [className]: className,
    'onex-menuItem--disabled': disabled,
    'onex-menuItem--selected': selected,
    'onex-menuItem--unavailable': unavailable,
  });

  const handleSelect = (e) => {
    e.preventDefault();
    if (!disabled && !unavailable) {
      setSelected((prev) => !prev);
      onSelect({ [controlId]: !selected });
    }
  };
  return (
    <div {...accProps} className={menuItemClassNames} data-test-id={dataTestId}>
      {selected && <span className="onex-menuItem--selected__indicator" />}
      <a href={path} onClick={handleSelect}>
        {leadingIcon && <div className="onex-menuItem__icon__leading">{leadingIcon}</div>}
        <span>{children}</span>
        {trailingIcon && <div className="onex-menuItem__icon__trailing">{trailingIcon}</div>}
        {badge && (
          <Badge className="onex-menuItem__badge" size="sm" type={selected ? 'primary' : 'default'}>
            {badge}
          </Badge>
        )}
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
