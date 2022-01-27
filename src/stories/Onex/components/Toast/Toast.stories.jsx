import { BugFill, ClockFill } from 'react-bootstrap-icons';
import { Toast } from '../../../../components';

import ToastMDX from './Toast.stories.mdx';

const icons = { Bug: <BugFill />, ClockFill: <ClockFill /> };

export default {
    title: 'Onex/Components/Toast',
    component: Toast,
    argTypes: {
        children: { control: 'text' },
        className: { control: 'text' },
        dataTestId: { control: 'text' },
        delay: { control: 'number' },
        icon: {
            options: Object.keys(icons),
            mapping: icons,
        },
    },
    parameters: {
        docs: {
            page: ToastMDX,
        },
    },
};

const Template = (props) => <Toast {...props} />;

export const Info = Template.bind({});

Info.args = {
    id: 'info-toast',
    variant: 'info',
    children: 'Example of an informational banner message. ',
    show: true,
};

export const Success = Template.bind({});

Success.args = {
    id: 'success-toast',
    variant: 'success',
    children: 'Example of a success banner message.',
    show: true,
};

export const Warning = Template.bind({});

Warning.args = {
    id: 'warning-toast',
    variant: 'warning',
    children: 'Example of a warning banner message.',
    show: true,
};

export const Error = Template.bind({});

Error.args = {
    id: 'error-toast',
    variant: 'error',
    children: 'Example of an error banner message.',
    show: true,
};

export const TopStart = Template.bind({});

TopStart.args = {
    id: 'top-start-toast',
    variant: 'info',
    children: 'Example of an info banner message.',
    show: true,
    position: 'top-start',
};

export const TopCenter = Template.bind({});

TopCenter.args = {
    id: 'top-center-toast',
    variant: 'success',
    children: 'Example of an info banner message.',
    show: true,
    position: 'top-center',
};

export const TopEnd = Template.bind({});

TopEnd.args = {
    id: 'top-end-toast',
    variant: 'warning',
    children: 'Example of an info banner message.',
    show: true,
    position: 'top-end',
};

export const MiddleStart = Template.bind({});

MiddleStart.args = {
    id: 'middle-start-toast',
    variant: 'info',
    children: 'Example of an info banner message.',
    show: true,
    position: 'middle-start',
};

export const MiddleCenter = Template.bind({});

MiddleCenter.args = {
    id: 'middle-center-toast',
    variant: 'success',
    children: 'Example of an info banner message.',
    show: true,
    position: 'middle-center',
};

export const MiddleEnd = Template.bind({});

MiddleEnd.args = {
    id: 'middle-end-toast',
    variant: 'warning',
    children: 'Example of an info banner message.',
    show: true,
    position: 'middle-end',
};

export const BottomStart = Template.bind({});

BottomStart.args = {
    id: 'bottom-start-toast',
    variant: 'info',
    children: 'Example of an info banner message.',
    show: true,
    position: 'bottom-start',
};

export const BottomCenter = Template.bind({});

BottomCenter.args = {
    id: 'bottom-center-toast',
    variant: 'success',
    children: 'Example of an info banner message.',
    show: true,
    position: 'bottom-center',
};

export const BottomEnd = Template.bind({});

BottomEnd.args = {
    id: 'bottom-end-toast',
    variant: 'warning',
    children: 'Example of an info banner message.',
    show: true,
    position: 'bottom-end',
};

export const CustomIcon = Template.bind({});

CustomIcon.args = {
    id: 'custom-icon-toast',
    variant: 'success',
    children: 'Example of an success banner message.',
    show: true,
    showDefaultIcon: false,
    icon: <ClockFill />,
};
