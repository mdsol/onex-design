import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import { Badge } from '../../../../components';

import BudgeMDX from './Badge.stories.mdx';

const icons = { ArrowUp: <ArrowUp />, ArrowDown: <ArrowDown /> };

export default {
    title: 'Onex/Components/Badge',
    component: Badge,
    argTypes: {
        children: { control: 'text' },
        className: { control: 'text' },
        dataTestId: { control: 'text' },
        icon: {
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: 'select',
                labels: {
                    ArrowUp: 'Up',
                    ArrowDown: 'Down',
                },
            },
        },
    },
    parameters: {
        docs: {
            page: BudgeMDX,
        },
    },
};

const Template = (props) => <Badge {...props} />;

export const Primary = Template.bind({});

Primary.args = {
    type: 'primary',
    size: 'sm',
    children: '100',
    className: 'custom-badge',
    dataTestId: 'text-badge-id',
};

export const Important = Template.bind({});

Important.args = {
    type: 'important',
    size: 'sm',
    children: '100',
    className: 'custom-badge',
    dataTestId: 'text-badge-id',
};

export const Default = Template.bind({});

Default.args = {
    type: 'default',
    size: 'sm',
    children: '100',
};

export const DefaultInvert = Template.bind({});

DefaultInvert.args = {
    type: 'default-invert',
    size: 'sm',
    children: '100',
    className: 'custom-badge',
    dataTestId: 'text-badge-id',
};

export const Removed = Template.bind({});

Removed.args = {
    type: 'removed',
    size: 'sm',
    children: '100-',
    className: 'custom-badge',
    dataTestId: 'text-badge-id',
};

export const Added = Template.bind({});

Added.args = {
    type: 'added',
    size: 'sm',
    children: '+100',
    className: 'custom-badge',
    dataTestId: 'text-badge-id',
};

export const Small = Template.bind({});

Small.args = {
    type: 'primary',
    size: 'sm',
    children: '100',
    className: 'custom-badge',
    dataTestId: 'text-badge-id',
};

export const Large = Template.bind({});

Large.args = {
    type: 'primary',
    size: 'lg',
    children: '100',
    className: 'custom-badge',
    dataTestId: 'text-badge-id',
};

export const Icon = Template.bind({});

const iconCodeBody = `
<CustomBadge
    className="custom-badge"
    dataTestId="text-badge-id"
    icon={<ArrowUp />} // you can set your own icon component
    size="lg"
    type="primary"
>
    100
</CustomBadge>
`;

Icon.parameters = {
    docs: {
        source: {
            code: iconCodeBody,
        },
    },
};

Icon.args = {
    type: 'primary',
    size: 'lg',
    children: '100',
    className: 'custom-badge',
    dataTestId: 'text-badge-id',
    icon: icons.ArrowUp,
};
