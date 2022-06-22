import { useMemo } from 'react';
import { DataGrid, DataGridControl, DataGridName } from '../../components';

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
];

const range = (len) => Array.from({ length: len }, (v, i) => i);

const newPerson = () => ({
  id: 'M123',
  study: 'United States 15',
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
    <DataGrid
      columns={dataGridColumnsProc}
      data={dataGridData}
      sortBy={dataGridSortByProc}
      rowsPerPageOptions={[5, 10]}
      dataGridControlComponent={
        <DataGridControl>
          <DataGridName badgeNumber="100">Test table</DataGridName>
        </DataGridControl>
      }
    />
  );
};

export default DataGridOnex;
