import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';

const ExpansionPanelItem = ({
    eventKey,
    children,
    active,
    disabled,
    unavailable,
    href,
    leadingIcon,
    trailingIcon,
    className,
}) => {
    const expansionPanelItemClassNames = classNames('onex-expansionPanel-item', {
        [className]: className,
        'onex-expansionPanel-item--unavailable': unavailable,
        'onex-expansionPanel-item--leading-icon': leadingIcon,
        'onex-expansionPanel-item--icons': leadingIcon && trailingIcon,
    });

    return (
        <Dropdown.Item
            className={expansionPanelItemClassNames}
            eventKey={eventKey}
            active={active}
            disabled={disabled}
            href={href}
        >
            {leadingIcon && (
                <div className="onex-expansionPanel-item__icon onex-expansionPanel-item__icon__leading">
                    {leadingIcon}
                </div>
            )}
            <div>{children}</div>
            {trailingIcon && (
                <div className="onex-expansionPanel-item__icon onex-expansionPanel-item__icon__trailing">
                    {trailingIcon}
                </div>
            )}
        </Dropdown.Item>
    );
};
ExpansionPanelItem.propTypes = {
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    unavailable: PropTypes.bool,
    href: PropTypes.string,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
};

ExpansionPanelItem.defaultProps = {
    className: undefined,
    children: undefined,
    active: false,
    disabled: false,
    unavailable: false,
    href: undefined,
    leadingIcon: undefined,
    trailingIcon: undefined,
};

export default ExpansionPanelItem;
