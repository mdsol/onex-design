import classNames from 'classnames';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

const Tabs = (props) => {
  const {
    className,
    activeKey,
    defaultActiveKey,
    onSelect,
    visibleItems,
    hiddenItems,
    dropdownTitle,
    isAdaptiveWidth,
    size,
    dataTestIdDropdown,
    dataTestId,
  } = props;

  const tabsGroupClassNames = classNames('onex-tab', `onex-tab--size-${size}`, {
    [className]: className,
  });

  return (
    <Navigation
      className={tabsGroupClassNames}
      activeKey={activeKey}
      defaultActiveKey={defaultActiveKey}
      onSelect={onSelect}
      visibleItems={visibleItems}
      hiddenItems={hiddenItems}
      dropdownTitle={dropdownTitle}
      isAdaptiveWidth={isAdaptiveWidth}
      dataTestItDropdown={dataTestIdDropdown}
      dataTestId={dataTestId}
    />
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

Tabs.propTypes = {
  className: PropTypes.string,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['sm', 'lg']),
  onSelect: Function,
  visibleItems: propItemType,
  hiddenItems: propItemType,
  dropdownTitle: PropTypes.string,
  isAdaptiveWidth: PropTypes.bool,
  dataTestIdDropdown: PropTypes.string,
  dataTestId: PropTypes.string,
};

Tabs.defaultProps = {
  className: undefined,
  activeKey: undefined,
  defaultActiveKey: undefined,
  onSelect: undefined,
  size: 'sm',
  visibleItems: [],
  hiddenItems: [],
  dropdownTitle: 'More',
  isAdaptiveWidth: false,
  dataTestId: undefined,
  dataTestIdDropdown: undefined,
};

export default Tabs;
