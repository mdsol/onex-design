import { DataGrid } from '../../../../components';
import DataGridMDX from './DataGrid.stories.mdx';

export default {
  title: 'Onex/Components/DataGrid',
  component: DataGrid,
  argTypes: {
    className: { control: 'text' },
    columns: [
      {
        Header: 'Hospital',
        columns: [
          {
            Header: 'ID',
            accessor: 'id',
          },
          {
            Header: 'Study',
            accessor: 'study',
          },
          {
            Header: 'Country',
            accessor: 'country',
          },
          {
            Header: 'Category',
            accessor: 'category',
          },
          {
            Header: 'Created',
            accessor: 'created',
          },
        ],
      },
    ],
    data: [
      {
        id: 'M12345',
        study: `United States${Math.floor(Math.random() * 30)}`,
        country: `United States${Math.floor(Math.random() * 1000)}`,
        category: 'Manegement',
        created: '26 Aug 20100',
      },
    ],
    rowsDividers: [5, 10, 15, 20],
  },
  parameters: {
    docs: {
      page: DataGridMDX,
    },
  },
};

const Template = (props) => <DataGrid {...props} />;

export const Default = Template.bind({});

Default.args = {
  className: 'onex-dataGrid',
  columns: [
    {
      Header: 'Hospital',
      columns: [
        {
          Header: 'ID',
          accessor: 'id',
        },
        {
          Header: 'Study',
          accessor: 'study',
        },
        {
          Header: 'Country',
          accessor: 'country',
        },
        {
          Header: 'Category',
          accessor: 'category',
        },
        {
          Header: 'Created',
          accessor: 'created',
        },
      ],
    },
  ],
  data: [
    {
      id: 'M123',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 2020',
    },
    {
      id: 'M12345',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 20100',
    },
    {
      id: 'M123',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 2020',
    },
    {
      id: 'M12345',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 20100',
    },
    {
      id: 'M123',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 2020',
    },
    {
      id: 'M12345',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 20100',
    },
    {
      id: 'M123',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 2020',
    },
    {
      id: 'M12345',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 20100',
    },
    {
      id: 'M123',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 2020',
    },
    {
      id: 'M12345',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 20100',
    },
    {
      id: 'M123',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 2020',
    },
    {
      id: 'M12345',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 20100',
    },
    {
      id: 'M123',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 2020',
    },
    {
      id: 'M12345',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 20100',
    },
    {
      id: 'M123',
      study: `United States${Math.floor(Math.random() * 30)}`,
      country: `United States${Math.floor(Math.random() * 1000)}`,
      category: 'Manegement',
      created: '26 Aug 2020',
    },
  ],
  rowsDividers: [5, 10, 15, 20],
};
