import { Check } from '../../../../components';

import CheckMDX from './Check.stories.mdx';

export default {
  title: 'Onex/Forms/Check',
  component: Check,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    onChange: { action: 'checked' },
  },
  parameters: {
    docs: {
      page: CheckMDX,
    },
  },
};

const Template = (props) => <Check {...props} />;

export const CheckboxSmall = Template.bind({});

CheckboxSmall.args = {
  checked: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxLarge = Template.bind({});

CheckboxLarge.args = {
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

export const CheckboxLargeWithLabel = Template.bind({});

CheckboxLargeWithLabel.args = {
  children: 'Label text',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxSmallWithLabel = Template.bind({});

CheckboxSmallWithLabel.args = {
  children: 'Label text',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxDisabledLargeWithLabel = Template.bind({});

CheckboxDisabledLargeWithLabel.args = {
  children: 'Label text',
  disabled: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioSmall = Template.bind({});

RadioSmall.args = {
  type: 'radio',
  checked: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioLarge = Template.bind({});

RadioLarge.args = {
  checked: true,
  type: 'radio',
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

export const RadioLargeWithLabel = Template.bind({});

RadioLargeWithLabel.args = {
  children: 'Label text',
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioSmallWithLabel = Template.bind({});

RadioSmallWithLabel.args = {
  children: 'Label text',
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioDisabledLargeWithLabel = Template.bind({});

RadioDisabledLargeWithLabel.args = {
  children: 'Label text',
  disabled: true,
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};
