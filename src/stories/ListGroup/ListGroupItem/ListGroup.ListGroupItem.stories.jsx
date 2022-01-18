import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import ListGroupItemMDX from './ListGroup.ListGroupItem.stories.mdx';

const variantsItem = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    dark: 'dark',
    light: 'light',
};

export default {
    title: 'Components/ListGroup/ListGroupItem',
    component: ListGroup.Item,
    argTypes: {
        as: {
            control: 'text',
        },
        action: {
            control: 'boolean',
        },
        active: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        eventKey: {
            control: 'text',
        },
        href: {
            control: 'text',
        },
        variant: {
            options: Object.keys(variantsItem),
            control: {
                type: 'select',
                label: variantsItem,
            },
        },
        children: { control: 'object' },
    },
    parameters: {
        docs: {
            page: ListGroupItemMDX,
        },
    },
};

const Template = (props) => <ListGroup.Item {...props} />;

export const Primary = Template.bind({});

Primary.args = {
    variant: 'primary',
    as: 'div',
    active: false,
    action: false,
    disabled: false,
    eventKey: '',
    href: '#primary',
    children: 'Primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
    variant: 'secondary',
    as: 'div',
    active: false,
    action: false,
    disabled: false,
    eventKey: '',
    href: '#secondary',
    children: 'Secondary',
};

export const Success = Template.bind({});

Success.args = {
    variant: 'success',
    active: false,
    action: false,
    disabled: false,
    eventKey: '',
    href: '#success',
    children: 'Success',
    as: 'div',
};

export const Warning = Template.bind({});

Warning.args = {
    variant: 'warning',
    active: false,
    action: false,
    disabled: false,
    eventKey: '',
    href: '#warning',
    children: 'Warning',
    as: 'div',
};

export const Danger = Template.bind({});

Danger.args = {
    variant: 'danger',
    active: false,
    action: false,
    disabled: false,
    eventKey: '',
    href: '#danger',
    children: 'Danger',
    as: 'div',
};

export const Info = Template.bind({});

Info.args = {
    variant: 'info',
    active: false,
    action: false,
    disabled: false,
    eventKey: '',
    href: '#info',
    children: 'Info',
    as: 'div',
};

export const Dark = Template.bind({});

Dark.args = {
    variant: 'dark',
    active: false,
    action: false,
    disabled: false,
    eventKey: '',
    href: '#dark',
    children: 'Dark',
    as: 'div',
};

export const Light = Template.bind({});

Light.args = {
    variant: 'light',
    active: false,
    action: false,
    disabled: false,
    eventKey: '',
    href: '#light',
    children: 'Light',
    as: 'div',
};

export const Active = Template.bind({});

Active.args = {
    variant: 'light',
    active: true,
    action: false,
    disabled: false,
    eventKey: '',
    href: '#active',
    children: 'Active',
};

export const Disabled = Template.bind({});

Disabled.args = {
    variant: 'primary',
    active: false,
    action: false,
    disabled: true,
    eventKey: '',
    href: '#disabled',
    children: 'Disabled',
};
