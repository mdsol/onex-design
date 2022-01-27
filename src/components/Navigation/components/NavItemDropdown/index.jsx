import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { NavDropdown } from 'react-bootstrap';

const NavItemDropdown = forwardRef((props, ref) => {
  const { title, disabled, items, isActive, className, dataTestId } = props;

  const navDropdownClassNames = classNames('onex-nav__item-dropdown', {
    [className]: className,
    active: isActive,
  });

  return (
    <NavDropdown
      ref={ref}
      className={navDropdownClassNames}
      title={title}
      disabled={disabled}
      data-test-id={dataTestId}
    >
      {!!items?.length &&
        items.map((item) => {
          const {
            title: itemTitle,
            href,
            eventKey: iEventKey,
            active: iActive,
            disabled: iDisabled,
          } = item;

          const itemEventKey = `${iEventKey}`;

          return (
            <NavDropdown.Item
              key={itemEventKey}
              href={href}
              active={iActive}
              eventKey={itemEventKey}
              disabled={iDisabled}
            >
              {itemTitle}
            </NavDropdown.Item>
          );
        })}
    </NavDropdown>
  );
});

NavItemDropdown.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      href: PropTypes.string,
      eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ),
  dataTestId: PropTypes.string,
};

NavItemDropdown.defaultProps = {
  className: undefined,
  title: undefined,
  items: null,
  disabled: false,
  isActive: false,
  dataTestId: undefined,
};

export default NavItemDropdown;
