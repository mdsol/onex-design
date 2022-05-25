import Avatar from '../components/Avatar/scss';
import Button from '../components/Buttons/scss';
import ToggleButton from '../components/ToggleButton/scss';
import Icon from '../components/Icon/scss';

const passwordHelpText = {
  strong: 'Strong',
  medium: 'Medium',
  weak: 'Weak',
};

const dropdownItems = [
  { eventKey: 'one', title: 'item one', badge: 100 },
  { eventKey: 'two', title: 'item two' },
  { eventKey: 'three', title: 'item three' },
  { eventKey: 'four', title: 'item four', hasDividerAfter: true },
  { eventKey: 'five', title: 'item five' },
  { eventKey: 'six', title: 'item six' },
  { eventKey: 'seven', title: 'item seven' },
  { eventKey: 'eight', title: 'item eight' },
];

const tabsVisibleItems = [
  { eventKey: 'one', title: 'item one' },
  { eventKey: 'two', title: 'item two' },
  { eventKey: 'three', title: 'item three' },
  { eventKey: 'four', title: 'item four' },
];

const tabsHiddenItems = [
  { eventKey: 'five', title: 'item five' },
  { eventKey: 'six', title: 'item six' },
];

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
            size: 'lg',
          },
          {
            size: 'lg',
            children: <Icon>bug_report</Icon>,
          },
          {
            size: 'md',
          },
          {
            children: <Icon>bug_report</Icon>,
            size: 'md',
          },
          {
            size: 'sm',
          },
          {
            children: <Icon>bug_report</Icon>,
            size: 'sm',
          },
          {
            size: 'xs',
          },
          {
            children: <Icon>bug_report</Icon>,
            size: 'xs',
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
            iconStart: <Icon>flag</Icon>,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'primary',
            children: '100',
            className: 'custom-badge',
            iconEnd: <Icon>flag</Icon>,
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
            iconStart: <Icon>flag</Icon>,
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
            children: <Icon>flag</Icon>,
            variant: 'status-icon',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'info',
            children: <Icon>flag</Icon>,
            variant: 'status-icon',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'warning',
            children: <Icon>flag</Icon>,
            variant: 'status-icon',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'important',
            children: <Icon>flag</Icon>,
            variant: 'status-icon',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'success',
            children: <Icon>flag</Icon>,
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
            disabled: true,
            leadingIcon: <Icon>star</Icon>,
            children: <span>Small disabled button</span>,
          },
          {
            variant: 'primary',
            size: 'md',
            children: 'Middle button',
          },
          {
            variant: 'primary',
            children: 'Primary button',
          },
          {
            variant: 'primary',
            children: <Icon>star</Icon>,
            type: 'icon',
            size: 'md',
          },
          {
            variant: 'primary',
            children: <Icon>star</Icon>,
            type: 'icon',
            size: 'sm',
          },
          {
            variant: 'primary',
            leadingIcon: <Icon>star</Icon>,
            trailingIcon: <Icon>star</Icon>,
            children: <span>Primary button with icon</span>,
          },
          {
            variant: 'primary',
            size: 'md',
            leadingIcon: <Icon>star</Icon>,
            children: <span>Primary button with icon</span>,
          },
          {
            variant: 'secondary',
            size: 'sm',
            disabled: true,
            leadingIcon: <Icon>star</Icon>,
            children: <span>Small disabled button</span>,
          },
          {
            variant: 'secondary',
            size: 'md',
            children: 'Middle button',
          },
          {
            variant: 'secondary',
            children: 'Secondary button',
          },
          {
            variant: 'secondary',
            children: <Icon>star</Icon>,
            type: 'icon',
            size: 'md',
          },
          {
            variant: 'secondary',
            children: <Icon>star</Icon>,
            type: 'icon',
            size: 'sm',
          },
          {
            variant: 'secondary',
            leadingIcon: <Icon>star</Icon>,
            trailingIcon: <Icon>star</Icon>,
            children: <span>Secondary button with icon</span>,
          },
          {
            variant: 'secondary',
            size: 'md',
            leadingIcon: <Icon>star</Icon>,
            children: <span>Secondary button with icon</span>,
          },
          {
            variant: 'tertiary',
            leadingIcon: <Icon>star</Icon>,
            children: <span>Link button with icon</span>,
          },
          {
            variant: 'tertiary',
            size: 'sm',
            disabled: true,
            leadingIcon: <Icon>star</Icon>,
            children: <span>Small disabled button</span>,
          },
          {
            variant: 'tertiary',
            size: 'md',
            children: 'Middle button',
          },
          {
            variant: 'tertiary',
            children: 'Primary button',
          },
          {
            variant: 'tertiary',
            children: <Icon>star</Icon>,
            type: 'icon',
            size: 'md',
          },
          {
            variant: 'tertiary',
            children: <Icon>star</Icon>,
            type: 'icon',
            size: 'sm',
          },
          {
            variant: 'tertiary',
            leadingIcon: <Icon>star</Icon>,
            trailingIcon: <Icon>star</Icon>,
            children: <span>Tertiary button with icon</span>,
          },
          {
            variant: 'tertiary',
            size: 'md',
            leadingIcon: <Icon>star</Icon>,
            children: <span>Tertiary button with icon</span>,
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
            id: 'small-dropdown',
            items: dropdownItems,
            size: 'sm',
            leadingIcon: <Icon>language</Icon>,
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
            id: 'large-dropdown',
            items: dropdownItems,
            size: 'md',
            leadingIcon: <Icon>language</Icon>,
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
            id: 'secondary-dropdown',
            items: dropdownItems,
            size: 'sm',
            leadingIcon: <Icon>language</Icon>,
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
            id: 'secondary-dropdown',
            items: dropdownItems,
            size: 'md',
            leadingIcon: <Icon>language</Icon>,
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
            id: 'tertiary-dropdown',
            items: dropdownItems,
            size: 'sm',
            leadingIcon: <Icon>language</Icon>,
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
            id: 'tertiary-dropdown',
            items: dropdownItems,
            size: 'md',
            leadingIcon: <Icon>language</Icon>,
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
            title: <Icon>more_vert</Icon>,
          },
          {
            variant: 'secondary',
            id: 'secondary-icon-dropdown-sm',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
            title: <Icon>more_vert</Icon>,
            disabled: true,
          },
          {
            variant: 'secondary',
            id: 'secondary-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            title: <Icon>more_vert</Icon>,
          },
          {
            variant: 'secondary',
            id: 'secondary-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            disabled: true,
            title: <Icon>more_vert</Icon>,
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
            title: <Icon>more_vert</Icon>,
          },
          {
            variant: 'tertiary',
            id: 'tertiary-icon-dropdown-sm',
            items: dropdownItems,
            size: 'sm',
            buttonStyle: 'icon',
            title: <Icon>more_vert</Icon>,
            disabled: true,
          },
          {
            variant: 'tertiary',
            id: 'tertiary-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            title: <Icon>more_vert</Icon>,
          },
          {
            variant: 'tertiary',
            id: 'tertiary-icon-dropdown-lg',
            items: dropdownItems,
            size: 'md',
            buttonStyle: 'icon',
            disabled: true,
            title: <Icon>more_vert</Icon>,
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
            leadingIcon: <Icon>edit</Icon>,
            trailingIcon: undefined,
            badge: undefined,
            unavailable: false,
          },
          {
            children: 'Option',
            path: '',
            onSelect: undefined,
            disabled: false,
            leadingIcon: <Icon>edit</Icon>,
            trailingIcon: <Icon>error</Icon>,
            badge: undefined,
            unavailable: false,
            isSelected: true,
          },
          {
            children: 'Option',
            path: '',
            onSelect: undefined,
            disabled: false,
            leadingIcon: <Icon>edit</Icon>,
            badge: 100,
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
            label: 'Select label',
            helpText: 'Some help text',
            options: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ],
            groupedOptions: [
              {
                label: 'Food',
                options: [
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ],
              },
              {
                label: 'Sweet',
                options: [
                  { value: 'chocolate1', label: 'Chocolate' },
                  { value: 'strawberry1', label: 'Strawberry' },
                  { value: 'vanilla1', label: 'Vanilla' },
                ],
              },
            ],
          },
          {
            size: 'md',
            className: 'select',
            dataTestId: 'select',
            options: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ],
          },
          {
            size: 'sm',
            className: 'select',
            dataTestId: 'select',
            label: 'Select label',
            isInvalid: true,
            errorMessage: 'Some help text',
            options: [
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ],
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
            size: 'md',
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
        name: 'Tabs',
        componentName: 'Tabs',
        styledComponentName: 'Tabs',
        additionalComponents: [],
        variants: [
          {
            visibleItems: tabsVisibleItems,
            hiddenItems: tabsHiddenItems,
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
              icon: <Avatar size="xs" hoverDisabled />,
            },
          },
          {
            className: 'text',
            dataTestId: 'text',
            children: 'Tag label',
            image: {
              icon: <Avatar size="xs" hoverDisabled />,
            },
            disabled: true,
          },
          {
            className: 'text',
            dataTestId: 'text',
            children: 'Tag label',
            image: {
              icon: <Avatar size="xs" hoverDisabled />,
            },
            isRemovable: true,
          },
          {
            className: 'text',
            dataTestId: 'text',
            children: 'Tag label',
            image: {
              icon: <Avatar size="xs" hoverDisabled />,
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
            maxNumLength: 10,
            errorMessage: 'Number of characters exceeded',
          },
          {
            label: 'Label',
            placeholder: 'Empty',
            isError: true,
            maxNumLength: -5,
            errorMessage: 'Number of characters exceeded',
          },
          {
            label: 'Label',
            placeholder: 'Empty',
            disabled: true,
            maxNumLength: 240,
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
            type: 'password',
            size: 'sm',
            value: '234556',
            placeholder: 'Small',
            passwordHelpText,
            passwordVariant: 'medium',
          },
          {
            label: 'Label',
            type: 'password',
            size: 'md',
            placeholder: 'Middle',
            value: '234556',
            passwordHelpText,
            passwordVariant: 'strong',
          },
          {
            label: 'Label',
            type: 'password',
            size: 'sm',
            placeholder: 'Small',
            value: '234556',
            passwordHelpText,
            passwordVariant: 'weak',
          },
          {
            label: 'Label',
            type: 'password',
            size: 'sm',
            placeholder: 'Small',
            value: '234556',
            passwordHelpText,
            disabled: true,
            passwordVariant: 'weak',
          },
          {
            label: 'Label',
            type: 'password',
            size: 'sm',
            placeholder: 'Small',
            value: '234556',
            passwordHelpText,
            passwordVariant: 'weak',
            errorMessage: 'Error message',
            isInvalid: true,
          },
          {
            label: 'Label',
            size: 'sm',
            placeholder: 'Small',
            helpText: 'Help text',
          },
          {
            size: 'sm',
            label: 'Error example',
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
            value: 'Some text',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            showDefaultIcon: true,
          },
          {
            size: 'sm',
            placeholder: 'Placeholder',
            label: 'Label',
            icon: <Icon>star</Icon>,
          },
          {
            size: 'sm',
            placeholder: 'Placeholder',
            label: 'Label',
            trailingIcon: <Icon>star</Icon>,
          },
          {
            size: 'sm',
            value: 'Some text',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            showDefaultIcon: true,
            helpText: 'Help text',
            disabled: true,
          },
          {
            label: 'Label',
            size: 'md',
            placeholder: 'Middle',
            helpText: 'Help text',
          },
          {
            size: 'md',
            label: 'Error example',
            placeholder: 'Placeholder',
            errorMessage: 'Error message',
            isInvalid: true,
          },
          {
            size: 'md',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            value: 'Some text value',
          },
          {
            size: 'md',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            showDefaultIcon: true,
          },
          {
            size: 'md',
            value: 'Some text',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            showDefaultIcon: true,
          },
          {
            size: 'md',
            placeholder: 'Placeholder',
            label: 'Label',
            icon: <Icon>star</Icon>,
          },
          {
            size: 'md',
            placeholder: 'Placeholder',
            label: 'Label',
            trailingIcon: <Icon>star</Icon>,
          },
          {
            size: 'md',
            value: 'Some text',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            showDefaultIcon: true,
            helpText: 'Help text',
            disabled: true,
          },
        ],
      },
      {
        name: 'SearchField',
        componentName: 'SearchField',
        styledComponentName: 'SearchField',
        additionalComponents: [],
        variants: [
          {
            size: 'sm',
            placeholder: 'Small',
          },
          {
            size: 'sm',
            value: 'Some text',
            placeholder: 'Placeholder',
            showClearBtn: true,
          },
          {
            size: 'sm',
            disabled: true,
            value: 'some text',
            placeholder: 'Placeholder',
            showClearBtn: true,
          },
          {
            size: 'md',
            placeholder: 'Middle',
          },
          {
            size: 'md',
            placeholder: 'Placeholder',
            showClearBtn: true,
            value: 'Some text value',
          },
          {
            size: 'md',
            disabled: true,
            value: 'some text',
            placeholder: 'Placeholder',
            showClearBtn: true,
          },
        ],
      },
      {
        name: 'Toasts',
        componentName: 'Toasts',
        styledComponentName: 'Toasts',
        additionalComponents: ['Button'],
        wrapper: 'banner_wrap',
        variants: [
          {
            id: 'error-toast-button-text',
            variant: 'error',
            header: 'Error toast example',
            children: (
              <>
                Error toast message.
                <div className="onex-toast-button-group">
                  <Button variant="secondary" onClick={() => console.log('Resend')}>
                    Resend
                  </Button>
                  <Button variant="tertiary" onClick={() => console.log('Discard')}>
                    Discard
                  </Button>
                </div>
              </>
            ),
            show: true,
            position: 'top-start',
          },
          {
            id: 'warning-toast-button-text',
            variant: 'warning',
            header: 'Warning toast example',
            children: (
              <>
                Warning toast message.
                <div className="onex-toast-button-group">
                  <Button variant="secondary" onClick={() => console.log('Resend')}>
                    Resend
                  </Button>
                  <Button variant="tertiary" onClick={() => console.log('Discard')}>
                    Discard
                  </Button>
                </div>
              </>
            ),
            show: true,
            position: 'top-start',
          },
          {
            id: 'info-toast-button-text',
            variant: 'info',
            header: 'Info toast example',
            children: (
              <>
                Info toast message.
                <div className="onex-toast-button-group">
                  <Button variant="secondary" onClick={() => console.log('Resend')}>
                    Resend
                  </Button>
                  <Button variant="tertiary" onClick={() => console.log('Discard')}>
                    Discard
                  </Button>
                </div>
              </>
            ),
            show: true,
            position: 'top-start',
          },
          {
            id: 'success-toast-button-text',
            variant: 'success',
            header: 'Success toast example',
            children: (
              <>
                Success toast message.
                <div className="onex-toast-button-group">
                  <Button variant="secondary" onClick={() => console.log('Resend')}>
                    Resend
                  </Button>
                  <Button variant="tertiary" onClick={() => console.log('Discard')}>
                    Discard
                  </Button>
                </div>
              </>
            ),
            show: true,
            position: 'top-start',
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
            id: 'id-toggle-button-default',
            name: 'toggle-button-default',
            children: 'Caption',
            value: 1,
          },
          {
            id: 'id-toggle-button-with-icon',
            name: 'toggle-button-with-icon',
            children: (
              <>
                <Icon>error</Icon>
                <span> Caption </span>
              </>
            ),
            value: 1,
          },
          {
            id: 'id-toggle-button-icon',
            name: 'toggle-button-icon',
            children: <Icon>add_circle</Icon>,
            value: 1,
          },
          {
            disabled: true,
            id: 'id-toggle-button-disabled',
            name: 'toggle-button-disabled',
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
                <ToggleButton id="one" name="one" icon={<Icon>edit</Icon>}>
                  One
                </ToggleButton>
                <ToggleButton id="two" name="two" icon={<Icon>edit</Icon>}>
                  Two
                </ToggleButton>
                <ToggleButton id="three" name="three" icon={<Icon>edit</Icon>}>
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
                <ToggleButton id="one" name="one" icon={<Icon>edit</Icon>}>
                  One
                </ToggleButton>
                <ToggleButton id="two" name="two" icon={<Icon>edit</Icon>}>
                  Two
                </ToggleButton>
                <ToggleButton id="three" name="three" icon={<Icon>edit</Icon>}>
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
                <ToggleButton id="one" name="one" icon={<Icon>edit</Icon>}>
                  One
                </ToggleButton>
                <ToggleButton id="two" name="two" icon={<Icon>edit</Icon>}>
                  Two
                </ToggleButton>
                <ToggleButton id="three" name="three" icon={<Icon>edit</Icon>}>
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
                <ToggleButton id="one" name="one" icon={<Icon>edit</Icon>}>
                  One
                </ToggleButton>
                <ToggleButton id="two" name="two" icon={<Icon>edit</Icon>}>
                  Two
                </ToggleButton>
                <ToggleButton id="three" name="three" icon={<Icon>edit</Icon>}>
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
        name: 'ProgressBar',
        componentName: 'ProgressBar',
        styledComponentName: 'ProgressBar',
        additionalComponents: [],
        variants: [
          {
            now: 10,
            variant: 'danger',
          },
          {
            now: 100,
            variant: 'success',
          },
          {
            now: 50,
            variant: 'info',
          },
        ],
      },
      {
        name: 'Spinner',
        componentName: 'Spinner',
        styledComponentName: 'Spinner',
        additionalComponents: [],
        variants: [
          {
            size: 'lg',
          },
          {
            size: 'md',
            animation: 'grow',
          },
          {
            size: 'sm',
          },
        ],
      },
      {
        name: 'Offcanvas',
        componentName: 'Offcanvas',
        styledComponentName: 'Offcanvas',
        additionalComponents: [],
        variants: [
          {
            show: true,
            title: 'Title',
            secondaryActionFc: '',
            secondaryActionText: 'Secondary',
          },
        ],
      },
      {
        name: 'Alert',
        componentName: 'Alert',
        styledComponentName: 'Alert',
        additionalComponents: [],
        variants: [
          {
            show: true,
            variant: 'error',
            children: 'subtitle',
            primaryAction: () => {
              console.log('yep');
            },
            primaryText: 'Primary',
          },
          {
            show: true,
            variant: 'success',
            children: 'subtitle',
            primaryAction: () => {
              console.log('yep');
            },
            primaryText: 'Primary',
            secondaryAction: () => {
              console.log('yep');
            },
            secondaryText: 'Secondary',
          },
          {
            show: true,
            variant: 'info',
            children: 'Body text',
          },
          {
            show: true,
            variant: 'warning',
          },
        ],
      },
      {
        name: 'Hint',
        componentName: 'Hint',
        styledComponentName: 'Hint',
        additionalComponents: [],
        variants: () =>
          ['info', 'success', 'error', 'warning'].map((variant) => ({
            variant,
            children: 'Last reforecast was run 01/10/2021, 2:45 PM, by John Doe.',
            dataTestId: 'onex-custom-hint',
          })),
      },
      // {
      //   name: 'DataGrid',
      //   componentName: 'DataGrid',
      //   styledComponentName: 'DataGrid',
      //   additionalComponents: [],
      //   variants: [
      //     {
      //       type: 'important',
      //       variant: 'status',
      //       className: 'data-grid',
      //       dataTestId: 'data-grid-id',
      //     },
      //   ],
      // },
    ],
  },
};
