/* eslint-disable storybook/story-exports */
import { Carousel } from '../../../components';
import CarouselMDX from './Carousel.stories.mdx';

const pauseVariants = {
  hover: 'hover',
  false: false,
};

export default {
  title: 'Bootstrap/Components/Carousel',
  component: Carousel,
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
    activeIndex: {
      control: 'number',
      description:
        'controlled by: `onSelect`, initial prop: `defaultActiveindex` Controls the current visible slide',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: 'number',
        },
      },
    },
    interval: {
      control: 'number',
      description:
        'The amount of time to delay between automatically cycling an item. If `null`, carousel will not automatically cycle.',
      table: {
        defaultValue: {
          summary: 5000,
        },
        type: {
          summary: 'number',
        },
      },
    },
    controls: {
      control: 'boolean',
      description: 'Show the Carousel previous and next arrows for changing the current slide',
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    fade: {
      control: 'boolean',
      description:
        'Animates slides with a crossfade animation instead of the default slide animation',
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    indicators: {
      control: 'boolean',
      description: 'Show a set of slide position indicators',
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    keyboard: {
      control: 'boolean',
      description: 'Whether the carousel should react to keyboard events',
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    slide: {
      control: 'boolean',
      description: 'Enables animation on the Carousel as it transitions between slides',
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    touch: {
      control: 'boolean',
      description:
        'Whether the carousel should support left/right swipe interactions on touchscreen devices',
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    wrap: {
      control: 'boolean',
      description: 'Whether the carousel should cycle continuously or have hard stops.',
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    nextIcon: {
      control: 'object',
      description: 'Override the default button icon for the "next" control',
      table: {
        defaultValue: {
          summary: '<span aria-hidden="true" className="carousel-control-next-icon" />',
        },
        type: {
          summary: 'node',
        },
      },
    },
    nextLabel: {
      control: 'text',
      description:
        'Label shown to screen readers only, can be used to show the next element in the carousel. Set to null to deactivate',
      table: {
        defaultValue: {
          summary: 'Next',
        },
        type: {
          summary: 'string',
        },
      },
    },
    prevIcon: {
      control: 'object',
      description: 'Override the default button icon for the "previous" control',
      table: {
        defaultValue: {
          summary: '<span aria-hidden="true" className="carousel-control-prev-icon" />',
        },
        type: {
          summary: 'node',
        },
      },
    },
    prevLabel: {
      control: 'text',
      description:
        'Label shown to screen readers only, can be used to show the previous element in the carousel. Set to null to deactivate.',
      table: {
        defaultValue: {
          summary: 'Previous',
        },
        type: {
          summary: 'string',
        },
      },
    },
    variant: {
      description:
        'Color variant that controls the colors of the controls, indicators and captions',
      table: {
        defaultValue: {
          summary: 'dark',
        },
        type: {
          summary: 'dark',
        },
      },
      options: ['dark'],
      control: { type: 'check' },
    },
    pause: {
      description:
        'If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won\'t pause it.\n' +
        '\n' +
        'On touch-enabled devices, when set to "hover", cycling will pause on touchend (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.',
      table: {
        defaultValue: {
          summary: 'hover',
        },
        type: {
          summary: "'hover' | false",
        },
      },
      options: Object.values(pauseVariants),
      control: {
        type: 'select',
        label: pauseVariants,
      },
    },
    indicatorLabels: {
      control: 'object',
      description: 'An array of labels for the indicators. Defaults to "Slide #" if not provided',
      table: {
        defaultValue: {
          summary: [],
        },
        type: {
          summary: 'array<>',
        },
      },
    },
    children: {
      control: 'object',
      description: 'The content of the component.',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    onSelect: {
      description:
        'controls activeIndex\n' +
        'Callback fired when the active item changes.\n' +
        '\n' +
        '`(eventKey: number, event: Object | null) => void`',
      action: 'selected',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onSlid: {
      description:
        "Callback fired when a slide transition ends. `(eventKey: number, direction: 'left' | 'right') => void`",
      action: 'clicked',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onSlide: {
      description:
        'Callback fired when a slide transition starts.\n' +
        '\n' +
        "`(eventKey: number, direction: 'left' | 'right') => void`",
      action: 'clicked',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
  },
  parameters: {
    docs: {
      page: CarouselMDX,
    },
  },
};
