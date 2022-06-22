import { useMemo } from 'react';
import { DataGrid, Icon, Avatar, Badge, Tag } from '../../components';

const dataGridColumns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Avatar',
    accessor: 'avatar',
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
    Header: 'Stage',
    accessor: 'stage',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Created',
    accessor: 'created',
  },
];

const dataGridSortBy = [
  {
    id: 'id',
    desc: true,
  },
];

const GridControl = { title: 'Title' };

const range = (len) => Array.from({ length: len }, (v, i) => i);

const newPerson = () => ({
  id: 'M123',
  avatar: { component: <Avatar /> },
  study: {
    value: 'United States 15',
    leadingIcon: <Icon>check_circle</Icon>,
    trailingIcon: <Icon>info</Icon>,
  },
  country: { value: 'United States 15', leadingIcon: <Avatar /> },
  category: {
    value: 'Management',
    leadingIcon: (
      <Badge variant="status-icon" type="default">
        <Icon>flag</Icon>
      </Badge>
    ),
  },
  stage: {
    component: (
      <Badge variant="status" type="default">
        default
      </Badge>
    ),
  },
  status: {
    component: <Tag isRemovable={false}>Tag</Tag>,
  },
  created: { value: '26 Aug 2020', trailingIcon: <Badge type="default">100</Badge> },
});

const makeData = (...lens) => {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => ({
      ...newPerson(),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
    }));
  };

  return makeDataLevel();
};

const DataGridOnex = () => {
  const dataGridData = useMemo(() => makeData(10), []);
  const dataGridColumnsProc = useMemo(() => dataGridColumns, []);
  const dataGridSortByProc = useMemo(() => dataGridSortBy, []);

  return (
    <DataGrid
      columns={dataGridColumnsProc}
      data={dataGridData}
      sortBy={dataGridSortByProc}
      rowsPerPageOptions={[5, 10]}
      dataGridControlProps={GridControl}
    />
  );
};

export default DataGridOnex;
