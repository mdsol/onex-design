import { Pagination } from '../../../../components';

export default {
  title: 'Onex/Components/Pagination',
  component: Pagination,
  argTypes: {
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    items: [1, 2, 3, 4, 5],
    size: 'lg',
  },
};

const Template = (props) => <Pagination {...props} />;

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
  className: 'pagination',
  dataTestId: 'pagination-id',
  items: [1, 2, 3, 4, 5],
};

export const Large = Template.bind({});

Large.args = {
  size: 'lg',
  className: 'pagination',
  dataTestId: 'pagination',
  items: [1, 2, 3, 4, 5],
};
