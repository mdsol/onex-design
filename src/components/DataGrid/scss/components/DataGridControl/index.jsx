import classNames from 'classnames';
import { useEffect, useState } from 'react';
import SegmentedToggle from '../../../../SegmentedToggle/scss';
import SearchField from '../../../../SearchField/scss';
import Button from '../../../../Buttons/scss';
import Icon from '../../../../Icon/scss';
import Dropdown from '../../../../Dropdown/scss';
import DataGridBulkActions from '../DataGridBulkActions/index';
import { DataGridControlTypes } from '../../types/dataGridTypes';
import Check from '../../../../Check/scss';

const ViewTableIcons = [
  {
    value: 'table',
    id: '1',
    name: 'viewTable',
    label: 'view_list',
  },
  {
    value: 'grid',
    id: '2',
    name: 'viewTable',
    label: 'grid_view',
  },
];

const DataGridControl = (props) => {
  const {
    title,
    badge,
    hasCustomControls,
    customControls,
    hasViewOptions,
    hasSearch,
    hasActionBtn,
    hasFilters,
    hasSecondaryActions,
    getTableView,
    filters,
    getActiveFilters,
    getSearchQuery,
    prymaryAction,
    prymaryActionText,
    secondaryActions,
    className,
    dataTestId,
    dataTableBindingProps,
    dataGridBulkActionsProps,
    ...accProps
  } = props;

  const dataGridControlsClasses = classNames('onex-data-grid-control', {
    [className]: className,
  });

  const { hasSelectedRows, isAllRowsSelected, selectedRowIds, handleHeaderCheck } =
    dataTableBindingProps;

  const [selectedRowsCount, setSelectedRowsCount] = useState();

  useEffect(() => {
    if (Object.values(dataTableBindingProps).length) {
      setSelectedRowsCount(Object.values(selectedRowIds).filter((item) => item).length);
    }
  }, [dataTableBindingProps]);

  // useEffect(() => console.log('ctrl', props));

  return (
    <div {...accProps} className={dataGridControlsClasses} data-test-id={dataTestId}>
      {Object.values(dataTableBindingProps).length > 0 &&
        (!hasSelectedRows ? (
          <Check
            id="onex-data-grid-control-check"
            className="onex-data-grid-control__check"
            onClick={handleHeaderCheck}
          />
        ) : (
          <DataGridBulkActions
            {...dataGridBulkActionsProps}
            isAllRowsSelected={isAllRowsSelected}
            selectedRowsCount={selectedRowsCount}
            handleHide={() => handleHeaderCheck()}
          />
        ))}
      <div className="onex-data-grid-control__actions">
        {hasCustomControls && customControls}
        {hasViewOptions && (
          <SegmentedToggle
            onChange={getTableView}
            items={ViewTableIcons}
            variant="icons"
            defaultValue="table"
            groupName="viewTable"
            size="sm"
            className="onex-data-grid-control__actions-elem"
          />
        )}
        {/* TO DO: replace mock component to filters component when it will be ready */}
        {hasFilters && (
          <>
            <Button
              type="icon"
              size="sm"
              variant="tertiary"
              className="onex-data-grid-control__actions-elem"
              onClick={getActiveFilters}
            >
              <Icon>filter_alt</Icon>
            </Button>
            {filters}
          </>
        )}
        {hasSearch && (
          <span className="onex-data-grid-control__actions-search">
            <SearchField onChange={getSearchQuery} placeholder="Search" size="sm" />
          </span>
        )}
        {hasActionBtn && (
          <Button
            size="sm"
            onClick={prymaryAction}
            className="onex-data-grid-control__actions-elem"
          >
            {prymaryActionText}
          </Button>
        )}
        {hasSecondaryActions && (
          <Dropdown
            variant="secondary"
            id="secondary-actions"
            items={secondaryActions}
            size="sm"
            buttonStyle="icon"
            align="end"
          />
        )}
      </div>
    </div>
  );
};

DataGridControl.propTypes = DataGridControlTypes;

DataGridControl.defaultProps = {
  title: '',
  badge: undefined,
  hasCustomControls: false,
  customControls: undefined,
  hasViewOptions: true,
  hasSearch: true,
  hasActionBtn: true,
  hasFilters: false,
  hasSecondaryActions: true,
  getTableView: undefined,
  filters: [],
  getActiveFilters: undefined,
  getSearchQuery: undefined,
  prymaryAction: undefined,
  prymaryActionText: 'Primary',
  secondaryActions: [],
  className: undefined,
  dataTestId: undefined,
};

export default DataGridControl;
