import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { Accordion, AccordionContext } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import PropTypes from 'prop-types';
import SegmentedToggle from '../../../../SegmentedToggle/scss';
import SearchField from '../../../../SearchField/scss';
import Button from '../../../../Buttons/scss';
import Icon from '../../../../Icon/scss';
import Dropdown from '../../../../Dropdown/scss';
import DataGridBulkActions from '../DataGridBulkActions/index';
import DataGridFilters from '../DataGridFilters/index';
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

const FilterToggle = ({ eventKey, callback, isFilterActive }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Button
      type="icon"
      size="sm"
      variant="secondary"
      className={classNames('onex-data-grid-control__actions-elem', {
        'action-active': isCurrentEventKey,
        'filter-active': isFilterActive && !isCurrentEventKey,
      })}
      onClick={decoratedOnClick}
    >
      <Icon>filter_alt</Icon>
    </Button>
  );
};

const DataGridControl = (props) => {
  const {
    title,
    badge,
    hasCustomControls,
    customControls,
    hasViewOptions,
    hasSearch,
    hasActionBtn,
    hasSecondaryActions,
    getTableView,
    filters,
    getActiveFilters,
    getSearchQuery,
    primaryAction,
    primaryActionText,
    secondaryActions,
    isDraggeble,
    className,
    dataTestId,
    dataTableBindingProps,
    isBulkActionsActive,
    dataGridBulkActionsProps,
    filterData,
    setFilterData,
    handleFilter,
    ...accProps
  } = props;

  const dataGridControlsClasses = classNames('onex-data-grid-control', {
    [className]: className,
    draggable: isDraggeble,
  });

  const { hasSelectedRows, isAllRowsSelected, selectedRowIds, handleHeaderCheck } =
    dataTableBindingProps || {};

  const [selectedRowsCount, setSelectedRowsCount] = useState();
  const [additionalFilters, setAdditionalFilters] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    if (dataTableBindingProps && Object.values(dataTableBindingProps).length) {
      setSelectedRowsCount(Object.values(selectedRowIds).filter((item) => item).length);
    }
  }, [dataTableBindingProps]);

  useEffect(() => {
    getActiveFilters?.(filterData);
    const checkActiveFilter =
      filterData && Object.values(filterData).length
        ? !!Object.values(filterData).filter((item) => item).length
        : false;
    setIsFilterActive(checkActiveFilter);
  }, [filterData]);

  const handleSetFilter = (option, id) => {
    const isDefaultFilter = filters.filter((item) => item.id === id && item.defaultFilter).length;
    if (option.length) {
      setFilterData({ ...filterData, [id]: option[0].value });
    } else {
      setFilterData({ ...filterData, [id]: '' });
      if (!isDefaultFilter) {
        setAdditionalFilters(additionalFilters.filter((item) => item.id !== id));
      }
    }
  };

  const handleClearFilters = () => {
    setFilterData(Object.keys(filterData).reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
    setAdditionalFilters([]);
  };

  return (
    <Accordion>
      <div {...accProps} className={dataGridControlsClasses} data-test-id={dataTestId}>
        {dataTableBindingProps &&
          Object.values(dataTableBindingProps).length > 0 &&
          (!hasSelectedRows ? (
            <span>
              {isBulkActionsActive && (
                <Check
                  id="onex-data-grid-control-check"
                  className="onex-data-grid-control__check"
                  onClick={handleHeaderCheck}
                />
              )}
            </span>
          ) : (
            <DataGridBulkActions
              {...dataGridBulkActionsProps}
              isAllRowsSelected={isAllRowsSelected}
              selectedRowsCount={selectedRowsCount}
              handleHide={handleHeaderCheck}
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
          {!!filters.length && <FilterToggle eventKey="0" isFilterActive={isFilterActive} />}
          {hasSearch && (
            <span className="onex-data-grid-control__actions-search">
              <SearchField onChange={getSearchQuery} placeholder="Search" size="sm" />
            </span>
          )}
          {hasActionBtn && (
            <Button
              size="sm"
              onClick={primaryAction}
              className="onex-data-grid-control__actions-elem"
            >
              {primaryActionText}
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
      <Accordion.Collapse eventKey="0">
        <DataGridFilters
          filters={filters}
          handleFilter={handleSetFilter}
          handleClearFilters={handleClearFilters}
          additionalFilters={additionalFilters}
          setAdditionalFilters={setAdditionalFilters}
          filterData={filterData}
        />
      </Accordion.Collapse>
    </Accordion>
  );
};

FilterToggle.propTypes = {
  eventKey: PropTypes.string,
  callback: PropTypes.func,
  isFilterActive: PropTypes.bool,
};

FilterToggle.defaultProps = {
  eventKey: undefined,
  callback: undefined,
  isFilterActive: undefined,
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
  hasSecondaryActions: true,
  getTableView: undefined,
  filters: [],
  getActiveFilters: undefined,
  getSearchQuery: undefined,
  primaryAction: undefined,
  primaryActionText: 'Primary',
  secondaryActions: [],
  isDraggeble: false,
  className: undefined,
  dataTestId: undefined,
  handleFilter: undefined,
};

export default DataGridControl;
