import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Placeholder from 'react-bootstrap/Placeholder';

const ReactNavDropdown = Object.assign(NavDropdown, {
  Item: NavDropdown.Item,
  ItemText: NavDropdown.ItemText,
  Divider: NavDropdown.Divider,
  Header: NavDropdown.Header,
});

const ReactNavbar = Object.assign(Navbar, {
  Brand: Navbar.Brand,
  Collapse: Navbar.Collapse,
  Offcanvas: Navbar.Offcanvas,
  Text: Navbar.Text,
  Toggle: Navbar.Toggle,
});

const ReactPlaceholder = Object.assign(Placeholder, { Button: Placeholder.Button });

// react-bootstrap components
export { default as Accordion } from 'react-bootstrap/Accordion';
export { default as Breadcrumb } from 'react-bootstrap/Breadcrumb';
export { default as ButtonGroup } from 'react-bootstrap/ButtonGroup';
export { default as ButtonToolbar } from 'react-bootstrap/ButtonToolbar';
export { default as Carousel } from 'react-bootstrap/Carousel';
export { default as CloseButton } from 'react-bootstrap/CloseButton';
export { default as Col } from 'react-bootstrap/Col';
export { default as Container } from 'react-bootstrap/Container';
export { default as Figure } from 'react-bootstrap/Figure';
export { default as Image } from 'react-bootstrap/Image';
export { default as ListGroup } from 'react-bootstrap/ListGroup';
export { default as Nav } from 'react-bootstrap/Nav';
export { ReactNavbar as Navbar };
export { ReactNavDropdown as NavDropdown };
export { default as Overlay } from 'react-bootstrap/Overlay';
export { default as OverlayTrigger } from 'react-bootstrap/OverlayTrigger';
export { ReactPlaceholder as Placeholder };
export { default as Popover } from 'react-bootstrap/Popover';
export { default as Row } from 'react-bootstrap/Row';
export { default as Stack } from 'react-bootstrap/Stack';
// 1x components
export { default as Avatar } from './Avatar/scss';
export { default as Badge } from './Badge/scss';
export { default as Button } from './Buttons/scss';
export { default as Card } from './Card/scss';
export { default as Check } from './Check/scss';
export { default as Dropdown } from './Dropdown/scss';
export { default as ExpansionPanel } from './ExpansionPanel/scss';
export { default as InlineEditSelect } from './InlineEditSelect/scss';
export { default as InlineEditText } from './InlineEditText/scss';
export { default as MenuItem } from './MenuItem/scss';
export { default as Navigation } from './Navigation/scss';
export { default as Pagination } from './Pagination/scss';
export { default as Select } from './Select/scss';
export { default as Switch } from './Switch/scss';
export { default as Table } from './Tables/scss/components/Table';
export { default as TableHead } from './Tables/scss/components/TableHead';
export { default as TableBody } from './Tables/scss/components/TableBody';
export { default as TableRow } from './Tables/scss/components/TableRow';
export { default as TableCell } from './Tables/scss/components/TableCell';
export { default as DataTableCell } from './Tables/scss/components/DataTableCell';
export { default as TableControl } from './Tables/scss/components/TableControls';
export { default as TableName } from './Tables/scss/components/TableName';
export { default as TablePagination } from './TablePagination/scss';
export { default as Tabs } from './Tabs/scss';
export { default as Tag } from './Tag/scss';
export { default as TextArea } from './TextArea/scss';
export { default as TextField } from './TextField/scss';
export { default as SearchField } from './SearchField/scss';
export { default as Toast } from './Toasts/scss';
export { default as ToggleButton } from './ToggleButton/scss';
export { default as ToggleButtonGroup } from './ToggleButtonGroup/scss';
export { default as Tooltip } from './Tooltip/scss';
export { default as Typography } from './Typography/scss';
export { default as DataGrid } from './DataGrid/scss/components/DataGrid';
export { default as DataGridControl } from './DataGrid/scss/components/DataGridControl';
export { default as DataGridBulkActions } from './DataGrid/scss/components/DataGridBulkActions';
export { default as DataGridName } from './DataGrid/scss/components/DataGridName';
export { default as Modal } from './Modal/scss';
export { default as ProgressBar } from './ProgressBar/scss';
export { default as Spinner } from './Spinner/scss';
export { default as Offcanvas } from './Offcanvas/scss';
export { default as Alert } from './Alert/scss';
export { default as Icon } from './Icon/scss';
export { default as Hint } from './Hint/scss';
export { default as Banner } from './Banner/scss';
export { default as Link } from './Link/scss';
export { default as DatePicker } from './DatePicker/scss';
export { default as SegmentedToggle } from './SegmentedToggle/scss';
export { default as InlineAlert } from './InlineAlert/scss';
export { default as Dropzone } from './Dropzone/scss';
export { default as EmptyState } from './EmptyState/scss';
export { default as FilterSelect } from './FilterSelect/scss';
// 1x styled components
// export { default as StyledAvatar } from './Avatar/styled';
// export { default as StyledIcon } from './Icon/styled';
// export { default as StyledBadge } from './Badge/styled';
// export { default as StyledButton } from './Buttons/styled';
// export { default as StyledCheck } from './Check/styled';
// export { default as StyledDropdown } from './Dropdown/styled';
// export { default as StyledExpansionPanel } from './ExpansionPanel/styled';
// export { default as StyledInlineEditSelect } from './InlineEditSelect/styled';
// export { default as StyledInlineEditText } from './InlineEditText/styled';
// export { default as StyledMenuItem } from './MenuItem/styled';
// export { default as StyledNavigation } from './Navigation/styled';
// export { default as StyledPagination } from './Pagination/styled';
// export { default as StyledSelect } from './Select/styled';
// export { default as StyledSwitch } from './Switch/styled';
// export { default as StyledTable } from './Tables/styled/components/table';
// export { default as StyledTableHead } from './Tables/styled/components/tableHead';
// export { default as StyledTableBody } from './Tables/styled/components/tableBody';
// export { default as StyledTableRow } from './Tables/styled/components/tableRow';
// export { default as StyledTableCell } from './Tables/styled/components/tableCell';
// export { default as StyledDataTableCell } from './Tables/styled/components/dataTableCell';
// export { default as StyledTableControl } from './Tables/styled/components/tableControl';
// export { default as StyledTableName } from './Tables/styled/components/tableName';
// export { default as StyledTablePagination } from './TablePagination/styled';
// export { default as StyledTabs } from './Tabs/styled';
// export { default as StyledTag } from './Tag/styled';
// export { default as StyledTextArea } from './TextArea/styled';
// export { default as StyledTextField } from './TextField/styled';
// export { default as StyledSearchField } from './SearchField/styled';
// export { default as StyledToasts } from './Toasts/styled';
// export { default as StyledToggleButton } from './ToggleButton/styled';
// export { default as StyledToggleButtonGroup } from './ToggleButtonGroup/styled';
// export { default as StyledTooltip } from './Tooltip/styled';
// export { default as StyledTypography } from './Typography/styled';
// export { default as StyledModal } from './Modal/styled';
// export { default as StyledProgressBar } from './ProgressBar/styled';
// export { default as StyledCard } from './Card/styled';
// export { default as StyledHint } from './Hint/styled';
// export { default as StyledBanner } from './Banner/styled';
// export { default as StyledLink } from './Link/styled';
// export { default as StyledDatePicker } from './DatePicker/styled';
// export { default as StyledSegmentedToggle } from './SegmentedToggle/styled';
// export { default as StyledDataGrid } from './DataGrid/styled/components/dataGrid';
// export { default as StyledDataGridControl } from './DataGrid/styled/components/dataGridControl';
// export { default as StyledDataGridName } from './DataGrid/styled/components/dataGridName';
// export { default as StyledInlineAlert } from './InlineAlert/styled';
