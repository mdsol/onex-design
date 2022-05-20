import { Select } from '../../../../components';

export default {
  title: 'Onex/Forms/Select',
  component: Select,
  argTypes: {
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    options: [
      { value: 'albania', label: 'Albania' },
      { value: 'belgium', label: 'Belgium' },
      { value: 'canada', label: 'Canada' },
    ],
    size: 'md',
    isMulti: false,
    isDisabled: false,
    isInvalid: false,
    errorMessage: {
      type: { name: 'string', required: false },
    },
    selectedValues: [],
    isAsync: false,
  },
};

const Template = (props) => <Select {...props} />;

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
  className: 'select',
  dataTestId: 'select',
  options: [
    { value: 'albania', label: 'Albania' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'canada', label: 'Canada' },
  ],
};

export const Medium = Template.bind({});

Medium.args = {
  size: 'md',
  className: 'select',
  dataTestId: 'select',
  options: [
    { value: 'albania', label: 'Albania' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'canada', label: 'Canada' },
  ],
};

export const WithCheckboxes = Template.bind({});

WithCheckboxes.args = {
  size: 'sm',
  className: 'select',
  dataTestId: 'select',
  options: [
    { value: 'albania', label: 'Albania' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'canada', label: 'Canada' },
  ],
};

export const Multi = Template.bind({});

Multi.args = {
  size: 'md',
  className: 'select',
  dataTestId: 'select',
  options: [
    { value: 'albania', label: 'Albania' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'canada', label: 'Canada' },
  ],
  isMulti: true,
};

export const GroupOption = Template.bind({});

GroupOption.args = {
  size: 'md',
  className: 'select',
  dataTestId: 'select',
  groupedOptions: [
    {
      label: 'Europe',
      options: [
        { value: 'poland', label: 'Poland' },
        { value: 'portugal', label: 'Portugal' },
        { value: 'spain', label: 'Spain' },
      ],
    },
    {
      label: 'South America',
      options: [
        { value: 'brazil', label: 'Brazil' },
        { value: 'colombia', label: 'Colombia' },
        { value: 'peru', label: 'Peru' },
      ],
    },
  ],
  isMulti: true,
  hasClearButton: true,
};

export const Label = Template.bind({});

Label.args = {
  size: 'sm',
  className: 'select',
  dataTestId: 'select',
  label: 'Select country',
  options: [
    { value: 'albania', label: 'Albania' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'canada', label: 'Canada' },
  ],
};

export const HelpText = Template.bind({});

HelpText.args = {
  size: 'sm',
  className: 'select',
  dataTestId: 'select',
  label: 'Select country',
  helpText: 'select one country',
  options: [
    { value: 'albania', label: 'Albania' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'canada', label: 'Canada' },
  ],
};

export const ErrorField = Template.bind({});

ErrorField.args = {
  size: 'sm',
  className: 'select',
  dataTestId: 'select',
  label: 'Select country',
  errorMessage: 'value is required',
  options: [
    { value: 'albania', label: 'Albania' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'canada', label: 'Canada' },
  ],
  isInvalid: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  size: 'sm',
  className: 'select',
  dataTestId: 'select',
  label: 'Select country',
  helpText: 'select one country',
  isDisabled: true,
  options: [
    { value: 'albania', label: 'Albania' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'canada', label: 'Canada' },
  ],
};
