import { Card } from '../../../../components';

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
      description: 'The content of the Card Body, fully custom',
      control: 'text',
    },
    onHeaderAction: {
      action: 'clicked',
      description: 'callback to click on the header action button',
    },
    showTitleBar: {
      description: 'bool for showing the Card title bar',
      control: {
        type: 'boolean',
      },
    },
    actionLinkName: {
      description: 'The name of the link',
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
      control: 'radio',
      options: ['default', 'info'],
    },
    actionHeaderName: {
      description: 'The name of the header action button',
      control: 'text',
    },
    titleActionVariant: {
      description: 'variant of tiltle action, could be "button" or "more" - only for default card',
      control: 'radio',
      options: ['more', 'button', 'select', 'none'],
    },
    link: {
      description: 'href path for the link',
      control: 'text',
    },
    badgeContent: {
      description: 'title badge content - only for default card',
      control: 'text',
    },
    title: {
      description: 'Card title',
      control: 'text',
    },
    subtitle: {
      description: 'Card subtitle - only for default card',
      control: 'text',
    },
    dataTestId: {
      description: 'Id of the component for testing',
    },
  },
};

const Template = (props) => <Card {...props} />;

export const Demo = Template.bind({});

Demo.args = {
  showActionBar: true,
  showTitleBar: true,
  actionLinkName: 'Link',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nisi sapiente, modi repudiandae impedit',
  id: 'onex-components-card--default',
  variant: 'default',
  actionHeaderName: 'Action',
  titleActionVariant: 'button',
  link: '#',
  badgeContent: '100',
  title: 'Card Heading',
  subtitle: 'Subtitle',
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
};

export const Default = Template.bind({});

Default.args = {
  showActionBar: true,
  showTitleBar: true,
  actionLinkName: 'Link',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nisi sapiente, modi repudiandae impedit',
  dataTestId: 'onex-components-card--default',
  variant: 'default',
  titleActionVariant: 'none',
  link: '#',
  badgeContent: '100',
  title: 'Card Heading',
  subtitle: 'Subtitle',
};

export const Info = Template.bind({});

Info.args = {
  showActionBar: true,
  showTitleBar: true,
  actionLinkName: 'Link',
  titleActionVariant: 'none',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nisi sapiente, modi repudiandae impedit',
  dataTestId: 'onex-components-card--info',
  variant: 'info',
  link: '#',
  title: 'Card Heading',
};

export const DefaultOnlyBody = Template.bind({});

DefaultOnlyBody.args = {
  showActionBar: false,
  showTitleBar: false,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nisi sapiente, modi repudiandae impedit',
  dataTestId: 'onex-components-card--info',
  variant: 'default',
};

export const InfoOnlyBody = Template.bind({});

InfoOnlyBody.args = {
  showActionBar: false,
  showTitleBar: false,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nisi sapiente, modi repudiandae impedit',
  dataTestId: 'onex-components-card--info',
  variant: 'info',
};

export const ButtonActionType = Template.bind({});

ButtonActionType.args = {
  showActionBar: true,
  showTitleBar: true,
  actionLinkName: 'Link',
  titleActionVariant: 'button',
  actionHeaderName: 'Action',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nisi sapiente, modi repudiandae impedit',
  dataTestId: 'onex-components-card--info',
  badgeContent: '100',
  subtitle: 'Subtitle',
  variant: 'default',
  link: '#',
  title: 'Card Heading',
};

export const DropdownActionType = Template.bind({});

DropdownActionType.args = {
  showActionBar: true,
  showTitleBar: true,
  actionLinkName: 'Link',
  titleActionVariant: 'more',
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
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam nisi sapiente, modi repudiandae impedit',
  dataTestId: 'onex-components-card--info',
  badgeContent: '100',
  subtitle: 'Subtitle',
  variant: 'default',
  link: '#',
  title: 'Card Heading',
};
