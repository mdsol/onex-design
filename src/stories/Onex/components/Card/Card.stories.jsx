import Card from '../../../../components/Card/scss/index';

export default {
  title: 'Onex/Components/Card',
  component: Card,
  argTypes: {
    dropdownItems: {
      description: `Array of menu items. Each item contain:
                             \n1.title* - content of menu item;
                             \n2.hasDividerAfter - create divider after menu item;
                             \n3.active - highlight the menu item as active;
                             \n4.disabled - disable the menu item, making it unselectable;
                             \n5.eventKey - value passed to the onSelect handler, useful for identifying the selected menu item;
                             \n6.href - HTML href attribute corresponding to a.href.`,
    },
    children: {
      description: 'The content of the Card',
      control: 'text',
    },
    onActionButton: {
      action: 'clicked',
      description: 'callback to click on the action button',
    },
    showTitleBar: {
      description: 'bool for showing the Card title bar',
      control: {
        type: 'boolean',
      },
    },
    actionName: {
      description: 'The name of the action',
      control: 'text',
    },
    className: {
      description: 'The className to set the styles for card',
      control: 'text',
    },
    showActionBar: {
      description: 'bool for showing the Card Action Bar',
      control: {
        type: 'boolean',
      },
    },
    variant: {
      description: 'card variation',
      control: 'text',
    },
  },
};

const Template = (props) => <Card {...props} />;

export const Default = Template.bind({});

Default.args = {
  showActionBar: true,
  showTitleBar: true,
  dropdownItems: [
    { eventKey: 'one', title: 'item one', badge: 100, active: true },
    { eventKey: 'two', title: 'item two', badge: 100 },
    { eventKey: 'three', title: 'item three' },
    { eventKey: 'four', title: 'item four', badge: 100 },
    { eventKey: 'five', title: 'item five', badge: 100 },
    { eventKey: 'six', title: 'item six', badge: 100 },
    { eventKey: 'seven', title: 'item seven', badge: 100 },
    { eventKey: 'eight', title: 'item eight', badge: 100 },
  ],
  actionName: 'Tertiary Button',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nisi sapiente, modi repudiandae impedit',
  id: 'onex-components-card--default',
  variant: 'default',
};

export const Info = Template.bind({});

Info.args = {
  showActionBar: true,
  showTitleBar: true,
  dropdownItems: [
    { eventKey: 'one', title: 'item one', badge: 100, active: true },
    { eventKey: 'two', title: 'item two', badge: 100 },
    { eventKey: 'three', title: 'item three' },
    { eventKey: 'four', title: 'item four', badge: 100 },
    { eventKey: 'five', title: 'item five', badge: 100 },
    { eventKey: 'six', title: 'item six', badge: 100 },
    { eventKey: 'seven', title: 'item seven', badge: 100 },
    { eventKey: 'eight', title: 'item eight', badge: 100 },
  ],
  actionName: 'Tertiary Button',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nisi sapiente, modi repudiandae impedit',
  id: 'onex-components-card--info',
  variant: 'info',
};
