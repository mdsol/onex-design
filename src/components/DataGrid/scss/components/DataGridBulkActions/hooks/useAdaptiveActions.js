import { useEffect, useState, useRef, forwardRef } from 'react';

const useAdaptiveActions = forwardRef(
  (
    actions,
    defaultDropdownActions,
    actionsQuerryClassName,
    wrapperQuerryClassName,
    parentRef,
    dropdownRef,
    updateValue,
  ) => {
    const [visibleActions, setVisibleActions] = useState([...actions]);
    const [hideActions, setHideActions] = useState([...defaultDropdownActions]);
    const biggerElementRef = useRef(null);

    const calcVisibleActionsWidth = (biggerWidth) => {
      const btns = document.querySelectorAll(actionsQuerryClassName);
      let width = 8;
      if (dropdownRef.current) {
        width += dropdownRef.current.clientWidth;
      }
      if (biggerWidth) {
        btns?.forEach((item) => {
          if (item.clientWidth > width) width = item.clientWidth;
        });
      } else {
        btns?.forEach((item) => {
          width += item.clientWidth + 8;
        });
      }
      return width;
    };

    const toggleItems = (calcParentWidth, calcElementsWidth) => {
      if (
        calcParentWidth - calcElementsWidth() >= biggerElementRef.current ||
        calcParentWidth - calcElementsWidth() <= -5
      ) {
        if (calcParentWidth < calcElementsWidth() && visibleActions.length > 0) {
          setHideActions(() => [...hideActions, visibleActions[visibleActions.length - 1]]);
          setVisibleActions(() => [...visibleActions.slice(0, visibleActions.length - 1)]);
        } else if (
          calcParentWidth > calcElementsWidth() &&
          defaultDropdownActions.length < hideActions.length
        ) {
          setHideActions(() => [...hideActions.slice(0, hideActions.length - 1)]);
          setVisibleActions(() => [...visibleActions, hideActions[hideActions.length - 1]]);
        }
      }
    };

    const updateSize = () => toggleItems(parentRef.current.clientWidth, calcVisibleActionsWidth);

    useEffect(() => {
      if (!biggerElementRef.current) biggerElementRef.current = calcVisibleActionsWidth(true);
      const controllBar = document.querySelector(wrapperQuerryClassName);
      if (window.innerWidth < controllBar.scrollWidth) {
        const diffWidth = controllBar.scrollWidth - window.innerWidth + biggerElementRef.current;
        let width = 0;
        let num = -1;
        const btns = document.querySelectorAll(actionsQuerryClassName);
        for (let i = btns.length - 1; i >= 0; i - 1) {
          if (width <= diffWidth) {
            width += btns[i].clientWidth;
          } else {
            num = btns.length - i;
            break;
          }
        }
        if (visibleActions.length - num > 1) {
          setHideActions(() => [
            ...hideActions,
            ...visibleActions.slice([visibleActions.length - 1 - num]).reverse(),
          ]);
          setVisibleActions(() => [...visibleActions.slice(0, visibleActions.length - 1 - num)]);
        } else {
          setHideActions(() => [...hideActions, ...visibleActions.reverse()]);
          setVisibleActions(() => []);
        }
      }
    }, [updateValue]);

    useEffect(() => {
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    });

    return { visibleActions, hideActions };
  },
);

export default useAdaptiveActions;
