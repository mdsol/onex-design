import { InlineAlert } from '../../../../components';

export default {
  title: 'Onex/Components/InlineAlert',
  component: InlineAlert,
  argTypes: {
    title: {
      description: `Text for Title`,
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Title',
        },
        type: {
          summary: 'string',
        },
      },
    },
    show: {
      description: 'Controls the visual state of the InlineAlert.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    variant: {
      description: 'The InlineAlert visual variant',
      options: ['success', 'error', 'warning', 'info'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'info',
        },
        type: {
          summary: 'success | error | warning | info',
        },
      },
    },
  },
};

const types = ['success', 'error', 'warning', 'info'];

export const Examples = () =>
  types.map((variant) => (
    // eslint-disable-next-line react/no-array-index-key
    <InlineAlert
      key={variant}
      show
      variant={variant}
      title={`This is a ${variant} InlineAlert, check it out!`}
    />
  ));

const examplesCodeBody = `
[
  'success',
  'error',
  'warning',
  'info',
].map((variant, idx) => (
  <InlineAlert key={idx} show={true} variant={variant} title='This is variant InlineAlert, check it out!'/>
));
`;
Examples.parameters = {
  docs: {
    source: {
      code: examplesCodeBody,
    },
  },
};
