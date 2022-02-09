import { Overlay } from '../../../components';

export default {
  title: 'Bootstrap/Components/Overlay',
  component: Overlay,
  argTypes: {
    transition: {
      description: `Animate the entering and exiting of the Overlay. true will use the <Fade> transition, or a custom react-transition-group <Transition> component can be provided.`,
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    rootClose: {
      description:
        'Specify whether the overlay should trigger onHide when the user clicks outside the overlay',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    placement: {
      description: 'The placement of the Overlay in relation to its target.',
      options: [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'right',
        },
        type: {
          summary: `'auto-start' |
                         'auto' |
                         'auto-end' |
                         'top-start' |
                         'top' |
                         'top-end' |
                         'right-start'|
                         'right' |
                         'right-end' |
                         'bottom-end' |
                         'bottom' |
                         'bottom-start' |
                         'left-end' |
                         'left' |
                         'left-start'`,
        },
      },
    },
    text: {
      description: 'Text of the Overlay',
      control: 'text',
      table: {
        type: {
          summary: 'Simple Overlay',
        },
      },
    },
    rootCloseEvent: {
      description: `Specify event for triggering a "root close" toggle.`,
      options: ['click', 'mousedown'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'right',
        },
        type: {
          summary: `'click'|'mousedown'`,
        },
      },
    },
  },
};

export const Top = (args) => {
  const { placement } = args;
  return <Overlay placement={placement} text="Simple Overlay" />;
};

Top.args = {
  placement: 'top',
  id: 'popover-positioned-top',
};

export const Right = (args) => {
  const { placement } = args;
  return <Overlay placement={placement} text="Right Overlay" />;
};

Right.args = {
  placement: 'right',
  id: 'popover-positioned-right',
};

export const Left = (args) => {
  const { placement } = args;
  return <Overlay placement={placement} text="Left Overlay" />;
};

Left.args = {
  placement: 'left',
  id: 'popover-positioned-left',
};
