import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { TextField } from '../../../../components';

import TextFieldMDX from './Textfield.stories.mdx';

const icons = { Bird: <FlutterDashIcon />, Search: <SearchRoundedIcon /> };

export default {
  title: 'Onex/Forms/TextField',
  component: TextField,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
    trailingIcon: {
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
  placeholder: 'Small',
  helpText: 'Help text',
  showClearBtn: true,
};

export const Large = Template.bind({});

Large.args = {
  label: 'Label',
  size: 'lg',
  placeholder: 'Large',
  helpText: 'Help text',
  showClearBtn: true,
};

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
  size: 'lg',
  label: 'Label',
  placeholder: 'Placeholder',
  errorMessage: 'Error message',
  isInvalid: true,
  showClearBtn: true,
};

export const HelpText = Template.bind({});

HelpText.args = {
  size: 'lg',
  label: 'Label',
  placeholder: 'Placeholder',
  helpText: 'Help text',
  showClearBtn: true,
};

export const TrailingIcon = Template.bind({});

TrailingIcon.args = {
  size: 'lg',
  label: 'Label',
  placeholder: 'Placeholder',
  trailingIcon: <InfoRoundedIcon />,
  showClearBtn: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  size: 'lg',
  placeholder: 'Disabled',
  disabled: true,
  label: 'Label',
  helpText: 'Help text',
  showClearBtn: true,
  showDefaultIcon: true,
};

export const Required = Template.bind({});

Required.args = {
  size: 'lg',
  placeholder: 'Placeholder',
  required: true,
  label: 'Required',
  showClearBtn: true,
};

export const ClearButton = Template.bind({});

ClearButton.args = {
  size: 'sm',
  placeholder: 'Placeholder',
  label: 'Label',
  showClearBtn: true,
  value: 'Some text value',
};

export const SearchFieldSmall = Template.bind({});

SearchFieldSmall.args = {
  size: 'sm',
  placeholder: 'Placeholder',
  showClearBtn: true,
  showDefaultIcon: true,
};

export const SearchFieldLarge = Template.bind({});

SearchFieldLarge.args = {
  size: 'lg',
  placeholder: 'Placeholder',
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
  icon: <FlutterDashIcon />,
};
