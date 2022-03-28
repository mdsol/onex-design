import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Avatar, Tag } from '../../../../components';
import TagMDX from './Tag.stories.mdx';

const icons = { Check: <CheckCircleIcon />, Remove: <RemoveCircleIcon /> };
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
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          Check: 'Check',
          Remove: 'Remove',
        },
      },
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
    size: {
      description:
        ' Size can be ```sm``` and ```md```. The parameter size can only be at tag with variant ```input```, size ```sm``` is supported just without leading icon',
    },
    variant: {
      description: 'Supports 2 variants: ```selection``` and ```input```',
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
        size="sm"
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
        size="sm"
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
        size="sm"
        hoverDisabled
      />
    ),
  },
};

export const InputSmall = Template.bind({});

InputSmall.args = {
  className: 'input-small-tag-class',
  dataTestId: 'input-small-tag-id',
  variant: 'input',
  children: 'Input small tag',
  size: 'sm',
};

export const InputSmallDisabled = Template.bind({});

InputSmallDisabled.args = {
  className: 'input-small-disabled-tag-class',
  dataTestId: 'input-small-disabled-tag-id',
  variant: 'input',
  children: 'Input small tag',
  size: 'sm',
  disabled: true,
};

export const InputMedium = Template.bind({});

InputMedium.args = {
  className: 'input-medium-tag-class',
  dataTestId: 'input-medium-tag-id',
  variant: 'input',
  children: 'Input medium tag',
  size: 'md',
};

export const InputMediumDisabled = Template.bind({});

InputMediumDisabled.args = {
  className: 'input-medium-disabled-tag-class',
  dataTestId: 'input-medium-disabled-tag-id',
  variant: 'input',
  children: 'Input medium tag',
  size: 'md',
  disabled: true,
};

export const InputLeadingIcon = Template.bind({});

InputLeadingIcon.args = {
  className: 'input-leading-icon-tag-class',
  dataTestId: 'input-leading-icon-tag-id',
  variant: 'input',
  children: 'Tag label',
  image: {
    icon: (
      <Avatar
        src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
        size="sm"
        hoverDisabled
      />
    ),
  },
};

export const InputLeadingIconDisabled = Template.bind({});

InputLeadingIconDisabled.args = {
  className: 'input-leading-icon-disabled-tag-class',
  dataTestId: 'input-leading-icon-disabled-tag-id',
  variant: 'input',
  children: 'Tag label',
  image: {
    icon: (
      <Avatar
        src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
        size="sm"
        hoverDisabled
      />
    ),
  },
  disabled: true,
};
