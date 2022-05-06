import React from 'react';
import { Offcanvas, Button } from '../../../../components';

export default {
  title: 'Onex/Components/Offcanvas',
  component: Offcanvas,
  argTypes: {
    link: {
      description: `Link for solo link btn in footar`,
      control: 'string',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    linkText: {
      description: `Text for solo link btn in footar`,
      control: 'string',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    primaryActionFc: {
      description: 'A callback fired when the user click on Primary Btn',
      action: 'primaryFc',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    primaryActionText: {
      description: `Text for Primary Btn`,
      control: 'string',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    secondaryActionFc: {
      description: 'A callback fired when the user click on Secondary Btn',
      action: 'primaryFc',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    secondaryActionText: {
      description: `Text for Secondary Btn`,
      control: 'string',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    title: {
      description: `Text for title`,
      control: 'string',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    children: {
      description: 'The content of the Offcanvas',
      control: 'text',
    },
    badge: {
      description: `Badge for title`,
      control: 'number',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'number',
        },
      },
    },
    autoFocus: {
      description: `When true The offcanvas will automatically shift focus to itself when it opens,
                and replace it to the last focused element when it closes. Generally this should never be set
                to false as it makes the offcanvas less accessible to assistive technologies, like screen-readers.`,
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
    backdrop: {
      description: 'Include a backdrop component.',
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
    className: {
      description: `ClassName`,
      control: 'string',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    backdropClassName: {
      description: 'Add an optional extra class name to .offcanvas-backdrop.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    enforceFocus: {
      description: `When true The offcanvas will prevent focus from leaving the offcanvas while open.
                Consider leaving the default value here, as it is necessary to make the offcanvas work well with
                assistive technologies, such as screen readers.`,
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
    onEnter: {
      description: 'Callback fired before the offcanvas transitions in',
      action: 'enter',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onEntered: {
      description: 'Callback fired after the offcanvas finishes transitioning in',
      action: 'entered',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onEntering: {
      description: 'Callback fired as the offcanvas begins to transition in',
      action: 'entering',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onEscapeKeyDown: {
      description: 'A callback fired when the escape key, if specified in keyboard, is pressed.',
      action: 'escapeKeyDown',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onExit: {
      description: 'Callback fired right before the offcanvas transitions out',
      action: 'exit',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onExited: {
      description: 'Callback fired after the offcanvas finishes transitioning out',
      action: 'exited',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onExiting: {
      description: 'Callback fired as the offcanvas begins to transition out',
      action: 'exiting',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onHide: {
      description:
        'A callback fired when the header closeButton or backdrop is clicked. Required if either are specified.',
      action: 'hide',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onShow: {
      description: 'A callback fired when the offcanvas is opening.',
      action: 'show',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    restoreFocus: {
      description: `When true The offcanvas will restore focus to previously
                        focused element once offcanvas is hidden`,
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
    restoreFocusOptions: {
      description: 'Options passed to focus function when restoreFocus is set to true',
      control: 'text',
      table: {
        type: {
          summary: 'shape',
        },
      },
    },
    scroll: {
      description: 'Allow body scrolling while offcanvas is open.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    show: {
      description: 'When true The offcanvas will show itself.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

const OffcanvasBackdropTemplate = (args) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const { name } = args;

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas {...args} show={show} onHide={handleClose}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni aliquam libero, deleniti exercitationem, labore ratione quia asperiores ex est quos maxime, fugiat voluptatem veritatis. Laborum qui dicta voluptates consectetur.
      </Offcanvas>
    </>
  );
};

export const EnableBackdrop = OffcanvasBackdropTemplate.bind({});
EnableBackdrop.args = {
  name: 'Enable backdrop (default)',
  title: 'Title',
  scroll: false,
  backdrop: true,
};

export const DisableBackdrop = OffcanvasBackdropTemplate.bind({});
DisableBackdrop.args = {
  name: 'Disable backdrop',
  title: 'Title',
  scroll: false,
  backdrop: false,
};

export const EnableScrolling = OffcanvasBackdropTemplate.bind({});
EnableScrolling.args = {
  name: 'Enable body scrolling',
  title: 'Title',
  scroll: true,
  backdrop: false,
};

export const EnableScrollingBackdrop = OffcanvasBackdropTemplate.bind({});
EnableScrollingBackdrop.args = {
  name: 'Enable both scrolling & backdrop',
  title: 'Title',
  scroll: true,
  backdrop: true,
};

export const OnlyPrimaryBtn = OffcanvasBackdropTemplate.bind({});
OnlyPrimaryBtn.args = {
  name: 'OnlyPrimaryBtn(default)',
  title: 'Title',
  secondaryActionFc: null,
};

export const PrimaryAndSecondaryBtns = OffcanvasBackdropTemplate.bind({});
PrimaryAndSecondaryBtns.args = {
  name: 'PrimaryAndSecondaryBtns',
  title: 'Title',
  secondaryActionFc: () => {},
  secondaryActionText: 'Secondary'
};

export const LinkBtn = OffcanvasBackdropTemplate.bind({});
LinkBtn.args = {
  name: 'LinkBtn',
  title: 'Title',
  link: 'frfefe',
  linkText: 'Link',
};

export const BadgeVariant = OffcanvasBackdropTemplate.bind({});
BadgeVariant.args = {
  name: 'Variant with badge',
  title: 'Title',
  badge: 29,
};