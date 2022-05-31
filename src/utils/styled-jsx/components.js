// Tables components were added manually

const classRegexBase = '.[^__]+?[.|\\s]';
const classRegexBootstrap = '[^-]+?[.|\\s]';

module.exports = [
  {
    name: 'Avatar',
    importName: 'Avatar',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'Badge',
    importName: 'Badge',
    replaceUrl: [
      { className: '.onex-', classRegex: classRegexBase },
      { className: '.badge', classRegex: classRegexBase },
    ],
  },
  {
    name: 'Buttons',
    importName: 'Button',
    replaceUrl: [
      { className: '.onex-', classRegex: classRegexBase },
      { className: '.btn', classRegex: classRegexBootstrap },
    ],
  },
  {
    name: 'Check',
    importName: 'Check',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'Dropdown',
    importName: 'Dropdown',
    replaceUrl: [{ className: '.onex-dropdown', classRegex: classRegexBase }],
  },
  {
    name: 'ExpansionPanel',
    importName: 'ExpansionPanel',
    replaceUrl: [{ className: '.onex-expansionPanel', classRegex: classRegexBase }],
  },
  {
    name: 'InlineEditSelect',
    importName: 'InlineEditSelect',
    replaceUrl: [{ className: '.inline-edit-select-wrapper', classRegex: classRegexBase }],
  },
  {
    name: 'InlineEditText',
    importName: 'InlineEditText',
    replaceUrl: [{ className: '.onex-text-field', classRegex: classRegexBase }],
  },
  {
    name: 'MenuItem',
    importName: 'MenuItem',
    replaceUrl: [{ className: '.onex-menuItem', classRegex: classRegexBase }],
  },
  {
    name: 'Modal',
    importName: 'Modal',
    replaceUrl: [
      { className: '.onex-modal', classRegex: classRegexBase },
      { className: '.modal', classRegex: classRegexBootstrap },
      { className: '.fade', classRegex: classRegexBase },
      { className: '.show', classRegex: classRegexBase },
    ],
  },
  {
    name: 'Navigation',
    importName: 'Navigation',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'Pagination',
    importName: 'Pagination',
    replaceUrl: [
      { className: '.onex-', classRegex: classRegexBase },
      { className: '.pagination', classRegex: classRegexBase },
    ],
  },
  {
    name: 'Select',
    importName: 'Select',
    replaceUrl: [{ className: '.onex-select', classRegex: classRegexBase }],
  },
  {
    name: 'Switch',
    importName: 'Switch',
    replaceUrl: [
      { className: '.onex-', classRegex: classRegexBase },
      { className: '.form-switch', classRegex: classRegexBase },
    ],
  },
  {
    name: 'TablePagination',
    importName: 'TablePagination',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'Tabs',
    importName: 'Tabs',
    replaceUrl: [
      { className: '.onex-tab', classRegex: classRegexBase },
      { className: '.onex-nav', classRegex: classRegexBase },
    ],
  },
  {
    name: 'Tag',
    importName: 'Tag',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'TextArea',
    importName: 'TextArea',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'TextField',
    importName: 'TextField',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'SearchField',
    importName: 'SearchField',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'Toasts',
    importName: 'Toast',
    replaceUrl: [
      { className: '.onex-toast', classRegex: classRegexBase },
      { className: '.toast-container', classRegex: classRegexBase },
    ],
  },
  {
    name: 'ToggleButton',
    importName: 'ToggleButton',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'ToggleButtonGroup',
    importName: 'ToggleButtonGroup',
    replaceUrl: [
      { className: '.onex-', classRegex: classRegexBase },
      { className: '.btn-group', classRegex: classRegexBase },
    ],
  },
  {
    name: 'Tooltip',
    importName: 'Tooltip',
    replaceUrl: [
      { className: '.onex-', classRegex: classRegexBase },
      { className: '.tooltip', classRegex: classRegexBootstrap },
      { className: '.popover', classRegex: classRegexBase },
      { className: '.fade', classRegex: classRegexBase },
      { className: '.bs-tooltip', classRegex: classRegexBase },
    ],
  },
  {
    name: 'Typography',
    importName: 'Typography',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'ProgressBar',
    importName: 'ProgressBar',
    replaceUrl: [
      { className: '.onex-progressbar', classRegex: classRegexBase },
      { className: '.onex-progressbar__bg-danger', classRegex: classRegexBase },
      { className: '.progress', classRegex: classRegexBootstrap },
    ],
  },
  {
    name: 'Card',
    importName: 'Card',
    replaceUrl: [
      { className: '.onex-', classRegex: classRegexBase },
      { className: '.card', classRegex: classRegexBootstrap },
    ],
  },
  {
    name: 'Spinner',
    importName: 'Spinner',
    replaceUrl: [{ className: '.onex-', classRegex: classRegexBase }],
  },
  {
    name: 'Offcanvas',
    importName: 'Offcanvas',
    replaceUrl: [
      { className: '.onex-offcanvas', classRegex: classRegexBase },
      { className: '.offcanvas', classRegex: classRegexBootstrap },
      { className: '.offcanvas-end', classRegex: classRegexBootstrap },
      { className: '.fade', classRegex: classRegexBase },
      { className: '.show', classRegex: classRegexBase },
    ],
  },
  {
    name: 'DataGrid',
    importName: 'DataGrid',
    replaceUrl: [{ className: '.onex-dataGrid', classRegex: classRegexBase }],
  },
  {
    name: 'Alert',
    importName: 'Alert',
    replaceUrl: [{ className: '.onex-alert', classRegex: classRegexBase }],
  },
  {
    name: 'Icon',
    importName: 'Icon',
    replaceUrl: [
      { className: '.onex-', classRegex: classRegexBase },
      { className: '.material-icons-round', classRegex: classRegexBase },
    ],
  },
  {
    name: 'Hint',
    importName: 'Hint',
    replaceUrl: [{ className: '.onex-hint', classRegex: classRegexBase }],
  },
  {
    name: 'Banner',
    importName: 'Banner',
    replaceUrl: [{ className: '.onex-banner', classRegex: classRegexBase }],
  },
  {
    name: 'Link',
    importName: 'Link',
    replaceUrl: [{ className: '.onex-link', classRegex: classRegexBase }],
  },
  {
    name: 'DatePicker',
    importName: 'DatePicker',
    replaceUrl: [{ className: '.onex-date-picker-wrapper', classRegex: classRegexBase }],
  },
];
