import { CheckCircleFill, Dice4Fill } from 'react-bootstrap-icons';
import { ToggleButton } from '../../../../components';
import ToggleButtonDocumentation from './ToggleButton.stories.mdx';

export default {
  title: 'Onex/Components/Toggle/ToggleButton',
  component: ToggleButton,
  argTypes: {
    children: {
      description: 'The content of the component',
      control: 'text',
    },
    className: {
      description: 'Name of the CSS class',
      control: 'text',
    },
    dataTestId: {
      description: 'Id of the component for testing',
    },
    disabled: {
      description: 'The disabled state of both the label and input',
      control: 'boolean',
    },
    id: {
      description: '```id``` is required for button clicks to toggle input',
      control: 'text',
    },
    name: {
      description:
        'The HTML input name, used to group like checkboxes or radio buttons together semantically',
      control: 'text',
    },
    value: {
      description:
        "The value of the input, should be unique amongst it's siblings when nested in a ```ToggleButtonGroup```",
      control: 'text',
    },
  },
  parameters: {
    docs: {
      page: ToggleButtonDocumentation,
    },
  },
};

const ToggleButtonTemplate = (args) => <ToggleButton {...args} />;

export const Default = ToggleButtonTemplate.bind({});
Default.args = {
  id: 'id-toggle-button-default',
  name: 'toggle-button-default',
  children: 'Caption',
  value: 1,
};

export const WithIcon = ToggleButtonTemplate.bind({});
const withIconCodeBody = `
<CustomToggleButton
id="id-toggle-button-with-icon"
name="toggle-button-with-icon"
value={1}
>
<>
<CheckCircleFill />
<span> Caption</span>
<>
</CustomToggleButton>
`;
WithIcon.parameters = {
  docs: {
    source: {
      code: withIconCodeBody,
    },
  },
};
WithIcon.args = {
  id: 'id-toggle-button-with-icon',
  name: 'toggle-button-with-icon',
  children: (
    <>
      <CheckCircleFill />
      <span> Caption </span>
    </>
  ),
  value: 1,
};

export const Icon = ToggleButtonTemplate.bind({});
const iconCodeBody = `
<CustomToggleButton
id="id-toggle-button-with-icon"
name="toggle-button-with-icon"
value={1}
>
<Dice4Fill />
</CustomToggleButton>
`;
Icon.parameters = {
  docs: {
    source: {
      code: iconCodeBody,
    },
  },
};
Icon.args = {
  id: 'id-toggle-button-icon',
  name: 'toggle-button-icon',
  children: <Dice4Fill />,
  value: 1,
};

export const Disabled = ToggleButtonTemplate.bind({});
Disabled.args = {
  disabled: true,
  id: 'id-toggle-button-disabled',
  name: 'toggle-button-disabled',
  children: 'Caption',
  value: 1,
};
