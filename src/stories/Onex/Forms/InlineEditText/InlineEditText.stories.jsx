import { InlineEditText } from '../../../../components';
import InlineEditTextMDX from './InlineEditText.stories.mdx';

export default {
  title: 'Onex/Forms/InlineEditText',
  component: InlineEditText,
  argTypes: {
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    size: 'lg',
    disabled: false,
    isInvalid: false,
    errorMessage: {
      type: { name: 'string', required: false },
    },
    placeholder: 'Edit',
  },
  parameters: {
    docs: {
      page: InlineEditTextMDX,
    },
  },
};

const Template = (props) => <InlineEditText {...props} />;

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
  className: 'inlineEditText',
  dataTestId: 'inlineEditText',
  placeholder: 'Edit',
};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
  className: 'inlineEditText',
  dataTestId: 'inlineEditText',
  placeholder: 'Edit',
};
