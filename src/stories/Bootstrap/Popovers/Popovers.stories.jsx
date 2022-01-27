import { Popover, OverlayTrigger, Button } from '../../../components';
import PopoverDocumentation from './Popovers.stories.mdx';

export default {
    title: 'Bootstrap/Components/Popover',
    component: Popover,
    argTypes: {
        arrowProps: {
            description: `An Overlay injected set of props for positioning the popover arrow.
            This is generally provided by the Overlay component positioning the popover`,
            table: {
                type: {
                    summary: 'shape',
                },
            },
        },
        body: {
            description: `When this prop is set, it creates a Popover with a Popover.
            Body inside passing the children directly to it`,
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        id: {
            description: 'An html id attribute, necessary for accessibility',
            control: 'string',
            required: true,
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        placement: {
            description: `Sets the direction the Popover is positioned towards.
            This is generally provided by the Overlay component positioning the popover`,
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
        popper: {
            table: {
                type: {
                    summary: 'object',
                },
            },
        },
        show: {
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        bsPrefix: {
            description: `Change the underlying component CSS base class name and modifier class names prefix.
                    This is an escape hatch for working with heavily customized bootstrap css.`,
            table: {
                defaultValue: {
                    summary: 'popover',
                },
                type: {
                    summary: 'string',
                },
            },
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            page: PopoverDocumentation,
        },
    },
};

const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Popover right</Popover.Header>
        <Popover.Body>
            And here some <strong>amazing</strong> content. It very engaging. right?
        </Popover.Body>
    </Popover>
);

export const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
);

export const Top = (args) => {
    const { placement } = args;
    return (
        <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
                <Popover {...args}>
                    <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                    <Popover.Body>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                </Popover>
            }
        >
            <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
    );
};

Top.args = {
    placement: 'top',
    id: 'popover-positioned-top',
};

export const Right = (args) => {
    const { placement } = args;
    return (
        <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
                <Popover {...args}>
                    <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                    <Popover.Body>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                </Popover>
            }
        >
            <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
    );
};

Right.args = {
    placement: 'right',
    id: 'popover-positioned-right',
};

export const Left = (args) => {
    const { placement } = args;
    return (
        <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
                <Popover {...args}>
                    <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                    <Popover.Body>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                </Popover>
            }
        >
            <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
    );
};

Left.args = {
    placement: 'left',
    id: 'popover-positioned-left',
};

export const Bottom = (args) => {
    const { placement } = args;
    return (
        <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
                <Popover {...args}>
                    <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                    <Popover.Body>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                </Popover>
            }
        >
            <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
    );
};

Bottom.args = {
    placement: 'bottom',
    id: 'popover-positioned-bottom',
};
