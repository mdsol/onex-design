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

// eslint-disable-next-line import/prefer-default-export
export const config = {
  data: {
    components: [
      {
        name: 'Avatar',
        componentName: 'Avatar',
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
        name: 'Tabs',
        componentName: 'Tabs',
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
    ],
  },
};
