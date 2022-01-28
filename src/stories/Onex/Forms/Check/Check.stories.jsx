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
  size: 'sm',
  checked: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxLarge = Template.bind({});

CheckboxLarge.args = {
  size: 'lg',
  checked: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxIndeterminate = Template.bind({});

CheckboxIndeterminate.args = {
  size: 'lg',
  indeterminate: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxCheckedDisabled = Template.bind({});

CheckboxCheckedDisabled.args = {
  size: 'lg',
  checked: true,
  disabled: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxIndeterminateDisabled = Template.bind({});

CheckboxIndeterminateDisabled.args = {
  size: 'lg',
  indeterminate: true,
  disabled: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxLargeWithLabel = Template.bind({});

CheckboxLargeWithLabel.args = {
  size: 'lg',
  children: 'Label text',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxSmallWithLabel = Template.bind({});

CheckboxSmallWithLabel.args = {
  size: 'sm',
  children: 'Label text',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CheckboxDisabledLargeWithLabel = Template.bind({});

CheckboxDisabledLargeWithLabel.args = {
  size: 'lg',
  children: 'Label text',
  disabled: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioSmall = Template.bind({});

RadioSmall.args = {
  size: 'sm',
  type: 'radio',
  checked: true,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioLarge = Template.bind({});

RadioLarge.args = {
  size: 'lg',
  checked: true,
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioCheckedDisabled = Template.bind({});

RadioCheckedDisabled.args = {
  size: 'lg',
  checked: true,
  disabled: true,
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioLargeWithLabel = Template.bind({});

RadioLargeWithLabel.args = {
  size: 'lg',
  children: 'Label text',
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioSmallWithLabel = Template.bind({});

RadioSmallWithLabel.args = {
  size: 'sm',
  children: 'Label text',
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const RadioDisabledLargeWithLabel = Template.bind({});

RadioDisabledLargeWithLabel.args = {
  size: 'lg',
  children: 'Label text',
  disabled: true,
  type: 'radio',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};
