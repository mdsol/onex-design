import { Avatar, Tag } from '../../../../components';
import TagMDX from './Tag.stories.mdx';

export default {
  title: 'Onex/Components/Tag',
  component: Tag,
  argTypes: {
    children: {
      description: 'The content of the component',
      control: 'text',
    },
    className: {
      description: 'Name of the CSS class',
      control: 'text',
    },
    dataTestId: {
      description: 'Id of the component for testing',
    },
    controlId: {
      description: 'Sets id on component',
      control: 'text',
    },
    disabled: {
      description: 'Disables the component, preventing mouse events',
      control: 'boolean',
    },
    image: {
      description: `Leading icon. Contains 2 items:
                      \n1.icon - can be Avatar component or svg icon;
                      \n2.src - provided string with URL, in this case render img ;`,
    },
    isRemovable: {
      description: 'Added ```X``` to tag, added possibility to remove tag',
      control: 'boolean',
    },
    onSelect: {
      description: 'A callback fired when a tag is selected. ',
      action: 'select',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onRemove: {
      description: 'A callback fired when a tag is removed.',
      action: 'remove',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
  },
  parameters: {
    docs: {
      page: TagMDX,
    },
  },
};

const Template = (props) => <Tag {...props} />;

export const Selection = Template.bind({});

Selection.args = {
  className: 'selection-tag-class',
  dataTestId: 'selection-tag-id',
  variant: 'selection',
  children: 'Tag label',
};

export const SelectionRemovable = Template.bind({});

SelectionRemovable.args = {
  className: 'selection-removable-tag-class',
  dataTestId: 'selection-removable-tag-id',
  variant: 'selection',
  isRemovable: true,
  children: 'Tag label',
};

export const SelectionRemovableDisabled = Template.bind({});

SelectionRemovableDisabled.args = {
  className: 'selection-removable-disabled-tag-class',
  dataTestId: 'selection-removable-disabled-tag-id',
  variant: 'selection',
  isRemovable: true,
  children: 'Tag label',
  disabled: true,
};

export const SelectionLeadingIcon = Template.bind({});

SelectionLeadingIcon.args = {
  className: 'selection-leading-icon-tag-class',
  dataTestId: 'selection-leading-icon-tag-id',
  variant: 'selection',
  children: 'Tag label',
  image: {
    icon: (
      <Avatar
        src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
        size="xs"
        hoverDisabled
      />
    ),
  },
};

export const SelectionLeadingIconRemovable = Template.bind({});

SelectionLeadingIconRemovable.args = {
  className: 'selection-leading-icon-tag-class',
  dataTestId: 'selection-leading-icon-tag-id',
  variant: 'selection',
  children: 'Tag label',
  image: {
    icon: (
      <Avatar
        src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
        size="xs"
        hoverDisabled
      />
    ),
  },
  isRemovable: true,
};

export const SelectionLeadingIconRemovableDisabled = Template.bind({});

SelectionLeadingIconRemovableDisabled.args = {
  className: 'selection-leading-icon-tag-class',
  dataTestId: 'selection-leading-icon-tag-id',
  variant: 'selection',
  children: 'Tag label',
  isRemovable: true,
  disabled: true,
  image: {
    icon: (
      <Avatar
        src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
        size="xs"
        hoverDisabled
      />
    ),
  },
};
