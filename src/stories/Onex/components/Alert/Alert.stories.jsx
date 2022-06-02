import { Alert } from '../../../../components';

export default {
  title: 'Onex/Components/Alert',
  component: Alert,
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
    children: {
      description: `Text for element inside alert's body`,
      control: 'text',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string | element',
        },
      },
    },
    primaryAction: {
      description: 'A callback fired when the user click on Primary Btn',
      action: 'primaryAction',
      table: {
        defaultValue: {
          summary: null,
        },
        type: {
          summary: 'func',
        },
      },
    },
    primaryText: {
      description: `Text for Primary Btn`,
      control: 'text',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    secondaryAction: {
      description: 'A callback fired when the user click on Secondary Btn',
      action: 'secondaryAction',
      table: {
        defaultValue: {
          summary: null,
        },
        type: {
          summary: 'func',
        },
      },
    },
    secondaryText: {
      description: `Text for Secondary Btn`,
      control: 'text',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    show: {
      description: 'Controls the visual state of the Alert.',
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
    transition: {
      description:
        'Animate the alert dismissal. Defaults to using ```<Fade>``` animation or use ```false``` to disable. A custom ```react-transition-group``` Transition can also be provided.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'Fade',
        },
        type: {
          summary: 'boolean|elementType',
        },
      },
    },
    variant: {
      description: 'The Alert visual variant',
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
  types.map((variant, idx) => (
    // eslint-disable-next-line react/no-array-index-key
    <Alert key={idx} show variant={variant} title={`This is a ${variant} alert, check it out!`} />
  ));

const examplesCodeBody = `
[
  'success',
  'error',
  'warning',
  'info',
].map((variant, idx) => (
  <Alert key={idx} show={true} variant={variant} title='This is variant alert, check it out!'/>
));
`;
Examples.parameters = {
  docs: {
    source: {
      code: examplesCodeBody,
    },
  },
};

export const Actions = () =>
  types.map((variant) => (
    // eslint-disable-next-line react/no-array-index-key
    <Alert
      key={variant}
      show
      variant={variant}
      hasPrymaryAction
      primaryText="Primary"
      hasSecondaryAction
      secondaryText="Secondary"
    >
      Subtitle
    </Alert>
  ));

const linksCodeBody = `
[
  'success',
  'info',
].map((variant, idx) => (
  <Alert key={idx} show={true} variant={variant} title='Title'/>
));
`;

Actions.parameters = {
  docs: {
    source: {
      code: linksCodeBody,
    },
  },
};

export const AdditionalContent = () => (
  <Alert show variant="success" title="Hey, nice to see you">
    Aww yeah, you successfully read this important alert message. This example text is going to run
    a bit longer so that you can see how spacing within an alert works with this kind of content.
  </Alert>
);
