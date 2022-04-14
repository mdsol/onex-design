import { Navigation } from '../../../../components';

export default {
  title: 'Onex/Components/Navigation',
  component: Navigation,
  argTypes: {
    className: { control: 'text' },
    activeKey: { control: 'text' },
    defaultActiveKey: { control: 'text' },
    dataTestId: { control: 'text' },
    dropdownTitle: { control: 'text' },
    dataTestIdDropdown: { control: 'text' },
  },
};

const tabsVisibleItems = [
  { eventKey: 'one', title: 'item one' },
  { eventKey: 'two', title: 'item two' },
  { eventKey: 'three', title: 'item three' },
  { eventKey: 'four', title: 'item four' },
];

const tabsHiddenItems = [
  { eventKey: 'five', title: 'item five' },
  { eventKey: 'six', title: 'item six' },
  { eventKey: 'seven', title: 'item seven' },
  { eventKey: 'eight', title: 'item eight' },
];

const Template = (props) => <Navigation {...props} />;

export const Default = Template.bind({});

Default.args = {
  id: 'custom-navigation',
  visibleItems: tabsVisibleItems,
  defaultActiveKey: 'three',
};

export const WithMoreDropdown = Template.bind({});

WithMoreDropdown.args = {
  id: 'custom-navigation',
  visibleItems: tabsVisibleItems,
  hiddenItems: tabsHiddenItems,
  defaultActiveKey: 'three',
};

const tabsVisibleItemsDisabled = [
  { eventKey: 'one', title: 'item one' },
  { eventKey: 'two', title: 'item two', disabled: true },
  { eventKey: 'three', title: 'item three' },
  { eventKey: 'four', title: 'item four' },
];

const tabsHiddenItemsDisabled = [
  { eventKey: 'five', title: 'item five', disabled: true },
  { eventKey: 'six', title: 'item six' },
  { eventKey: 'seven', title: 'item seven' },
  { eventKey: 'eight', title: 'item eight' },
];

export const DisabledItems = Template.bind({});

DisabledItems.args = {
  id: 'custom-navigation',
  visibleItems: tabsVisibleItemsDisabled,
  hiddenItems: tabsHiddenItemsDisabled,
  defaultActiveKey: 'three',
};
