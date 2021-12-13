import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import ExpansionPanelToggle from './components/ExpansionPanelToggle';
import ExpansionPanelItem from './components/ExpansionPanelItem';

const ExpansionPanel = (props) => {
    const { className, id, children, onSelect, dataTestId, toggle, items } = props;

    const expansionPanelClassNames = classNames('c-expansionPanel', {
        [className]: className,
    });

    const [isActive, setIsActive] = useState(null);

    const handleSelect = (value) => {
        const isActiveItem = items.some(
            (item) => item.eventKey === value && !item.disabled && !item.unavailable,
        );

        setIsActive(isActiveItem);
        onSelect?.(value);
    };

    return (
        <Dropdown className={expansionPanelClassNames} data-test-id={dataTestId}>
            <Dropdown.Toggle
                id={id}
                as={ExpansionPanelToggle}
                badge={toggle?.badge}
                avatar={toggle?.avatar}
                disabled={toggle?.disabled}
            >
                {children}
            </Dropdown.Toggle>
            <Dropdown.Menu
                renderOnMount
                flip={false}
                onSelect={handleSelect}
                className="c-expansionPanel-menu"
            >
                {!!items?.length &&
                    items.map((item) => {
                        const {
                            title,
                            hasDividerAfter,
                            disabled: itemDisabled,
                            unavailable,
                            eventKey,
                            href,
                            leadingIcon,
                            trailingIcon,
                        } = item;

                        return (
                            <Fragment key={eventKey}>
                                <ExpansionPanelItem
                                    href={href}
                                    active={isActive}
                                    eventKey={eventKey}
                                    disabled={itemDisabled}
                                    unavailable={unavailable}
                                    leadingIcon={leadingIcon}
                                    trailingIcon={trailingIcon}
                                >
                                    {title}
                                </ExpansionPanelItem>
                                {hasDividerAfter && <Dropdown.Divider />}
                            </Fragment>
                        );
                    })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ExpansionPanel;

const propToggleType = PropTypes.shape({
    badge: PropTypes.string,
    avatar: PropTypes.node,
    disabled: PropTypes.bool,
});

const propItemType = PropTypes.shape({
    title: PropTypes.node,
    hasDividerAfter: PropTypes.bool,
    disabled: PropTypes.bool,
    unavailable: PropTypes.bool,
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    href: PropTypes.string,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
});

ExpansionPanel.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    onSelect: Function,
    dataTestId: PropTypes.string,
    toggle: propToggleType,
    items: PropTypes.arrayOf(propItemType),
};

ExpansionPanel.defaultProps = {
    className: undefined,
    children: undefined,
    onSelect: undefined,
    dataTestId: '',
    toggle: {
        badge: undefined,
        avatar: undefined,
        disabled: false,
    },
    items: [],
};
