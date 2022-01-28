import React from 'react';
import { Modal, Button } from '../../../components';
import ModalDocumentation from './Modal.stories.mdx';

export default {
  title: 'Bootstrap/Components/Modal',
  component: Modal,
  argTypes: {
    animation: {
      description: 'Open and close the Modal with a slide and fade animation.',
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
    autoFocus: {
      description: `When true The modal will automatically shift focus to itself when it opens,
            and replace it to the last focused element when it closes. Generally this should never be
            set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.`,
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
      description:
        "Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an \"onHide\" when clicked.",
      options: ['static', true, false],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: "'static' | true | false ",
        },
      },
    },
    backdropClassName: {
      description:
        'Add an optional extra class name to .modal-backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    centered: {
      description: 'vertically center the Dialog in the window',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    contentClassName: {
      description: 'Add an optional extra class name to .modal-content',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    dialogAs: {
      description: `A Component type that provides the modal content Markup.
            This is a useful prop when you want to use your own styles and markup to create a custom modal component.`,
      table: {
        defaultValue: {
          summary: '<ModalDialog>',
        },
        type: {
          summary: 'elementType',
        },
      },
    },
    dialogClassName: {
      description: 'A css class to apply to the Modal dialog DOM node.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    enforceFocus: {
      description: `When true The modal will prevent focus from leaving the Modal while open.
            Consider leaving the default value here, as it is necessary to make the Modal work well with assistive
            technologies, such as screen readers.`,
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
    fullscreen: {
      description:
        'Renders a fullscreen modal. Specifying a breakpoint will render the modal as fullscreen below the breakpoint size.',
      options: [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'],
      control: { type: 'select' },
      table: {
        type: {
          summary: "true | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down'",
        },
      },
    },
    keyboard: {
      description: 'Close the modal when escape key is pressed',
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
    manager: {
      description: `A ModalManager instance used to track and manage the state of open Modals.
            Useful when customizing how modals interact within a container`,
      control: 'object',
      table: {
        type: {
          summary: 'object',
        },
      },
    },
    onEnter: {
      description: 'Callback fired before the Modal transitions in',
      action: 'enter',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onEntered: {
      description: 'Callback fired after the Modal finishes transitioning in',
      action: 'entered',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onEntering: {
      description: 'Callback fired as the Modal begins to transition in',
      action: 'entered',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onEscapeKeyDown: {
      description: 'A callback fired when the escape key, if specified in keyboard, is pressed.',
      action: 'escape',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onExit: {
      description: 'Callback fired right before the Modal transitions out',
      action: 'exit',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onExited: {
      description: 'Callback fired after the Modal finishes transitioning out',
      action: 'exited',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onExiting: {
      description: 'Callback fired as the Modal begins to transition out',
      action: 'exiting',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onHide: {
      description:
        'A callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.',
      action: 'hide',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    onShow: {
      description: 'A callback fired when the Modal is opening.',
      action: 'show',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    restoreFocus: {
      description:
        'When true The modal will restore focus to previously focused element once modal is hidden',
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
    scrollable: {
      description:
        'Allows scrolling the ```<Modal.Body>``` instead of the entire Modal when overflowing.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    show: {
      description: 'When true The modal will show itself.',
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
    size: {
      description: `Render a large, extra large or small modal. When not provided,
            the modal is rendered with medium (default) size.`,
      options: ['sm', 'lg', 'xl'],
      control: { type: 'select' },
      table: {
        type: {
          summary: "'sm' | 'lg' | 'xl'",
        },
      },
    },
  },
  parameters: {
    docs: {
      page: ModalDocumentation,
    },
  },
};

export const StaticMarkup = () => (
  <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
);

export const StaticBackdrop = (args) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal {...args} show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don&apos;t even try to press escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const WithoutAnimation = (args) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal {...args} show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you&apos;re reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const VerticallyCentered = (args) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <Modal
        {...args}
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Sizes = (args) => {
  const [smShow, setSmShow] = React.useState(false);
  const [lgShow, setLgShow] = React.useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        {...args}
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Small Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
};

export const Fullscreen = (args) => {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = React.useState(true);
  const [show, setShow] = React.useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal {...args} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
};

export const CustomSizing = (args) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        {...args}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Custom Modal Styling</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur
            enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam
            adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo
            magni incidunt dolore amet atque facilis ipsum deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};
