import { PlusCircleFill, ThreeDotsVertical, PenFill, ExclamationLg } from 'react-bootstrap-icons';
import { Avatar, Badge } from '../components';

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

export const toggleButtonItems = [
  {
    id: 'one',
    name: 'one',
    children: 'One',
    icon: <PenFill />,
  },
  {
    id: 'two',
    name: 'two',
    children: 'Two',
    icon: <PenFill />,
  },
  {
    id: 'three',
    name: 'three',
    children: 'Three',
    icon: <PenFill />,
  },
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
            size: 'sm',
            children: '100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'important',
            size: 'sm',
            children: '100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'default',
            size: 'sm',
            children: '100',
          },
          {
            type: 'default-invert',
            size: 'sm',
            children: '100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'removed',
            size: 'sm',
            children: '100-',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'added',
            size: 'sm',
            children: '+100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'primary',
            size: 'sm',
            children: '100',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            type: 'primary',
            size: 'lg',
            children: '100',
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
            size: 'sm',
            checked: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            size: 'lg',
            checked: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            size: 'lg',
            checked: true,
            disabled: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            size: 'lg',
            indeterminate: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            size: 'lg',
            indeterminate: true,
            disabled: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            size: 'sm',
            type: 'radio',
            checked: true,
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            size: 'lg',
            checked: true,
            type: 'radio',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
          },
          {
            size: 'lg',
            checked: true,
            disabled: true,
            type: 'radio',
            className: 'custom-badge',
            dataTestId: 'text-badge-id',
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
            title: 'Small dropdown',
            id: 'small-dropdown',
            items: dropdownItems,
            size: 'sm',
          },
          {
            title: 'Large dropdown',
            id: 'large-dropdown',
            items: dropdownItems,
            size: 'lg',
          },
          {
            title: 'Primary dropdown',
            id: 'primary-dropdown',
            items: dropdownItems,
          },
          {
            variant: 'secondary',
            title: 'Secondary dropdown',
            id: 'secondary-dropdown',
            items: dropdownItems,
          },
          {
            variant: 'link',
            title: 'Tertiary dropdown',
            id: 'tertiary-dropdown',
            items: dropdownItems,
          },
          {
            title: 'Disabled primary dropdown',
            id: 'primary-disabled-dropdown',
            items: dropdownItems,
            disabled: true,
          },
          {
            variant: 'secondary',
            title: 'Disabled secondary dropdown',
            id: 'secondary-disabled-dropdown',
            items: dropdownItems,
            disabled: true,
          },
          {
            variant: 'link',
            title: 'Disabled tertiary dropdown',
            id: 'tertiary-disabled-dropdown',
            items: dropdownItems,
            disabled: true,
          },
          {
            title: <ThreeDotsVertical />,
            id: 'primary-icon-dropdown',
            items: dropdownItems,
            buttonStyle: 'icon',
          },
          {
            variant: 'secondary',
            title: <ThreeDotsVertical />,
            id: 'secondary-icon-dropdown',
            items: dropdownItems,
            buttonStyle: 'icon',
          },
          {
            variant: 'icon-link',
            title: <ThreeDotsVertical />,
            id: 'tertiary-icon-dropdown',
            items: dropdownItems,
            buttonStyle: 'icon',
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
        ],
      },
      {
        name: 'TablePagination',
        componentName: 'TablePagination',
        styledComponentName: 'Switch',
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
        additionalComponents: [],
        variants: [
          {
            className: 'text',
            dataTestId: 'text',
            size: 'sm',
            variant: 'default',
            isRemovable: true,
            children: 'Small',
          },
          {
            className: 'text',
            dataTestId: 'text',
            size: 'lg',
            variant: 'default',
            isRemovable: true,
            children: 'Large',
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
            size: 'sm',
            placeholder: 'Message',
          },
          {
            size: 'lg',
            placeholder: 'Message',
          },
          {
            label: 'Label',
            size: 'lg',
            placeholder: 'Message',
          },
          {
            size: 'lg',
            placeholder: 'Message',
            errorMessage: 'Error message',
            isError: true,
          },
          {
            size: 'sm',
            placeholder: 'Message',
            errorMessage: 'Error message',
            value: 'Some message',
            helpText: 'Help text',
            maxNumLength: 50,
          },
          {
            size: 'sm',
            placeholder: 'Message',
            errorMessage: 'Error message',
            value: 'This attribute indicates whether the value of the control can be automatically',
            helpText: 'Help text',
            maxNumLength: 50,
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
          },
          {
            label: 'Label',
            size: 'lg',
            placeholder: 'Large',
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
            readOnly: true,
            label: 'Label',
            value: 'Read only',
          },
          {
            size: 'lg',
            placeholder: 'Placeholder',
            required: true,
            label: 'Required',
          },
          {
            size: 'lg',
            placeholder: 'Placeholder',
            label: 'Label',
            showClearBtn: true,
            value: 'Placeholder',
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
            icon: <PenFill />,
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
        componentName: 'Toggle/components/ToggleButton',
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
        componentName: 'Toggle/components/ToggleButtonGroup',
        styledComponentName: 'ToggleButtonGroup',
        additionalComponents: [],
        variants: [
          {
            variant: 'tab',
            size: 'sm',
            name: 'tab-sm',
            typeContent: 'title',
            items: toggleButtonItems,
          },
          {
            variant: 'tab',
            size: 'lg',
            name: 'tab-lg',
            typeContent: 'title',
            items: toggleButtonItems,
          },
          {
            variant: 'button',
            size: 'sm',
            name: 'button-sm',
            typeContent: 'icon',
            items: toggleButtonItems,
          },
          {
            variant: 'button',
            size: 'lg',
            name: 'button-lg',
            typeContent: 'icon',
            items: toggleButtonItems,
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
            children: 'Heading 1',
            variant: 'h1',
          },
          {
            children: 'Heading 2',
            variant: 'h2',
          },
          {
            children: 'Heading 3',
            variant: 'h3',
          },
          {
            children: 'Heading 4',
            variant: 'h4',
          },
          {
            children: 'Heading 5',
            variant: 'h5',
          },
          {
            children: 'Body Regular',
            variant: 'body',
            size: 'lg',
          },
          {
            children: 'Body Regular Link',
            variant: 'body',
            size: 'lg',
            href: '#',
          },
          {
            children: 'Body Small',
            variant: 'body',
            size: 'sm',
          },
          {
            children: 'Body Small Link',
            variant: 'body',
            size: 'sm',
            href: '#',
          },
          {
            children: 'Button Regular',
            variant: 'button',
            size: 'lg',
          },
          {
            children: 'Button Small',
            variant: 'button',
            size: 'sm',
          },
          {
            children: 'Caption Regular',
            variant: 'caption',
            size: 'lg',
          },
          {
            children: 'Caption Regular Link',
            variant: 'caption',
            size: 'lg',
            href: '#',
          },
          {
            children: 'Caption Small',
            variant: 'caption',
            size: 'sm',
          },
          {
            children: 'Caption Small Link',
            variant: 'caption',
            size: 'sm',
            href: '#',
          },
        ],
      },
    ],
  },
};
