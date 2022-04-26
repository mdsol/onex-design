import { TextArea } from '../../../../components';

export default {
  title: 'Onex/Forms/Textarea',
  component: TextArea,
  argTypes: {},
};

const Template = (props) => <TextArea {...props} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Message',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  placeholder: 'Message',
  disabled: true,
};

export const DefaultError = Template.bind({});
DefaultError.args = {
  placeholder: 'Message',
  isError: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
  placeholder: 'Message',
};

export const LabelDisabled = Template.bind({});
LabelDisabled.args = {
  label: 'Label',
  placeholder: 'Message',
  disabled: true,
};

export const LabelError = Template.bind({});
LabelError.args = {
  label: 'Label',
  placeholder: 'Message',
  isError: true,
};

export const LabelNumCounter = Template.bind({});
LabelNumCounter.args = {
  label: 'Label',
  placeholder: 'Message',
  maxNumLength: 240,
  errorMessage: 'Number of characters exceeded',
};

export const LabelNumCounterDisabled = Template.bind({});
LabelNumCounterDisabled.args = {
  label: 'Label',
  placeholder: 'Message',
  disabled: true,
  maxNumLength: 240,
};

export const LabelNumCounterError = Template.bind({});
LabelNumCounterError.args = {
  label: 'Label',
  placeholder: 'Message',
  isError: true,
  maxNumLength: -5,
  errorMessage: 'Number of characters exceeded',
};

export const LabelHelpText = Template.bind({});
LabelHelpText.args = {
  label: 'Label',
  placeholder: 'Message',
  helpText: 'Help text',
  value: 'Filled',
};

export const LabelHelpTextError = Template.bind({});
LabelHelpTextError.args = {
  label: 'Label',
  placeholder: 'Message',
  helpText: 'Help text',
  isError: true,
};

export const LabelHelpTextDisabled = Template.bind({});
LabelHelpTextDisabled.args = {
  label: 'Label',
  placeholder: 'Message',
  helpText: 'Help text',
  disabled: true,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
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
