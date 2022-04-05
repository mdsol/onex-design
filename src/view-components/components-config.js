import { PlusCircleFill, PenFill, ExclamationLg } from 'react-bootstrap-icons';
import LockIcon from '@mui/icons-material/Lock';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircle from '@mui/icons-material/CheckCircle';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Badge, ToggleButton } from '../components';

const dropdownItems = [
  { eventKey: 'one', title: 'item one' },
  { eventKey: 'two', title: 'item two' },
  { eventKey: 'three', title: 'item three' },
  { eventKey: 'four', title: 'item four' },
];

const tabsVisibleItems = [
  { eventKey: 'one', title: 'item one' },
  { eventKey: 'two', title: 'item two' },
  { eventKey: 'three', title: 'item three' },
  { eventKey: 'four', title: 'item four' },
];

const tabsHiddenItems = [{ eventKey: 'five', title: 'item five' }];

// eslint-disable-next-line import/prefer-default-export
export const config = {
  data: {
    components: [
      {
        name: 'Avatar',
        componentName: 'Avatar',
        styledComponentName: 'Avatar',
        additionalComponents: [],
        variants: [
          {
            name: 'Test User',
          },
          {
            children: 'KK',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'xs',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'sm',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'md',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'lg',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'xl',
          },
          {
            src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
            size: 'xxl',
          },
        ],
      },
      {
        name: 'Badge',
        componentName: 'Badge',
        styledComponentName: 'Badge',
        additionalComponents: [],
        variants: [
          {
            type: 'primary',
            children: '100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'important',
            children: '100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'default',
            children: '100',
          },
          {
            type: 'default-invert',
            children: '100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'removed',
            children: '100-',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'added',
            children: '+100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'primary',
            children: '100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'primary',
            children: '100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'primary',
            children: '100',
            iconStart: <FlagIcon />,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'primary',
            children: '100',
            className: 'custom-badge',
            iconEnd: <ArrowDownwardIcon />,
            dataTestId: 'text-badge-id',
          },
          {
            type: 'default',
            children: 'default',
            variant: 'status',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'info',
            children: 'information',
            variant: 'status',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'warning',
            children: 'warning',
            variant: 'status',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'important',
            children: 'alert',
            variant: 'status',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'success',
            children: 'success',
            variant: 'status',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'default',
            children: 'default',
            variant: 'status-bold',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'info',
            children: 'information',
            variant: 'status-bold',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'warning',
            children: 'warning',
            variant: 'status-bold',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'important',
            children: 'alert',
            variant: 'status-bold',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'success',
            children: 'success',
            variant: 'status-bold',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'default',
            children: <LockIcon />,
            variant: 'status-icon',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'info',
            children: <InfoIcon />,
            variant: 'status-icon',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'warning',
            children: <WarningIcon />,
            variant: 'status-icon',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'important',
            children: <ErrorIcon />,
            variant: 'status-icon',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'success',
            children: <CheckCircle />,
            variant: 'status-icon',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
        ],
      },
      {
        name: 'Button',
        componentName: 'Buttons',
        styledComponentName: 'Buttons',
        additionalComponents: [],
        variants: [
          {
            variant: 'primary',
            size: 'sm',
            children: 'Small button',
          },
          {
            variant: 'primary',
            size: 'lg',
            children: 'Large button',
          },
          {
            variant: 'primary',
            children: 'Primary button',
          },
          {
            variant: 'secondary',
            children: 'Secondary button',
          },
          {
            variant: 'link',
            children: 'Link button',
          },
          {
            variant: 'primary',
            children: (
              <>
                <PlusCircleFill />
                <span> Primary button with icon </span>
              </>
            ),
          },
          {
            variant: 'secondary',
            children: (
              <>
                <PlusCircleFill />
                <span> Secondary button with icon </span>
              </>
            ),
          },
          {
            variant: 'link',
            children: (
              <>
                <PlusCircleFill />
                <span> Link button with icon </span>
              </>
            ),
          },
          {
            variant: 'primary',
            disabled: true,
            children: 'Disabled button',
          },
          {
            variant: 'primary',
            children: <PlusCircleFill />,
          },
          {
            variant: 'secondary',
            children: <PlusCircleFill />,
          },
          {
            variant: 'link',
            children: <PlusCircleFill />,
          },
        ],
      },
      {
        name: 'Check',
        componentName: 'Check',
        styledComponentName: 'Check',
        additionalComponents: [],
        variants: [
          {
            checked: false,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            checked: false,
            disabled: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            checked: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
            children: 'Label',
          },
          {
            checked: true,
            disabled: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
            children: 'Label',
          },
          {
            indeterminate: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            indeterminate: true,
            disabled: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'radio',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'radio',
            disabled: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            checked: true,
            type: 'radio',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
            children: 'Label',
          },
          {
            checked: true,
            disabled: true,
            type: 'radio',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
            children: 'Label',
          },
        ],
      },
      {
        name: 'Dropdown',
        componentName: 'Dropdown',
        styledComponentName: 'Dropdown',
        additionalComponents: [],
        variants: [
          {
            title: 'Label',
            id: 'small-dropdown',
            items: dropdownItems,
            size: 'sm',
          },
          {
            title: 'Label',
            id: 'small-dropdown-disabled',
            items: dropdownItems,
            size: 'sm',
            disabled: true,
          },
          {
            title: 'Label',
            id: 'large-dropdown',
            items: dropdownItems,
            size: 'md',
          },
          {
            title: 'Label',
            id: 'large-dropdown-disabled',
            items: dropdownItems,
            size: 'md',
            disabled: true,
          },
          {
            variant: 'secondary',
            title: 'Label',
            id: 'secondary-dropdown',
            items: dropdownItems,
            size: 'sm',
          },
          {
            variant: 'secondary',
            title: 'Label',
            id: 'secondary-dropdown-disabled',
            items: dropdownItems,
            size: 'sm',
            disabled: true,
          },
          {
            variant: 'secondary',
            title: 'Label',
            id: 'secondary-dropdown',
            items: dropdownItems,
            size: 'md',
          },
          {
            variant: 'secondary',
            title: 'Label',
            id: 'secondary-dropdown-disabled',
            items: dropdownItems,
            size: 'md',
            disabled: true,
          },
          {
            variant: 'tertiary',
            title: 'Label',
            id: 'tertiary-dropdown',
            items: dropdownItems,
            size: 'sm',
          },
          {
            variant: 'tertiary',
            title: 'Label',
            id: 'tertiary-dropdown-disabled',
            items: dropdownItems,
            size: 'sm',
            disabled: true,
          },
          {
            variant: 'tertiary',
            title: 'Label',
            id: 'tertiary-dropdown',
            items: dropdownItems,
            size: 'md',
          },
          {
            variant: 'tertiary',
            title: 'Label',
            id: 'tertiary-dropdown-disabled',
            items: dropdownItems,
            size: 'md',
            disabled: true,
          },
          {
            variant: 'secondary',
            id: 'secondary-default-icon-dropdown-sm',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
          },
          {
            variant: 'secondary',
            id: 'secondary-default-icon-dropdown-sm-disabled',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
            disabled: true,
          },
          {
            variant: 'secondary',
            id: 'secondary-default-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
          },
          {
            variant: 'secondary',
            id: 'secondary-default-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            disabled: true,
          },
          {
            variant: 'secondary',
            id: 'secondary-icon-dropdown-sm',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
            title: <MoreVertIcon />,
          },
          {
            variant: 'secondary',
            id: 'secondary-icon-dropdown-sm',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
            title: <MoreVertIcon />,
            disabled: true,
          },
          {
            variant: 'secondary',
            id: 'secondary-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            title: <MoreVertIcon />,
          },
          {
            variant: 'secondary',
            id: 'secondary-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            disabled: true,
            title: <MoreVertIcon />,
          },
          {
            variant: 'tertiary',
            id: 'tertiary-default-icon-dropdown-sm',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
          },
          {
            variant: 'tertiary',
            id: 'tertiary-default-icon-dropdown-sm-disabled',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
            disabled: true,
          },
          {
            variant: 'tertiary',
            id: 'tertiary-default-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
          },
          {
            variant: 'tertiary',
            id: 'tertiary-default-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            disabled: true,
          },
          {
            variant: 'tertiary',
            id: 'tertiary-icon-dropdown-sm',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
            title: <MoreVertIcon />,
          },
          {
            variant: 'tertiary',
            id: 'tertiary-icon-dropdown-sm',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
            title: <MoreVertIcon />,
            disabled: true,
          },
          {
            variant: 'tertiary',
            id: 'tertiary-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            title: <MoreVertIcon />,
          },
          {
            variant: 'tertiary',
            id: 'tertiary-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            disabled: true,
            title: <MoreVertIcon />,
          },
        ],
      },
      {
        name: 'ExpansionPanel',
        componentName: 'ExpansionPanel',
        styledComponentName: 'ExpansionPanel',
        additionalComponents: ['Avatar'],
        variants: [
          {
            id: 'exp-panel-avatar-id',
            toggle: {
              badge: '100',
              avatar: (
                <Avatar
                  src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                  size="md"
                  hoverDisabled
                />
              ),
            },
            children: 'Title',
            items: dropdownItems,
          },
        ],
      },
      {
        name: 'InlineEditSelect',
        componentName: 'InlineEditSelect',
        styledComponentName: 'InlineEditSelect',
        additionalComponents: [],
        variants: [
          {
            size: 'sm',
            className: 'select',
            dataTestId: 'select',
            selectOptions: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ],
            isMulti: true,
            selectedOptions: [],
            onActive: true,
          },
          {
            size: 'lg',
            className: 'select',
            dataTestId: 'select',
            selectOptions: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ],
            isMulti: true,
            selectedOptions: [],
          },
        ],
      },
      {
        name: 'InlineEditText',
        componentName: 'InlineEditText',
        styledComponentName: 'InlineEditText',
        additionalComponents: [],
        variants: [
          {
            size: 'sm',
            className: 'inlineEditText',
            dataTestId: 'inlineEditText',
            placeholder: 'Edit',
            onActive: true,
          },
          {
            size: 'lg',
            className: 'inlineEditText',
            dataTestId: 'inlineEditText',
            placeholder: 'Edit',
          },
        ],
      },
      {
        name: 'Lozenge',
        componentName: 'Lozenge',
        styledComponentName: 'Lozenge',
        additionalComponents: [],
        variants: [
          {
            variant: 'subtle',
            type: 'success',
            size: 'lg',
            children: 'Success',
          },
          {
            variant: 'bold',
            type: 'success',
            size: 'lg',
            children: 'Success',
          },
          {
            variant: 'icon',
            type: 'success',
            icon: <PlusCircleFill />,
            size: 'lg',
            children: 'Success',
          },
          {
            variant: 'subtle',
            type: 'warning',
            size: 'lg',
            children: 'Warning',
          },
          {
            variant: 'bold',
            type: 'warning',
            size: 'lg',
            children: 'Warning',
          },
          {
            variant: 'icon',
            type: 'warning',
            icon: <PlusCircleFill />,
            size: 'lg',
            children: 'Warning',
          },
          {
            variant: 'subtle',
            type: 'error',
            size: 'lg',
            children: 'Error',
          },
          {
            variant: 'bold',
            type: 'error',
            size: 'lg',
            children: 'Error',
          },
          {
            variant: 'icon',
            type: 'error',
            icon: <PlusCircleFill />,
            size: 'lg',
            children: 'Error',
          },
          {
            variant: 'subtle',
            type: 'info',
            size: 'lg',
            children: 'Info',
          },
          {
            variant: 'bold',
            type: 'info',
            size: 'lg',
            children: 'Info',
          },
          {
            variant: 'icon',
            type: 'info',
            icon: <PlusCircleFill />,
            size: 'lg',
            children: 'Info',
          },
        ],
      },
      {
        name: 'MenuItem',
        componentName: 'MenuItem',
        styledComponentName: 'MenuItem',
        additionalComponents: ['Badge'],
        variants: [
          {
            children: 'Option',
            path: '',
            onSelect: undefined,
            disabled: false,
            leadingIcon: undefined,
            trailingIcon: undefined,
            badge: undefined,
            unavailable: false,
          },
          {
            children: 'Option',
            path: '',
            onSelect: undefined,
            disabled: false,
            leadingIcon: <PenFill />,
            trailingIcon: undefined,
            badge: undefined,
            unavailable: false,
          },
          {
            children: 'Option',
            path: '',
            onSelect: undefined,
            disabled: false,
            leadingIcon: <PenFill />,
            trailingIcon: <ExclamationLg />,
            badge: undefined,
            unavailable: false,
            isSelected: true,
          },
          {
            children: 'Option',
            path: '',
            onSelect: undefined,
            disabled: false,
            leadingIcon: <PenFill />,
            badge: <Badge type="important">100</Badge>,
            unavailable: false,
            isSelected: true,
          },
        ],
      },
      {
        name: 'Navigation',
        componentName: 'Navigation',
        styledComponentName: 'Navigation',
        additionalComponents: [],
        variants: [
          {
            id: 'custom-navigation',
            visibleItems: tabsVisibleItems,
            hiddenItems: tabsHiddenItems,
            defaultActiveKey: 'three',
          },
        ],
      },
      {
        name: 'Pagination',
        componentName: 'Pagination',
        styledComponentName: 'Pagination',
        additionalComponents: [],
        variants: [
          {
            size: 'sm',
            className: 'pagination',
            dataTestId: 'pagination-id',
            items: [1, 2, 3, 4, 5],
          },
          {
            size: 'lg',
            className: 'pagination',
            dataTestId: 'pagination',
            items: [1, 2, 3, 4, 5],
          },
        ],
      },
      {
        name: 'Select',
        componentName: 'Select',
        styledComponentName: 'Select',
        additionalComponents: [],
        variants: [
          {
            size: 'sm',
            className: 'select',
            dataTestId: 'select',
            options: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ],
            isMulti: true,
          },
          {
            size: 'sm',
            className: 'select',
            dataTestId: 'select',
            options: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ],
            selectedValues: [{ value: 'chocolate', label: 'Chocolate' }],
            isMulti: true,
          },
          {
            size: 'lg',
            className: 'select',
            dataTestId: 'select',
            options: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ],
            selectedValues: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
            ],
            isMulti: true,
          },
        ],
      },
      {
        name: 'Switch',
        componentName: 'Switch',
        styledComponentName: 'Switch',
        additionalComponents: [],
        variants: [
          {
            id: 'custom-default-switch',
          },
          {
            id: 'custom-checked-switch',
            checked: true,
          },
          {
            id: 'custom-disabled-switch',
            disabled: true,
          },
          {
            id: 'custom-checked-disabled-switch',
            checked: true,
            disabled: true,
          },
          {
            id: 'custom-checked-switch',
            checked: true,
            label: 'Test',
          },
        ],
      },
      {
        name: 'TablePagination',
        componentName: 'TablePagination',
        styledComponentName: 'TablePagination',
        additionalComponents: [],
        variants: [
          {
            size: 'sm',
            className: 'tablePagination',
            dataTestId: 'tablePagination-id',
            rowsDividers: [5, 10, 20, 25, 50],
            defaultRowsPerPage: 10,
            rows: 100,
          },
          {
            size: 'lg',
            className: 'tablePagination',
            dataTestId: 'tablePagination',
            rowsDividers: [5, 10, 20, 25, 50],
            defaultRowsPerPage: 10,
            rows: 100,
          },
        ],
      },
      {
        name: 'Table',
        componentName: 'TableOnex',
        styledComponentName: 'TableStyled',
        additionalComponents: [],
      },
      {
        name: 'Tabs',
        componentName: 'Tabs',
        styledComponentName: 'Tabs',
        additionalComponents: [],
        variants: [
          {
            visibleItems: tabsVisibleItems,
            hiddenItems: tabsHiddenItems,
            size: 'sm',
          },
          {
            visibleItems: tabsVisibleItems,
            hiddenItems: tabsHiddenItems,
            size: 'lg',
          },
        ],
      },
      {
        name: 'Tag',
        componentName: 'Tag',
        styledComponentName: 'Tag',
        additionalComponents: ['Avatar'],
        variants: [
          {
            className: 'text',
            dataTestId: 'text',
            children: 'Tag label',
            isRemovable: false,
          },
          {
            className: 'text',
            dataTestId: 'text',
            children: 'Tag label',
            isRemovable: false,
            disabled: true,
          },
          {
            className: 'text',
            dataTestId: 'text',
            isRemovable: true,
            children: 'Tag label',
          },
          {
            className: 'text',
            dataTestId: 'text',
            isRemovable: true,
            children: 'Tag label',
            disabled: true,
          },
          {
            className: 'text',
            dataTestId: 'text',
            children: 'Tag label',
            image: {
              icon: (
                <Avatar
                  src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                  size="sm"
                  hoverDisabled
                />
              ),
            },
          },
          {
            className: 'text',
            dataTestId: 'text',
            children: 'Tag label',
            image: {
              icon: (
                <Avatar
                  src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                  size="sm"
                  hoverDisabled
                />
              ),
            },
            disabled: true,
          },
          {
            className: 'text',
            dataTestId: 'text',
            children: 'Tag label',
            image: {
              icon: (
                <Avatar
                  src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                  size="sm"
                  hoverDisabled
                />
              ),
            },
            isRemovable: true,
          },
          {
            className: 'text',
            dataTestId: 'text',
            children: 'Tag label',
            image: {
              icon: (
                <Avatar
                  src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                  size="sm"
                  hoverDisabled
                />
              ),
            },
            isRemovable: true,
            disabled: true,
          },
        ],
      },
      {
        name: 'TextArea',
        componentName: 'TextArea',
        styledComponentName: 'TextArea',
        additionalComponents: [],
        variants: [
          {
            placeholder: 'Empty',
          },
          {
            placeholder: 'Empty',
            isError: true,
          },
          {
            placeholder: 'Empty',
            disabled: true,
          },
          {
            label: 'Label',
            placeholder: 'Empty',
          },
          {
            label: 'Label',
            placeholder: 'Empty',
            isError: true,
          },
          {
            label: 'Label',
            placeholder: 'Empty',
            disabled: true,
          },
          {
            placeholder: 'Empty',
            helpText: 'Help text',
          },
          {
            placeholder: 'Empty',
            isError: true,
            helpText: 'Help text',
          },
          {
            placeholder: 'Empty',
            disabled: true,
            helpText: 'Help text',
          },
          {
            label: 'Label',
            placeholder: 'Empty',
            helpText: 'Help text',
            value: 'Filled',
          },
          {
            label: 'Label',
            placeholder: 'Empty',
            helpText: 'Help text',
            value: 'Filled',
            isError: true,
          },
          {
            label: 'Label',
            placeholder: 'Empty',
            helpText: 'Help text',
            value: 'Filled',
            disabled: true,
          },
        ],
      },
      {
        name: 'TextField',
        componentName: 'TextField',
        styledComponentName: 'TextField',
        additionalComponents: [],
        variants: [
          {
            label: 'Label',
            size: 'sm',
            placeholder: 'Small',
            helpText: 'Help text',
          },
          {
            size: 'sm',
            label: 'Error',
            placeholder: 'Placeholder',
            errorMessage: 'Error message',
            isInvalid: true,
          },
          {
            size: 'sm',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            value: 'Some text value',
          },
          {
            size: 'sm',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            showDefaultIcon: true,
          },
          {
            size: 'sm',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            icon: <FlutterDashIcon />,
          },
          {
            label: 'Label',
            size: 'lg',
            placeholder: 'Large',
            helpText: 'Help text',
          },
          {
            size: 'lg',
            label: 'Error',
            placeholder: 'Placeholder',
            errorMessage: 'Error message',
            isInvalid: true,
          },
          {
            size: 'lg',
            placeholder: 'Disabled',
            disabled: true,
            label: 'Label',
          },
          {
            size: 'lg',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            value: 'Some text value',
          },
          {
            size: 'lg',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            showDefaultIcon: true,
          },
          {
            size: 'lg',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            icon: <FlutterDashIcon />,
          },
        ],
      },
      {
        name: 'Toasts',
        componentName: 'Toasts',
        styledComponentName: 'Toasts',
        additionalComponents: [],
        wrapper: 'banner_wrap',
        variants: [
          {
            id: 'info-toast',
            variant: 'info',
            children: 'Example of an informational banner message. ',
            show: true,
          },
          {
            id: 'success-toast',
            variant: 'success',
            children: 'Example of a success banner message.',
            show: true,
          },
          {
            id: 'warning-toast',
            variant: 'warning',
            children: 'Example of a warning banner message.',
            show: true,
          },
        ],
      },
      {
        name: 'ToggleButton',
        componentName: 'ToggleButton',
        styledComponentName: 'ToggleButton',
        additionalComponents: [],
        variants: [
          {
            id: 'id-toogle-button-default',
            name: 'toogle-button-default',
            children: 'Caption',
            value: 1,
          },
          {
            id: 'id-toogle-button-with-icon',
            name: 'toogle-button-with-icon',
            children: (
              <>
                <ExclamationLg />
                <span> Caption </span>
              </>
            ),
            value: 1,
          },
          {
            id: 'id-toogle-button-icon',
            name: 'toogle-button-icon',
            children: <PlusCircleFill />,
            value: 1,
          },
          {
            disabled: true,
            id: 'id-toogle-button-disabled',
            name: 'toogle-button-disabled',
            children: 'Caption',
            value: 1,
          },
        ],
      },
      {
        name: 'ToggleButtonGroup',
        componentName: 'ToggleButtonGroup',
        styledComponentName: 'ToggleButtonGroup',
        additionalComponents: ['ToggleButton'],
        variants: [
          {
            variant: 'tab',
            size: 'sm',
            name: 'tab-sm',
            typeContent: 'title',
            children: (
              <>
                <ToggleButton id="one" name="one" icon={<PenFill />}>
                  One
                </ToggleButton>
                <ToggleButton id="two" name="two" icon={<PenFill />}>
                  Two
                </ToggleButton>
                <ToggleButton id="three" name="three" icon={<PenFill />}>
                  Three
                </ToggleButton>
              </>
            ),
          },
          {
            variant: 'tab',
            size: 'lg',
            name: 'tab-lg',
            typeContent: 'title',
            children: (
              <>
                <ToggleButton id="one" name="one" icon={<PenFill />}>
                  One
                </ToggleButton>
                <ToggleButton id="two" name="two" icon={<PenFill />}>
                  Two
                </ToggleButton>
                <ToggleButton id="three" name="three" icon={<PenFill />}>
                  Three
                </ToggleButton>
              </>
            ),
          },
          {
            variant: 'button',
            size: 'sm',
            name: 'button-sm',
            typeContent: 'icon',
            children: (
              <>
                <ToggleButton id="one" name="one" icon={<PenFill />}>
                  One
                </ToggleButton>
                <ToggleButton id="two" name="two" icon={<PenFill />}>
                  Two
                </ToggleButton>
                <ToggleButton id="three" name="three" icon={<PenFill />}>
                  Three
                </ToggleButton>
              </>
            ),
          },
          {
            variant: 'button',
            size: 'lg',
            name: 'button-lg',
            typeContent: 'icon',
            children: (
              <>
                <ToggleButton id="one" name="one" icon={<PenFill />}>
                  One
                </ToggleButton>
                <ToggleButton id="two" name="two" icon={<PenFill />}>
                  Two
                </ToggleButton>
                <ToggleButton id="three" name="three" icon={<PenFill />}>
                  Three
                </ToggleButton>
              </>
            ),
          },
        ],
      },
      {
        name: 'Tooltip',
        componentName: 'Tooltip',
        styledComponentName: 'Tooltip',
        additionalComponents: [],
        variants: [],
      },
      {
        name: 'Typography',
        componentName: 'Typography',
        styledComponentName: 'Typography',
        additionalComponents: [],
        variants: [
          {
            children: 'Headline 1',
            variant: 'h1',
          },
          {
            children: 'Headline 2',
            variant: 'h2',
          },
          {
            children: 'Headline 3',
            variant: 'h3',
          },
          {
            children: 'Headline 4',
            variant: 'h4',
          },
          {
            children: 'Headline 5',
            variant: 'h5',
          },
          {
            children: 'Body',
            variant: 'body',
          },
          {
            children: 'Body SemiBold',
            variant: 'body',
            semiBold: true,
          },
          {
            children: 'Body Link',
            variant: 'h1',
            href: '#',
          },
          {
            children: 'Label',
            variant: 'label',
          },
          {
            children: 'Label SemiBold',
            variant: 'label',
            semiBold: true,
          },
          {
            children: 'Label Link',
            variant: 'label',
            href: '#',
          },
          {
            children: 'Caption',
            variant: 'caption',
          },
          {
            children: 'Caption SemiBold',
            variant: 'caption',
            semiBold: true,
          },
          {
            children: 'Caption Link',
            variant: 'caption',
            href: '#',
          },
          {
            children: 'Caption Uppercase',
            variant: 'caption',
            uppercase: true,
          },
        ],
      },
      {
        name: 'DataGrid',
        componentName: 'DataGrid',
        styledComponentName: 'DataGrid',
        additionalComponents: [],
        variants: [
          {
            type: 'important',
            variant: 'status',
            className: 'data-drid',
            dataTestId: 'data-grid-id',
          },
        ],
      },
    ],
  },
};
