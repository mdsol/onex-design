import { TextArea } from '../../../../components';

import TextareaMDX from './Textarea.stories.mdx';

export default {
    title: 'Onex/Forms/Textarea',
    component: TextArea,
    argTypes: {},
    parameters: {
        docs: {
            page: TextareaMDX,
        },
    },
};

const Template = (props) => <TextArea {...props} />;

export const Small = Template.bind({});

Small.args = {
    size: 'sm',
    placeholder: 'Message',
};

export const Large = Template.bind({});

Large.args = {
    size: 'lg',
    placeholder: 'Message',
};

export const Label = Template.bind({});

Label.args = {
    label: 'Label',
    size: 'lg',
    placeholder: 'Message',
};

export const HelpText = Template.bind({});

HelpText.args = {
    size: 'lg',
    placeholder: 'Message',
    helpText: 'Help text',
};

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
    size: 'lg',
    placeholder: 'Message',
    errorMessage: 'Error message',
    isError: true,
};

export const MaxLength = Template.bind({});

MaxLength.args = {
    size: 'sm',
    placeholder: 'Message',
    errorMessage: 'Error message',
    value: 'Some message',
    helpText: 'Help text',
    maxNumLength: 50,
};

export const MaxLengthError = Template.bind({});

MaxLengthError.args = {
    size: 'sm',
    placeholder: 'Message',
    errorMessage: 'Error message',
    value: 'This attribute indicates whether the value of the control can be automatically',
    helpText: 'Help text',
    maxNumLength: 50,
};

export const Disabled = Template.bind({});

Disabled.args = {
    size: 'lg',
    placeholder: 'Message',
    helpText: 'Help text',
    maxNumLength: 50,
    disabled: true,
    label: 'Label',
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
    size: 'lg',
    placeholder: 'Message',
    readOnly: true,
    label: 'Label',
    helpText: 'Help text',
    value: 'This attribute indicates whether the value of the control can be automatically',
};

export const Rows = Template.bind({});

Rows.args = {
    size: 'sm',
    placeholder: 'Message',
    rows: 10,
};
