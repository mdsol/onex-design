import { BugFill, Search } from 'react-bootstrap-icons';
import { TextField } from '../../../../components';

import TextFieldMDX from './Textfield.stories.mdx';

const icons = { Bug: <BugFill />, Search: <Search /> };

export default {
    title: 'Onex/Forms/TextField',
    component: TextField,
    argTypes: {
        icon: {
            options: Object.keys(icons),
            mapping: icons,
        },
    },
    parameters: {
        docs: {
            page: TextFieldMDX,
        },
    },
};

const Template = (props) => <TextField {...props} />;

export const Small = Template.bind({});

Small.args = {
    label: 'Label',
    size: 'sm',
    placeholder: 'Placeholder',
};

export const Large = Template.bind({});

Large.args = {
    label: 'Label',
    size: 'lg',
    placeholder: 'Placeholder',
};

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
    size: 'lg',
    label: 'Error',
    placeholder: 'Placeholder',
    errorMessage: 'Error message',
    isInvalid: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
    size: 'lg',
    placeholder: 'Placeholder',
    disabled: true,
    label: 'Label',
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
    size: 'lg',
    placeholder: 'Placeholder',
    readOnly: true,
    label: 'Label',
    value: 'Some text',
};

export const Required = Template.bind({});

Required.args = {
    size: 'lg',
    placeholder: 'Placeholder',
    required: true,
    label: 'Required',
};

export const ClearButton = Template.bind({});

ClearButton.args = {
    size: 'lg',
    placeholder: 'Placeholder',
    label: 'Label',
    showClearBtn: true,
    value: 'Some text',
};

export const DefaultIcon = Template.bind({});

DefaultIcon.args = {
    size: 'lg',
    placeholder: 'Placeholder',
    label: 'Label',
    showClearBtn: true,
    showDefaultIcon: true,
};

export const Icon = Template.bind({});

const iconSourceBody = `
<TextField
  size="lg"
  placeholder="Placeholder"
  icon={<BugFill />}
  label="Label"
  showClearBtn
  onChange={() => {}}
/>
`;
Icon.parameters = {
    docs: {
        source: {
            code: iconSourceBody,
        },
    },
};

Icon.args = {
    size: 'lg',
    placeholder: 'Placeholder',
    label: 'Label',
    showClearBtn: true,
    icon: <BugFill />,
};
