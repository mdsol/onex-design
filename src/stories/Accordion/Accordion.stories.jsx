import Accordion from 'react-bootstrap/Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        defaultActiveKey: {
            description: 'Accordion active key',
            control: {
                type: 'string',
            },
        },
        activeKey: {
            description: 'The current active key that corresponds to the currently expanded card',
            control: {
                type: 'string',
            },
        },
        alwaysOpen: {
            description: 'Allow accordion items to stay open when another item is opened',
            control: {
                type: 'boolean',
            },
        },
        as: {
            description: 'Set a custom element for this component',
            control: {
                type: 'string',
            },
        },
        flush: {
            description: 'Renders accordion edge-to-edge with its parent container',
            control: {
                type: 'boolean',
            },
        },
    },
};

const AccordionTemplate = (args) => (
    <Accordion {...args}>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
);

export const Default = AccordionTemplate.bind({});
