import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Dropdown as ReactDropdown } from 'react-bootstrap';
import Badge from '../../Badge/scss';
import Icon from '../../Icon/scss';
import DropdownMenu from './components/DropdownMenu';

const Dropdown = React.forwardRef((props, ref) => {
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
    <ReactDropdown
      onSelect={onSelect}
      className={buttonClassNames}
      data-test-id={dataTestId}
      align={align}
      ref={ref}
    >
      <ReactDropdown.Toggle as={as} id={id} disabled={disabled} variant={variant} size={size}>
        {buttonStyle !== 'icon' ? (
          <>
            {title}
            <Icon className="onex-dropdown__chevron-icon">expand_more</Icon>
          </>
        ) : (
          <Icon>more_vert</Icon>
        )}
      </ReactDropdown.Toggle>
      <ReactDropdown.Menu as={DropdownMenu} align={align}>
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
              <Fragment key={eventKey}>
                <ReactDropdown.Item
                  key={eventKey}
                  href={href}
                  active={active}
                  eventKey={eventKey}
                  disabled={itemDisabled}
                  title={itemTitle}
                >
                  <span>{itemTitle}</span>
                  {badge && (
                    <Badge size="sm" type={active && !itemDisabled ? 'primary' : 'default'}>
                      {badge}
                    </Badge>
                  )}
                </ReactDropdown.Item>
                {hasDividerAfter && <ReactDropdown.Divider />}
              </Fragment>
            );
          })}
      </ReactDropdown.Menu>
    </ReactDropdown>
  );
});

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
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

Dropdown.defaultProps = {
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

export default Dropdown;
