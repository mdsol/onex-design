import PropTypes from 'prop-types';

// TO DO: add types for filters when filters component will be ready
const DataGridFiltersTypes = PropTypes.arrayOf(PropTypes.string);

const DataGridDropdownTypes = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hasDividerAfter: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    href: PropTypes.string,
  }),
);

const DataGridControlTypes = PropTypes.shape({
  title: PropTypes.string,
  badge: PropTypes.number,
  hasCustomControlls: PropTypes.bool,
  customControlls: PropTypes.element,
  hasViewOptions: PropTypes.bool,
  hasSearch: PropTypes.bool,
  hasActionBtn: PropTypes.bool,
  hasFilters: PropTypes.bool,
  hasSecondaryActions: PropTypes.bool,
  getTableView: PropTypes.func,
  filters: DataGridFiltersTypes,
  getActiveFilters: PropTypes.func,
  getSearchQuery: PropTypes.func,
  prymaryAction: PropTypes.func,
  prymaryActionText: PropTypes.string,
  secondaryActions: DataGridDropdownTypes,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
});

const actionsType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    action: Function,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    href: PropTypes.string,
  }),
);

const DataGridBulkActionsType = PropTypes.shape({
  selectedRowsCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isAllRowsSelected: PropTypes.bool,
  actions: actionsType,
  dropdownActions: actionsType,
  handleHide: Function,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
});

export { DataGridBulkActionsType, DataGridControlTypes };
