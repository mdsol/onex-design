import { useMemo } from 'react';
import { DataGrid, Icon, Avatar, Badge, Tag } from '../../components';

const handleClick = (row) => {
  console.log('ROW', row);
};

const dataGridColumns = [
  {
    Header: 'ID',
    accessor: 'id',
    isCustom: true,
    hasDivider: true,
  },
  {
    Header: 'Avatar',
    accessor: 'avatar',
    isCustom: true,
  },
  {
    Header: 'Study',
    accessor: 'study',
    isCustom: true,
  },
  {
    Header: 'Country',
    accessor: 'country',
    isCustom: true,
  },
  {
    Header: 'Category',
    accessor: 'category',
    isCustom: true,
  },
  {
    Header: 'Stage',
    accessor: 'stage',
    isEditable: true,
  },
  {
    Header: 'Status',
    accessor: 'status',
    isCustom: true,
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
  stage: 'Test',
  status: {
    component: <Tag isRemovable={false}>Tag</Tag>,
  },
  created: '26 Aug 2020',
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

  const handleUpdateData = (data) => {
    console.log('DATA---', data);
  };

  const handleSelectData = (data) => {
    console.log('SELECTION---', data);
  };

  return (
    <DataGrid
      columns={dataGridColumnsProc}
      data={dataGridData}
      sortBy={dataGridSortByProc}
      rowsPerPageOptions={[5, 10]}
      dataGridControlProps={GridControl}
      handleUpdateData={handleUpdateData}
      useRowSelection
      rowSelectionType="multi"
      handleSelection={handleSelectData}
    />
  );
};

export default DataGridOnex;

export const DataCellWithAvatar = () => (
  <DataGrid cell={{ value: { leadingIcon: <Icon>check_circle</Icon> } }} />
);
