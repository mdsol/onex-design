import { useState, useRef, useLayoutEffect } from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavItem from './components/NavItem';
import NavItemDropdown from './components/NavItemDropdown';
import useAdaptiveNav from './hooks/useAdaptiveNav';

const Navigation = (props) => {
    const {
        className,
        activeKey,
        defaultActiveKey,
        onSelect,
        visibleItems,
        hiddenItems,
        dropdownTitle,
        isAdaptiveWidth,
        dataTestId,
        dataTestIdDropdown,
    } = props;

    const navGroupClassNames = classNames('onex-nav', {
        [className]: className,
    });

    const navRef = useRef(null);
    const dropdownRef = useRef(null);

    const [isActiveDropdownItem, setIsActiveDropdownItem] = useState(null);
    const { dropdownItems, toggleVisibleNavItems } = useAdaptiveNav(hiddenItems, visibleItems);

    const handleSelect = (value) => {
        const isActive = dropdownItems.some((item) => item.eventKey === value);

        setIsActiveDropdownItem(isActive);
        onSelect?.(value);
    };

    // eslint-disable-next-line consistent-return
    useLayoutEffect(() => {
        if (isAdaptiveWidth) {
            const updateSize = toggleVisibleNavItems(navRef.current, dropdownRef.current);

            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }
    }, [isAdaptiveWidth]);

    return (
        <Nav
            ref={navRef}
            className={navGroupClassNames}
            variant="tabs"
            activeKey={activeKey}
            defaultActiveKey={defaultActiveKey}
            onSelect={handleSelect}
            data-test-id={dataTestId}
        >
            {!!visibleItems?.length &&
                visibleItems.map((item) => {
                    const {
                        title: itemTitle,
                        href,
                        eventKey: itemEventKey,
                        disabled: itemDisabled,
                        dataTestId: itemDataTestId,
                    } = item;

                    return (
                        <NavItem
                            id={itemEventKey}
                            eventKey={itemEventKey}
                            disabled={itemDisabled}
                            href={href}
                            dataTestId={itemDataTestId}
                        >
                            {itemTitle}
                        </NavItem>
                    );
                })}
            {dropdownItems.length > 0 && (
                <NavItemDropdown
                    ref={dropdownRef}
                    title={dropdownTitle}
                    eventKey="dropdown"
                    items={dropdownItems}
                    isActive={isActiveDropdownItem}
                    dataTestId={dataTestIdDropdown}
                />
            )}
        </Nav>
    );
};

const propItemType = PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        href: PropTypes.string,
        eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        dataTestId: PropTypes.string,
    }),
);

Navigation.propTypes = {
    className: PropTypes.string,
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: Function,
    visibleItems: propItemType,
    hiddenItems: propItemType,
    dropdownTitle: PropTypes.string,
    isAdaptiveWidth: PropTypes.bool,
    dataTestIdDropdown: PropTypes.string,
    dataTestId: PropTypes.string,
};

Navigation.defaultProps = {
    className: undefined,
    activeKey: undefined,
    defaultActiveKey: undefined,
    onSelect: undefined,
    visibleItems: [],
    hiddenItems: [],
    dropdownTitle: 'More',
    isAdaptiveWidth: false,
    dataTestIdDropdown: undefined,
    dataTestId: undefined,
};

export default Navigation;
