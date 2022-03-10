import { useState } from 'react';

const getItemsWidth = (itemsElements) =>
  itemsElements.reduce((width, itemElement) => width + itemElement.offsetWidth, 0);

const getElementByEventKey = (domElement, elementsList) => {
  const eventKey = domElement.getAttribute('data-key');

  return elementsList.find((elem) => elem.eventKey === eventKey);
};

const removeClass = (itemsElement, className) => {
  itemsElement.forEach((elem) => {
    elem.classList.remove(className);
  });
};

const useAdaptiveNav = (defaultHiddenItems, defaultVisibleItems) => {
  const [dropdownItems, setDropdownItems] = useState([...defaultHiddenItems]);

  const toggleVisibleNavItems = (navElement, dropdownElement) => () => {
    const visibleNavElements = [...navElement.getElementsByClassName('onex-nav__item')];

    removeClass(visibleNavElements, 'item--hidden');

    const widthElements = getItemsWidth(visibleNavElements);
    const maxWidth = defaultHiddenItems.length
      ? navElement.offsetWidth - dropdownElement.offsetWidth
      : navElement.offsetWidth;

    if (maxWidth < widthElements) {
      let freeSpace = navElement.offsetWidth - dropdownElement.offsetWidth;
      const hiddenNavItems = [];

      visibleNavElements.forEach((elem) => {
        if (freeSpace > elem.offsetWidth) {
          freeSpace -= elem.offsetWidth;
        } else {
          const dropdownItem = getElementByEventKey(elem, defaultVisibleItems);

          elem.classList.add('item--hidden');
          hiddenNavItems.push(dropdownItem);
        }
      });

      setDropdownItems([...hiddenNavItems, ...defaultHiddenItems]);
    }
  };

  return { dropdownItems, toggleVisibleNavItems };
};

export default useAdaptiveNav;
