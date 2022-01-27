import React from 'react';
import { Offcanvas, Button } from '../../../components';
import OffcanvasDocumentation from './Offcanvas.stories.mdx';

export default {
    title: 'Bootstrap/Components/Offcanvas',
    component: Offcanvas,
    argTypes: {
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
            description:
                'A callback fired when the escape key, if specified in keyboard, is pressed.',
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
        placement: {
            description: 'Which side of the viewport the offcanvas will appear from.',
            options: ['start', 'end', 'top', 'bottom'],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'start',
                },
                type: {
                    summary: "'start' | 'end' | 'top' | 'bottom'",
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
    parameters: {
        docs: {
            page: OffcanvasDocumentation,
        },
    },
};

const OffcanvasPlacementTemplate = (args) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { placement } = args;

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {placement}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...args}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have
                    chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export const StartPlacement = OffcanvasPlacementTemplate.bind({});
StartPlacement.args = {
    placement: 'start',
};

export const EndPlacement = OffcanvasPlacementTemplate.bind({});
EndPlacement.args = {
    placement: 'end',
};

export const TopPlacement = OffcanvasPlacementTemplate.bind({});
TopPlacement.args = {
    placement: 'top',
};

export const BottomPlacement = OffcanvasPlacementTemplate.bind({});
BottomPlacement.args = {
    placement: 'bottom',
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
            <Offcanvas show={show} onHide={handleClose} {...args}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have
                    chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export const EnableBackdrop = OffcanvasBackdropTemplate.bind({});
EnableBackdrop.args = {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,
};

export const DisableBackdrop = OffcanvasBackdropTemplate.bind({});
DisableBackdrop.args = {
    name: 'Disable backdrop',
    scroll: false,
    backdrop: false,
};

export const EnableScrolling = OffcanvasBackdropTemplate.bind({});
EnableScrolling.args = {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
};

export const EnableScrollingBackdrop = OffcanvasBackdropTemplate.bind({});
EnableScrollingBackdrop.args = {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
};
