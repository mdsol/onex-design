import { Hint } from '../../../../components';

export default {
  title: 'Onex/Components/Hint',
  component: Hint,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    dataTestId: { control: 'text' },
  },
};

const Template = (props) => <Hint {...props} />;

export const Info = Template.bind({});

Info.args = {
  variant: 'info',
  children: 'Last reforecast was run 01/10/2021, 2:45 PM, by John Doe.',
  dataTestId: 'hint-info',
};

export const Error = Template.bind({});

Error.args = {
  variant: 'error',
  children: 'Last reforecast was run 01/10/2021, 2:45 PM, by John Doe.',
  dataTestId: 'hint-info',
};

export const Warning = Template.bind({});

Warning.args = {
  variant: 'warning',
  children: 'Last reforecast was run 01/10/2021, 2:45 PM, by John Doe.',
  dataTestId: 'hint-info',
};

export const Success = Template.bind({});

Success.args = {
  variant: 'warning',
  children: 'Last reforecast was run 01/10/2021, 2:45 PM, by John Doe.',
  dataTestId: 'hint-info',
};
