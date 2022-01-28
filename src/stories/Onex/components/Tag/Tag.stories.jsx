import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import { Tag } from '../../../../components';
import TagMDX from './Tag.stories.mdx';

const icons = { ArrowUp: <ArrowUp />, ArrowDown: <ArrowDown /> };
export default {
  title: 'Onex/Components/Tag',
  component: Tag,
  argTypes: {
    className: 'text',
    dataTestId: 'text',
    size: 'lg',
    variant: 'rounded',
    isRemovable: true,
    children: { control: 'Tag Text' },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          ArrowUp: 'Up',
          ArrowDown: 'Down',
        },
      },
    },
    path: '',
    controlId: 'tagId',
  },
  parameters: {
    docs: {
      page: TagMDX,
    },
  },
};

const Template = (props) => <Tag {...props} />;

export const Small = Template.bind({});

Small.args = {
  className: 'text',
  dataTestId: 'text',
  size: 'lg',
  variant: 'default',
  isRemovable: true,
  children: 'Small',
};

export const Large = Template.bind({});

Large.args = {
  className: 'text',
  dataTestId: 'text',
  size: 'lg',
  variant: 'default',
  isRemovable: true,
  children: 'Large',
};
