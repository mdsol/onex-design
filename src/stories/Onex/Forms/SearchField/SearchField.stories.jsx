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

export const Middle = Template.bind({});

Middle.args = {
  size: 'md',
  placeholder: 'Middle',
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

export const DisabledMiddle = Template.bind({});

DisabledMiddle.args = {
  size: 'md',
  placeholder: 'Disabled',
  disabled: true,
  label: 'Label',
  showClearBtn: true,
};
