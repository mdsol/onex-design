import { Spinner } from '../../../../components';

export default {
  title: 'Onex/Components/Spinner',
  component: Spinner,
  argTypes: {
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

export const Demo = Template.bind({});

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
};
