import { Placeholder, Card, Button } from '../../../components';

export default {
  title: 'Bootstrap/Components/Placeholder',
  component: Placeholder,
  argTypes: {
    animation: {
      description: 'Changes the animation of the placeholder.',
      options: ['glow', 'wave'],
      control: { type: 'select' },
      table: {
        type: {
          summary: "'glow' | 'wave'",
        },
      },
    },
    bg: {
      description: 'Change the background color of the placeholder.',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' },
      table: {
        type: {
          summary: "'primary'| 'secondary'| 'success'| 'danger'|'warning'|'info'|'light'|'dark'",
        },
      },
    },
    size: {
      description: 'Component size variations.',
      options: ['xs', 'sm', 'lg'],
      control: { type: 'select' },
      table: {
        type: {
          summary: "'xs'| 'sm'| 'lg'",
        },
      },
    },
    bsPrefix: {
      description: `Change the underlying component CSS base class name and modifier class names prefix.
                    This is an escape hatch for working with heavily customized bootstrap css.`,
      control: 'text',
      table: {
        defaultValue: {
          summary: 'placeholder',
        },
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export const Example = () => (
  <div className="d-flex justify-content-around">
    <Card className="w-100">
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  </div>
);

const PlaceholderTemplate = (args) => <Placeholder {...args} />;

export const WidthGrid = PlaceholderTemplate.bind({});
WidthGrid.args = {
  xs: 6,
};

export const WidthUtilities = PlaceholderTemplate.bind({});
WidthUtilities.args = {
  className: 'w-75',
};

export const WidthInlineStyles = PlaceholderTemplate.bind({});
WidthInlineStyles.args = {
  style: {
    width: '25%',
  },
};

export const ColorDefault = PlaceholderTemplate.bind({});
ColorDefault.args = {
  xs: 12,
};

export const ColorPrimary = PlaceholderTemplate.bind({});
ColorPrimary.args = {
  xs: 12,
  bg: 'primary',
};

export const ColorSecondary = PlaceholderTemplate.bind({});
ColorSecondary.args = {
  xs: 12,
  bg: 'secondary',
};

export const ColorSuccess = PlaceholderTemplate.bind({});
ColorSuccess.args = {
  xs: 12,
  bg: 'success',
};

export const ColorDanger = PlaceholderTemplate.bind({});
ColorDanger.args = {
  xs: 12,
  bg: 'danger',
};

export const ColorWarning = PlaceholderTemplate.bind({});
ColorWarning.args = {
  xs: 12,
  bg: 'warning',
};

export const ColorInfo = PlaceholderTemplate.bind({});
ColorInfo.args = {
  xs: 12,
  bg: 'info',
};

export const ColorLight = PlaceholderTemplate.bind({});
ColorLight.args = {
  xs: 12,
  bg: 'light',
};

export const ColorDark = PlaceholderTemplate.bind({});
ColorDark.args = {
  xs: 12,
  bg: 'dark',
};

export const SizeDefault = PlaceholderTemplate.bind({});
SizeDefault.args = {
  xs: 12,
};

export const SizeLg = PlaceholderTemplate.bind({});
SizeLg.args = {
  xs: 12,
  size: 'lg',
};

export const SizeSm = PlaceholderTemplate.bind({});
SizeSm.args = {
  xs: 12,
  size: 'sm',
};

export const SizeXs = PlaceholderTemplate.bind({});
SizeXs.args = {
  xs: 12,
  size: 'xs',
};

export const AnimationGlow = (args) => (
  <Placeholder {...args} as="p" animation="glow">
    <Placeholder xs={12} />
  </Placeholder>
);

export const AnimationWave = (args) => (
  <Placeholder {...args} as="p" animation="wave">
    <Placeholder xs={12} />
  </Placeholder>
);
