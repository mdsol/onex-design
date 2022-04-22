import { TextField } from '../../../../components';

export default {
  title: 'Onex/Forms/TextField',
  component: TextField,
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

export const Disabled = Template.bind({});

Disabled.args = {
  size: 'lg',
  placeholder: 'Disabled',
  disabled: true,
  label: 'Label',
  helpText: 'Help text',
  showClearBtn: true,
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

export const PasswordSmall = Template.bind({});

PasswordSmall.args = {
  size: 'sm',
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'password',
};

export const PasswordLarge = Template.bind({});

PasswordLarge.args = {
  size: 'sm',
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'password',
};
