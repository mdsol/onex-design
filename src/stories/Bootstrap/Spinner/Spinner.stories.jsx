import { Spinner } from '../../../components';

export default {
  title: 'Bootstrap/Components/Spinner',
  component: Spinner,
  argTypes: {
    animation: {
      description: 'The visual color style of the spinner',
      options: ['border', 'grow'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'grow',
        },
        type: {
          summary: 'grow | border',
        },
      },
    },
    as: {
      description: 'You can use a custom element type for this component.',
      control: 'text',
      table: {
        defaultValue: {
          summary: 'span',
        },
        type: {
          summary: 'string',
        },
      },
    },
    variant: {
      description: 'The Spinner visual variant',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'primary',
        },
        type: {
          summary: 'primary | secondary | success | danger | warning | info | dark | light',
        },
      },
    },
    children: {
      description: 'This component may be used to wrap child elements or components',
      control: 'text',
    },
    role: {
      description:
        'An ARIA accessible role applied to the Menu component. This should generally be set to "status"',
      control: 'text',
    },
    size: {
      description: 'Component size variations',
      control: 'text',
    },
    bsPrefix: {
      description:
        'Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.',
      control: 'text',
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
  animation: 'grow',
  size: 'sm',
};

export const Large = Template.bind({});

Large.args = {
  animation: 'grow',
  size: 'lg',
};
