import { TextField } from '../../../../components';

const helpPassText = {
  weak: 'Weak',
  medium: 'Medium',
  strong: 'Strong',
};

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

export const Middle = Template.bind({});

Middle.args = {
  label: 'Label',
  size: 'md',
  placeholder: 'Middle',
  helpText: 'Help text',
  showClearBtn: true,
};

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
  size: 'md',
  label: 'Label',
  placeholder: 'Placeholder',
  errorMessage: 'Error message',
  isInvalid: true,
  showClearBtn: true,
};

export const HelpText = Template.bind({});

HelpText.args = {
  size: 'md',
  label: 'Label',
  placeholder: 'Placeholder',
  helpText: 'Help text',
  showClearBtn: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  size: 'md',
  placeholder: 'Disabled',
  disabled: true,
  label: 'Label',
  helpText: 'Help text',
  showClearBtn: true,
};

export const Required = Template.bind({});

Required.args = {
  size: 'md',
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

export const PasswordMiddle = Template.bind({});

PasswordMiddle.args = {
  size: 'sm',
  placeholder: 'Placeholder',
  label: 'Label',
  type: 'password',
};

export const PasswordWeak = Template.bind({});

PasswordWeak.args = {
  size: 'sm',
  placeholder: 'Placeholder',
  label: 'Password',
  type: 'password',
  value: '123',
  passwordVariant: 'weak',
  passwordHelpText: helpPassText,
};

export const PasswordMedium = Template.bind({});

PasswordMedium.args = {
  size: 'sm',
  placeholder: 'Placeholder',
  label: 'Password',
  type: 'password',
  value: '1234658',
  passwordVariant: 'medium',
  passwordHelpText: helpPassText,
};

export const PasswordStrong = Template.bind({});

PasswordStrong.args = {
  size: 'sm',
  placeholder: 'Placeholder',
  label: 'Password',
  type: 'password',
  value: '1234658',
  passwordVariant: 'strong',
  passwordHelpText: helpPassText,
};
