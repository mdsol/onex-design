import { ProgressBar } from '../../../../components';

const variants = ['success', 'danger', 'warning', 'info'];
const defaultProps = {
  animated: false,
  max: 100,
  min: 0,
  striped: false,
};

export default {
  title: 'Onex/Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    animated: {
      control: 'boolean',
      description: "Animate's the stripes from right to left",
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum value progress can reach',
      table: {
        defaultValue: {
          summary: 100,
        },
        type: {
          summary: 'number',
        },
      },
    },
    min: {
      control: 'number',
      description: 'Minimum value progress can begin from',
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: 'number',
        },
      },
    },
    now: {
      control: 'number',
      description: 'Current value of progress',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: 'number',
        },
      },
    },
    striped: {
      control: 'boolean',
      description: 'Uses a gradient to create a striped effect.',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    variant: {
      options: variants,
      control: 'radio',
      description: 'Sets the background class of the progress bar.',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: variants.join(' | '),
        },
      },
    },
  },
};

const Template = (props) => <ProgressBar {...props} />;

export const Label = Template.bind({});

Label.args = {
  ...defaultProps,
  now: 60,
};

const variantProgressBars = (args) => {
  const now = 10;
  const props = {
    ...defaultProps,
    ...args,
  };

  return variants.map((variant, i) => (
    <ProgressBar {...props} variant={variant} now={now * (i + 1)} />
  ));
};

export const ContextualAlternatives = (args) => variantProgressBars(args);

export const Striped = (args) => variantProgressBars({ ...args, striped: true });

export const Animated = (props) => <ProgressBar {...props} />;

Animated.args = {
  ...defaultProps,
  animated: true,
  now: 45,
};

export const Stacked = (props) => (
  <ProgressBar>
    <ProgressBar {...props} striped variant="success" now={35} key={1} max={100} />
    <ProgressBar {...props} variant="warning" now={20} key={2} max={100} />
    <ProgressBar {...props} striped variant="danger" now={10} key={3} max={100} />
  </ProgressBar>
);
