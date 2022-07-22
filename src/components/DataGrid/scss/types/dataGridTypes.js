import PropTypes from 'prop-types';

const optionType = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});

const groupedOptions = PropTypes.shape({
  label: PropTypes.string,
  options: PropTypes.arrayOf(optionType),
});

const DataGridFiltersTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultFilter: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    selectedValues: PropTypes.arrayOf(optionType),
    options: PropTypes.arrayOf(optionType),
    groupedOptions: PropTypes.arrayOf(groupedOptions),
    size: PropTypes.oneOf(['md', 'sm']),
    onSelect: PropTypes.func,
    isMulti: PropTypes.bool,
    dataTestId: PropTypes.string,
    isAsync: PropTypes.bool,
    onLoadOptions: PropTypes.func,
    getOptionValue: PropTypes.func,
    getOptionLabel: PropTypes.func,
  }),
);

const DataGridDropdownTypes = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
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
  isDraggeble: PropTypes.bool,
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
