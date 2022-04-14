import { Check } from '../../../../components';

export default {
  title: 'Onex/Forms/Check',
  component: Check,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    onChange: { action: 'checked' },
  },
};

const Template = (props) => <Check {...props} />;

export const Checkbox = Template.bind({});

Checkbox.args = {
  checked: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxIndeterminate = Template.bind({});

CheckboxIndeterminate.args = {
  indeterminate: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxCheckedDisabled = Template.bind({});

CheckboxCheckedDisabled.args = {
  checked: true,
  disabled: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxIndeterminateDisabled = Template.bind({});

CheckboxIndeterminateDisabled.args = {
  indeterminate: true,
  disabled: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxWithLabel = Template.bind({});

CheckboxWithLabel.args = {
  children: 'Label text',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxDisabledWithLabel = Template.bind({});

CheckboxDisabledWithLabel.args = {
  children: 'Label text',
  disabled: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const Radio = Template.bind({});

Radio.args = {
  type: 'radio',
  checked: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioCheckedDisabled = Template.bind({});

RadioCheckedDisabled.args = {
  checked: true,
  disabled: true,
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioWithLabel = Template.bind({});

RadioWithLabel.args = {
  children: 'Label text',
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioDisabledWithLabel = Template.bind({});

RadioDisabledWithLabel.args = {
  children: 'Label text',
  disabled: true,
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};
