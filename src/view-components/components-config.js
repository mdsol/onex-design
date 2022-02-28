import { PlusCircleFill, ThreeDotsVertical } from 'react-bootstrap-icons';

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
        name: 'Dropdown',
        componentName: 'Dropdown',
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
        name: 'Lozenge',
        componentName: 'Lozenge',
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
        name: 'Navigation',
        componentName: 'Navigation',
        variants: [
          {
            id: 'custom-navigation',
            visibleItems: tabsVisibleItems,
            hiddenItems: tabsHiddenItems,
            defaultActiveKey: 'three',
          },
        ],
      },
    ],
  },
};
