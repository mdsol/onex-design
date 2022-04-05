import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Badge from '../../Badge/scss';

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
    as,
  } = props;
  const buttonClassNames = classNames('onex-dropdown', `onex-dropdown--${buttonStyle}`, {
    [className]: className,
    'onex-dropdown--default-icon': !title && buttonStyle === 'icon',
  });

  return (
    <DropdownButton
      as={as}
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
            badge,
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
                <span>{itemTitle}</span>
                {badge && (
                  <Badge size="sm" type={active ? 'primary' : 'default'}>
                    {badge}
                  </Badge>
                )}
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
  title: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  align: PropTypes.oneOf(['start', 'end']),
  buttonStyle: PropTypes.oneOf(['text', 'icon']),
  size: PropTypes.oneOf(['md', 'sm']),
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      hasDividerAfter: PropTypes.bool,
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      href: PropTypes.string,
    }),
  ),
  onSelect: PropTypes.func,
  dataTestId: PropTypes.string,
  as: PropTypes.node,
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
  as: undefined,
};

export default CustomDropdown;
