import { InlineEditSelect } from '../../../../components';

export default {
  title: 'Onex/Forms/InlineEditSelect',
  component: InlineEditSelect,
  argTypes: {
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    selectOptions: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
    size: 'lg',
    isMulti: true,
    disabled: false,
    isInvalid: false,
    errorMessage: {
      type: { name: 'string', required: false },
    },
    selectedOptions: [],
  },
};

const Template = (props) => <InlineEditSelect {...props} />;

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
  className: 'select',
  dataTestId: 'select',
  selectOptions: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
  isMulti: true,
  selectedOptions: [],
};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
  className: 'select',
  dataTestId: 'select',
  selectOptions: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
  isMulti: true,
  selectedOptions: [],
};
