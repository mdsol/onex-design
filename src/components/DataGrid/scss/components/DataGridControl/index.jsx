import classNames from 'classnames';
import SegmentedToggle from '../../../../SegmentedToggle/scss';
import SearchField from '../../../../SearchField/scss';
import Button from '../../../../Buttons/scss';
import Icon from '../../../../Icon/scss';
import Dropdown from '../../../../Dropdown/scss';
import Badge from '../../../../Badge/scss';
import DataGridControlTypes from '../../utils/dataGridTypes';

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
  } = props;

  const dataGridControlsClasses = classNames('onex-data-grid-control', {
    [className]: className,
  });

  return (
    <div className={dataGridControlsClasses} data-test-id={dataTestId}>
      <h4 className="onex-data-grid-control-title">
        {title}
        {badge && <Badge type="default">{badge}</Badge>}
      </h4>
      <div className="onex-data-grid-control-actions">
        {hasCustomControls && customControls}
        {hasViewOptions && (
          <SegmentedToggle
            onChange={getTableView}
            items={ViewTableIcons}
            variant="icons"
            defaultValue="table"
            groupName="viewTable"
            size="sm"
            className="onex-data-grid-control-actions-action"
          />
        )}
        {/* TO DO: replace mock component to filters component when it will be ready */}
        {hasFilters && (
          <>
            <Button
              type="icon"
              size="sm"
              variant="tertiary"
              className="onex-data-grid-control-actions-action"
              onClick={getActiveFilters}
            >
              <Icon>filter_alt</Icon>
            </Button>
            {filters}
          </>
        )}
        {hasSearch && (
          <span className="onex-data-grid-control-actions-search">
            <SearchField onChange={getSearchQuery} placeholder="Search" size="sm" />
            <span className="separator" />
          </span>
        )}
        {hasActionBtn && (
          <Button
            size="sm"
            onClick={prymaryAction}
            className="onex-data-grid-control-actions-action"
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
            title="more_vert"
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
  prymaryActionText: 'Prymary',
  secondaryActions: [],
  className: undefined,
  dataTestId: undefined,
};

export default DataGridControl;
