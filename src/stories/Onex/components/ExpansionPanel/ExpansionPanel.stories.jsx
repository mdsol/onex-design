import { FileEarmarkCode, Check } from 'react-bootstrap-icons';
import { Avatar, ExpansionPanel } from '../../../../components';

export default {
  title: 'Onex/Components/ExpansionPanel',
  component: ExpansionPanel,
  argTypes: {
    children: {
      description: 'The content of the toggle button.',
      control: 'text',
    },
    className: {
      description: 'Name of the CSS class',
      control: 'text',
    },
    dataTestId: {
      description: 'Id of the component for testing',
    },
    disabled: {
      description: 'Disables the Dropdown, preventing mouse events',
      control: 'boolean',
    },
    id: {
      description: 'An html id attribute for the Toggle button',
      control: 'text',
    },
    items: {
      description: `Array of menu items. Each item contain:
                           \n1.active - highlight the menu item as active;
                           \n2.disabled - disable the menu item, making it unselectable;
                           \n3.eventKey - value passed to the onSelect handler, useful for identifying the selected menu item;
                           \n4.hasDividerAfter - create divider after menu item;
                           \n5.href - HTML href attribute corresponding to a.href;
                           \n6.title* - content of menu item;
                           \n7.unavailable - analog disabled;
                           \n8.leadingIcon - icon displayed before the toggle button content;
                           \n9.trailingIcon - icon displayed after the toggle button content;`,
    },
    onSelect: { action: 'select' },
    toggle: {
      description: `Toggle button content. Contains 2 items:
            \n1.avatar - add Avatar to toggle button;
            \n1.badge - add Badge to toggle button;`,
    },
  },
};

const expansionPanelItems = [
  {
    eventKey: 'opt1',
    title: 'Option 1',
    trailingIcon: <Check />,
  },
  {
    eventKey: 'opt2',
    title: 'Option 2',
    leadingIcon: <FileEarmarkCode />,
  },
  {
    eventKey: 'opt3',
    title: 'Option 3',
    leadingIcon: <FileEarmarkCode />,
    trailingIcon: <Check />,
  },
  {
    eventKey: 'opt5',
    title: 'Option 5',
    unavailable: true,
    leadingIcon: <FileEarmarkCode />,
    trailingIcon: <Check />,
  },
];

const expansionPanelItemsCode = `
{[
    {
      eventKey: 'opt1',
      title: 'Option 1',
      trailingIcon:  <Check />,
    },
    {
      eventKey: 'opt2',
       title: 'Option 2'
      leadingIcon: <FileEarmarkCode />,
    },
    {
      eventKey: 'opt3',
      title: 'Option 3',
      leadingIcon: <FileEarmarkCode />,
      trailingIcon: <Check />,
    },
    {
      eventKey: 'opt5',
      title: 'Option 5',
      leadingIcon: <FileEarmarkCode />,
      trailingIcon: <Check />,
      unavailable: true
    }
  ]}`;

const ExpansionPanelTemplate = (args) => <ExpansionPanel {...args} />;

export const WithBadge = ExpansionPanelTemplate.bind({});
const withBadgeCodeBody = `
<ExpansionPanel
  id="exp-panel-id"
  items= ${expansionPanelItemsCode}
  onSelect={() => {}}
  toggle={{
    badge: '100'
  }}
>
  Title
</ExpansionPanel>
`;
WithBadge.parameters = {
  docs: {
    source: {
      code: withBadgeCodeBody,
    },
  },
};
WithBadge.args = {
  id: 'exp-panel-id',
  toggle: {
    badge: '100',
  },
  children: 'Title',
  items: expansionPanelItems,
};

export const WithAvatar = ExpansionPanelTemplate.bind({});
const withAvatarCodeBody = `
<ExpansionPanel
  id="exp-panel-avatar-id"
  items= ${expansionPanelItemsCode}
  onSelect={() => {}}
  toggle={{
    badge: '100',
    avatar: (
            <Avatar
                src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                size="md"
                hoverDisabled
            />
        )
  }}
>
  Title
</ExpansionPanel>
`;
WithAvatar.parameters = {
  docs: {
    source: {
      code: withAvatarCodeBody,
    },
  },
};
WithAvatar.args = {
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
  items: expansionPanelItems,
};
