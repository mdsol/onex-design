import { Switch } from '../../../../components';
import SwitchDocumentation from './Switch.stories.mdx';

export default {
    title: 'Onex/Components/Switch',
    component: Switch,
    argTypes: {
        checked: {
            description: 'If ```true```, the component is checked',
        },
        className: {
            description: 'Name of the CSS class',
            control: 'text',
        },
        dataTestId: {
            description: 'Id of the component for testing',
            control: 'text',
        },
        disabled: {
            description: 'If ```true```, the component is disabled',
        },
        id: {
            description: 'An html id attribute for the Switch component',
            control: 'text',
        },
        label: {
            description: 'Label for the control',
        },
        onChange: {
            description: 'Callback fired when the state is changed.',
            action: 'change',
        },
    },
    parameters: {
        docs: {
            page: SwitchDocumentation,
        },
    },
};

const SwitchTemplate = (args) => <Switch {...args} />;

export const Default = SwitchTemplate.bind({});
Default.args = {
    id: 'custom-default-switch',
};

export const Checked = SwitchTemplate.bind({});
Checked.args = {
    id: 'custom-checked-switch',
    checked: true,
};

export const Disabled = SwitchTemplate.bind({});
Disabled.args = {
    id: 'custom-disabled-switch',
    disabled: true,
};

export const WithLabel = SwitchTemplate.bind({});
WithLabel.args = {
    id: 'custom-checked-disabled-switch',
    label: 'Test switch',
    checked: true,
};
