import { CloseButton } from '../../../components';

export default {
  title: 'Bootstrap/Components/CloseButton',
  component: CloseButton,
  argTypes: {
    'aria-label': {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Close',
        },
        type: {
          summary: 'string',
        },
      },
    },
    onClick: {
      action: 'clicked',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: 'func',
        },
      },
    },
    variant: {
      control: 'text',
      description:
        'Render different color variant for the button. Omitting this will render the default dark color.',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: 'white',
        },
      },
    },
    disabled: {
      description: 'Disables the Button, preventing mouse events',
      control: 'boolean',
    },
  },
};

const ButtonTemplate = (args) => <CloseButton {...args} />;

export const Disabled = ButtonTemplate.bind({});

Disabled.args = {
  disabled: 'true',
};

export const Variant = (props) => (
  <div className="bg-dark p-3">
    <CloseButton variant="white" {...props} />
    <CloseButton variant="white" disabled {...props} />
  </div>
);

export const Accessibility = ButtonTemplate.bind({});

Accessibility.args = {
  'aria-label': 'Hide',
};
