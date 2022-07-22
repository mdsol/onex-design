import classNames from 'classnames';
import { useEffect, useState, useRef } from 'react';
import { DataGridBulkActionsType } from '../../types/dataGridTypes';
import Badge from '../../../../Badge/scss';
import Button from '../../../../Buttons/scss';
import Check from '../../../../Check/scss/index';
import Dropdown from '../../../../Dropdown/scss';

const DataGridBulkActions = ({
  selectedRowsCount,
  isAllRowsSelected,
  actions,
  defaultDropdownActions,
  handleHide,
  className,
  dataTestId,
  ...accProps
}) => {
  const dataGridBulkActions = classNames('onex-data-grid-bulk-actions', {
    [className]: className,
  });

  const [isIndeterminate, setIsIndeterminate] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [visibleActions, setVisibleActions] = useState([...actions]);
  const [hideActions, setHideActions] = useState([...defaultDropdownActions]);
  const parentRef = useRef(null);
  const dropdownRef = useRef(null);
  const biggerElementRef = useRef(null);

  const calcVisibleActionsWidth = (biggerWidth) => {
    const btns = document.querySelectorAll('.action');
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
    const controllBar = document.querySelector('.onex-data-grid-control');
    if (controllBar && window.innerWidth < controllBar.scrollWidth) {
      const diffWidth = controllBar.scrollWidth - window.innerWidth + biggerElementRef.current;
      let width = 0;
      let num = -1;
      const btns = document.querySelectorAll('.action');
      for (let i = btns.length - 1; i >= 0; i - 1) {
        console.log(width, diffWidth);
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
  }, [selectedRowsCount]);

  useEffect(() => {
    setIsIndeterminate(!isAllRowsSelected);
    setIsChecked(isAllRowsSelected);
  }, [isAllRowsSelected]);

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  });

  return (
    <div {...accProps} className={dataGridBulkActions}>
      <Check
        id="bulk-checkbox"
        checked={isChecked}
        indeterminate={isIndeterminate}
        className="onex-data-grid-bulk-actions__checkbox"
        onChange={handleHide}
      />
      <div className="onex-data-grid-bulk-actions__info">
        <span className="label">Selected</span>
        <Badge className="custom-badge" dataTestId="text-badge-id" size="sm" type="primary">
          {selectedRowsCount}
        </Badge>
      </div>
      <div className="onex-data-grid-bulk-actions__actions" ref={parentRef}>
        {visibleActions.length > 0
          ? visibleActions.map((item) => (
              <Button
                onClick={item.action}
                key={item.title}
                size="sm"
                variant="secondary"
                className="action"
              >
                {item.title}
              </Button>
            ))
          : null}
        {!!hideActions.length && (
          <Dropdown
            variant="secondary"
            id="secondary-actions"
            items={hideActions}
            size="sm"
            align="end"
            title={!visibleActions.length ? 'Actions' : 'More'}
            ref={dropdownRef}
          />
        )}
      </div>
    </div>
  );
};

DataGridBulkActions.propTypes = DataGridBulkActionsType;

DataGridBulkActions.defaultProps = {
  selectedRowsCount: 0,
  isAllRowsSelected: false,
  actions: [],
  defaultDropdownActions: [],
  handleHide: undefined,
  className: '',
  dataTestId: '',
};

export default DataGridBulkActions;
