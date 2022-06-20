import { useMemo } from 'react';
import { StyledDataGrid } from '../../components';

const dataGridColumns = [
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
];

const dataGridSortBy = [
  {
    id: 'id',
    desc: true,
  },
  {
    id: 'study',
    desc: false,
  },
];

const GridControl = { title: 'Title' };

const range = (len) => Array.from({ length: len }, (v, i) => i);

const newPerson = () => ({
  id: 'M123',
  study: { value: 'United States 15', leadingIcon: <Icon /> },
  country: 'United States 15',
  category: 'Management',
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

  return (
    <StyledDataGrid
      columns={dataGridColumnsProc}
      data={dataGridData}
      sortBy={dataGridSortByProc}
      rowsPerPageOptions={[5, 10]}
      dataGridControlProps={GridControl}
    />
  );
};

export default DataGridOnex;
