import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
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

const FilterToggle = ({ eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log('totally custom!'));

  return (
    <Button
      type="icon"
      size="sm"
      variant="tertiary"
      className="onex-data-grid-control__actions-elem"
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
    hasFilters,
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
    dataGridBulkActionsProps,
    handleFilter,
    ...accProps
  } = props;

  const dataGridControlsClasses = classNames('onex-data-grid-control', {
    [className]: className,
    draggable: isDraggeble,
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
    <Accordion>
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
          {!!filters.length && <FilterToggle eventKey="0" />}
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
        <DataGridFilters filters={filters} handleFilter={handleFilter} />
      </Accordion.Collapse>
    </Accordion>
  );
};

FilterToggle.propTypes = {
  eventKey: PropTypes.string,
};

FilterToggle.defaultProps = {
  eventKey: undefined,
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
  primaryAction: undefined,
  primaryActionText: 'Primary',
  secondaryActions: [],
  isDraggeble: false,
  className: undefined,
  dataTestId: undefined,
  handleFilter: undefined,
};

export default DataGridControl;
