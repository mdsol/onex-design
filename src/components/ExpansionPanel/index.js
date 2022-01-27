import { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import ExpansionPanelToggle from './components/ExpansionPanelToggle';
import ExpansionPanelItem from './components/ExpansionPanelItem';

const ExpansionPanel = (props) => {
    const { className, id, children, onSelect, dataTestId, disabled, toggle, items } = props;

    const expansionPanelClassNames = classNames('onex-expansionPanel', {
        [className]: className,
    });

    return (
        <Dropdown
            onSelect={onSelect}
            className={expansionPanelClassNames}
            data-test-id={dataTestId}
        >
            <Dropdown.Toggle
                id={id}
                as={ExpansionPanelToggle}
                badge={toggle?.badge}
                avatar={toggle?.avatar}
                disabled={disabled}
            >
                {children}
            </Dropdown.Toggle>
            <Dropdown.Menu renderOnMount flip={false} className="onex-expansionPanel-menu">
                {!!items?.length &&
                    items.map((item) => {
                        const {
                            active,
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
                                    active={active}
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

ExpansionPanel.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    onSelect: Function,
    dataTestId: PropTypes.string,
    disabled: PropTypes.bool,
    toggle: PropTypes.shape({
        badge: PropTypes.string,
        avatar: PropTypes.node,
    }),
    items: PropTypes.arrayOf(
        PropTypes.shape({
            active: PropTypes.bool,
            title: PropTypes.node,
            hasDividerAfter: PropTypes.bool,
            disabled: PropTypes.bool,
            unavailable: PropTypes.bool,
            eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            href: PropTypes.string,
            leadingIcon: PropTypes.node,
            trailingIcon: PropTypes.node,
        }),
    ),
};

ExpansionPanel.defaultProps = {
    className: undefined,
    children: undefined,
    onSelect: undefined,
    dataTestId: '',
    disabled: false,
    toggle: {
        badge: undefined,
        avatar: undefined,
    },
    items: [],
};
