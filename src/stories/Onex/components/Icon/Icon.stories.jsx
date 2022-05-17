import { Icon } from '../../../../components';

export default {
  title: 'Onex/Components/Icon',
  component: Icon,
  argTypes: {
    children: {
      description: 'The content of the Icon',
      control: 'text',
    },
    className: {
      description: 'The className to set the styles for Icon',
      control: 'text',
    },
  },
};

const Template = (props) => <Icon {...props} />;

export const Default = Template.bind({});

Default.args = {
  children: 'account_circle',
};
