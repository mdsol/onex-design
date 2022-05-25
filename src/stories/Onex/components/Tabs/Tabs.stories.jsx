import { Tabs } from '../../../../components';

export default {
  title: 'Onex/Components/Tabs',
  component: Tabs,
  argTypes: {
    activeKey: {
      description: 'Marks the item with a matching eventKey as active.',
      control: 'text',
    },
    className: {
      description: 'Name of the CSS class',
      control: 'text',
    },
    dataTestId: {
      description: 'Id of the component for testing',
      control: 'text',
    },
    dataTestIdDropdown: {
      description: 'Id of the toggle button for testing',
      control: 'text',
    },
    defaultActiveKey: {
      description: 'Active key by default',
      control: 'text',
    },
    dropdownTitle: {
      description: 'Title of the toggle button',
      control: 'text',
    },
    hiddenItems: {
      description: `Array of menu items for toggle button. Each item contain:
                           \n1.title* - content of menu item;
                           \n2.disabled - disable the menu item, making it unselectable;
                           \n3.eventKey - value passed to the onSelect handler, useful for identifying the selected menu item;
                           \n4.href - HTML href attribute corresponding to a.href;
                           \n5.dataTestId - Id of the item for testing;`,
      table: {
        type: {
          summary: `object`,
          detail: `[{
                    title: string,
                    disabled: bool,
                    eventKey: string | number,
                    href: string,
                    dataTestId: string
                    }]`,
        },
      },
    },
    isAdaptiveWidth: {
      description: 'Determines if visible items should be rendered as dropdown menu',
    },
    onSelect: {
      description: 'A callback fired when a item is selected',
      action: 'select',
    },
    visibleItems: {
      description: `Array of visible menu items. Each item contain:
                           \n1.title* - content of menu item;
                           \n2.disabled - disable the menu item, making it unselectable;
                           \n3.eventKey - value passed to the onSelect handler, useful for identifying the selected menu item;
                           \n4.href - HTML href attribute corresponding to a.href;
                           \n5.dataTestId - Id of the item for testing;`,
      table: {
        type: {
          summary: `object`,
          detail: `[{
                    title: string,
                    disabled: bool,
                    eventKey: string | number,
                    href: string,
                    dataTestId: string
                    }]`,
        },
      },
    },
  },
};

const tabsVisibleItems = [
  { eventKey: 'opt1', title: 'Option 1' },
  { eventKey: 'opt2', title: 'Option 2' },
  { eventKey: 'opt3', title: 'Option 3' },
  { eventKey: 'opt4', title: 'Option 4' },
];

const tabsHiddenItems = [
  { eventKey: 'opt5', title: 'Option 5' },
  { eventKey: 'opt6', title: 'Option 6' },
  { eventKey: 'opt7', title: 'Option 7' },
  { eventKey: 'opt8', title: 'Option 8' },
];

const TabsTemplate = (args) => <Tabs {...args} />;

export const UsingTabs = TabsTemplate.bind({});
UsingTabs.args = {
  visibleItems: tabsVisibleItems,
  hiddenItems: tabsHiddenItems,
};
