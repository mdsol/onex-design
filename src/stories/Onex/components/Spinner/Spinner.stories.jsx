import { Spinner } from '../../../../components';

export default {
  title: 'Onex/Components/Spinner',
  component: Spinner,
  argTypes: {
    animation: {
      description: 'The visual color style of the spinner',
      options: ['border', 'grow'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'border',
        },
        type: {
          summary: 'grow | border',
        },
      },
    },
    size: {
      description: 'Component size variations',
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'med',
        },
        type: {
          summary: 'sm | md | lg',
        },
      },
    },
  },
};

const Template = (args) => <Spinner {...args} />;

export const BorderAnimation = Template.bind({});

BorderAnimation.args = {
  animation: 'border',
};

export const GrowAnimation = Template.bind({});

GrowAnimation.args = {
  animation: 'grow',
};

export const Small = Template.bind({});

Small.args = {
  animation: 'border',
  size: 'sm',
};

export const Large = Template.bind({});

Large.args = {
  animation: 'border',
  size: 'lg',
};
