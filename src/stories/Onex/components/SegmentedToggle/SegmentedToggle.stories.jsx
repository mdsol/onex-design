import { SegmentedToggle } from '../../../../components';

const variants = ['text', 'icons', 'customIcons'];

const textItems = [
  {
    value: 'item1',
    id: '1',
    name: 'textLabels',
    label: 'Item1',
  },
  {
    value: 'item2',
    id: '2',
    name: 'textLabels',
    label: 'Item2',
  },
  {
    value: 'item3',
    id: '3',
    name: 'textLabels',
    label: 'Item3',
  },
];

const iconsItems = [
  {
    value: 'item7',
    id: '7',
    name: 'icons',
    label: 'info',
  },
  {
    value: 'item8',
    id: '8',
    name: 'icons',
    label: 'warning',
  },
  {
    value: 'item9',
    id: '9',
    name: 'icons',
    label: 'error',
  },
];

export default {
  title: 'Onex/Components/SegmentedToggle',
  component: SegmentedToggle,
  argTypes: {
    className: {
      description: 'The className to set the styles for card',
      control: 'text',
    },
    variant: {
      options: variants,
      control: 'radio',
      description: 'Sets the variant of toggle btns.',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: variants.join(' | '),
        },
      },
    },
    size: {
      options: ['sm', 'md'],
      control: 'radio',
      description: 'Set the size of segmented toggle',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: 'sm | md',
        },
      },
    },
    items: {
      control: '',
      description: 'Array of items for components',
    },
    defaultValue: {
      control: 'text',
      description: 'Default value choosed on the start',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: '',
        },
      },
    },
    groupName: {
      control: 'text',
      description: 'Group name for bar, is requared',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: '',
        },
      },
    },
    onChange: {
      control: 'text',
      description: 'Func for ger choosed value',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: '',
        },
      },
    },
  },
};

const Template = (props) => <SegmentedToggle {...props} />;

export const SizeSm = Template.bind({});

SizeSm.args = {
  groupName: 'sizeSm',
  items: textItems,
  size: 'sm',
};

export const SizeMd = Template.bind({});

SizeMd.args = {
  groupName: 'sizeMd',
  items: textItems,
};

export const Icons = Template.bind({});

Icons.args = {
  groupName: 'info',
  variant: 'icons',
  items: iconsItems,
};
