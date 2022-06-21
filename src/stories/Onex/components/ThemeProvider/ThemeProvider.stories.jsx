import { Button, TextField } from '../../../../components';
import ThemeProvider from '../../../../components/ThemeProvider';

export default {
  title: 'Onex/Components/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    children: { control: 'object' },
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    id: { control: 'text' },
  },
};

const Template = (props) => <ThemeProvider {...props} />;

// Variants start
export const Demo = Template.bind({});

Demo.args = {
  id: 'demo-themeprovider',
  children: (
    <>
      <TextField />
      <Button>Search</Button>
    </>
  ),
};
