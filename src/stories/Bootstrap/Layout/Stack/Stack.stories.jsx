import { Stack, Button } from '../../../../components';
import StackDocumentation from './Stack.stories.mdx';

export default {
  title: 'Bootstrap/Layout/Stack',
  component: Stack,
  argTypes: {
    gap: {
      description: 'Sets the spacing between each item. Valid values are 0-5.',
      control: 'number',
      table: {
        type: {
          summary: 'responsivePropType(PropTypes.number)',
        },
      },
    },
    bsPrefix: {
      description: `Change the underlying component CSS base class name and modifier class names prefix.
                     This is an escape hatch for working with heavily customized bootstrap css.
                     Defaults to hstack if direction is horizontal or vstack if direction is vertical.`,
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    direction: {
      description:
        'Vertical direction - by default. Use direction="horizontal" for horizontal layouts.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },

  parameters: {
    docs: {
      page: StackDocumentation,
    },
  },
};

const Template = (props) => (
  <Stack {...props}>
    <div className="bg-light border">First item</div>
    <div className="bg-light border">Second item</div>
    <div className="bg-light border">Third item</div>
  </Stack>
);

export const Vertical = Template.bind({});
Vertical.args = {
  gap: 3,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
  gap: 3,
};

export const VerticalExample = (args) => (
  <Stack {...args} gap={2} className="col-md-5 mx-auto">
    <Button variant="secondary">Save changes</Button>
    <Button variant="outline-secondary">Cancel</Button>
  </Stack>
);

VerticalExample.args = {
  gap: 2,
};

export const HorizontalExample = (args) => (
  <Stack {...args} gap={2} className="col-md-5 mx-auto">
    <Button variant="secondary">Save changes</Button>
    <Button variant="outline-secondary">Cancel</Button>
  </Stack>
);

HorizontalExample.args = {
  gap: 3,
  direction: 'horizontal',
};
