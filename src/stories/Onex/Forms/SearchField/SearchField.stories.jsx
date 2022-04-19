import { SearchField } from '../../../../components';

export default {
  title: 'Onex/Forms/SearchField',
  component: SearchField,
};

const Template = (props) => <SearchField {...props} />;

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
  placeholder: 'Small',
  showClearBtn: true,
};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
  placeholder: 'Large',
  showClearBtn: true,
};

export const DisabledSmall = Template.bind({});

DisabledSmall.args = {
  size: 'sm',
  placeholder: 'Disabled',
  disabled: true,
  label: 'Label',
  showClearBtn: true,
};

export const DisabledLarge = Template.bind({});

DisabledLarge.args = {
  size: 'lg',
  placeholder: 'Disabled',
  disabled: true,
  label: 'Label',
  showClearBtn: true,
};
