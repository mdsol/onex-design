import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import ListGroupMDX from './ListGroup.ListGroup.stories.mdx';

const horizontalTypes = {
    true: true,
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
};

export default {
    title: 'Components/ListGroup/ListGroup',
    component: ListGroup,
    argTypes: {
        as: {
            control: 'text',
        },
        numbered: {
            control: 'boolean',
        },
        horizontal: {
            options: Object.keys(horizontalTypes),
            control: { type: 'select', label: horizontalTypes },
        },
        variant: {
            options: ['flush'],
            control: { type: 'check' },
        },
        children: { control: 'object' },
    },
    parameters: {
        docs: {
            page: ListGroupMDX,
        },
    },
};

const Template = (props) => <ListGroup {...props} />;

function alertClicked() {
    alert('You clicked the third ListGroupItem');
}

export const Actionable = Template.bind({});

Actionable.args = {
    defaultActiveKey: '#link1',
    variant: undefined,
    as: 'ul',
    horizontal: undefined,
    numbered: undefined,
    children: (
        <>
            <ListGroup.Item action href="#link1">
                Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
                This one is a button
            </ListGroup.Item>
        </>
    ),
};

export const Flush = Template.bind({});

Flush.args = {
    variant: 'flush',
    as: 'ul',
    horizontal: undefined,
    numbered: undefined,
    children: (
        <>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </>
    ),
};

export const Numbered = Template.bind({});

Numbered.args = {
    variant: undefined,
    as: 'ol',
    horizontal: undefined,
    numbered: true,
    children: (
        <>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        </>
    ),
};

export const Horizontal = Template.bind({});

Horizontal.args = {
    variant: undefined,
    as: 'ol',
    horizontal: true,
    numbered: undefined,
    children: (
        <>
            <ListGroup.Item>This</ListGroup.Item>
            <ListGroup.Item>ListGroup</ListGroup.Item>
            <ListGroup.Item>renders</ListGroup.Item>
            <ListGroup.Item>horizontally!</ListGroup.Item>
        </>
    ),
};

export const ContextualClasses = Template.bind({});

ContextualClasses.args = {
    variant: undefined,
    as: 'ol',
    horizontal: undefined,
    numbered: undefined,
    children: (
        <>
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item action variant="primary">
                Primary
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
                Secondary
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
                Success
            </ListGroup.Item>
            <ListGroup.Item action variant="danger">
                Danger
            </ListGroup.Item>
            <ListGroup.Item action variant="warning">
                Warning
            </ListGroup.Item>
            <ListGroup.Item action variant="info">
                Info
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
                Light
            </ListGroup.Item>
            <ListGroup.Item action variant="dark">
                Dark
            </ListGroup.Item>
        </>
    ),
};
