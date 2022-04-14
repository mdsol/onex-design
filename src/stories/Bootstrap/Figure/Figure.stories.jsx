/* eslint-disable storybook/story-exports */
import { Figure } from '../../../components';

export default {
  title: 'Bootstrap/Components/Figure',
  component: Figure,
  argTypes: {
    as: {
      control: 'object',
      description: 'You can use a custom element type for this component.',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: 'elementType',
        },
      },
    },
  },
};
