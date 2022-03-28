import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RowsSection from './components/RowsSection';
import TableControls from './components/TableControls';
import makeData from '../makeData';

const DataGrid = ({ className }) => {
  const sections = React.useMemo(
    () => [
      [
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
      [
        {
          Header: 'Hospital 1',
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
    ],
    [],
  );

  const data = React.useMemo(() => [makeData(10), makeData(10)], []);

  const dataGridClasses = classNames('onex-dataGrid', {
    [className]: className,
  });

  return (
    <div className={dataGridClasses}>
      <TableControls />
      {sections.map((section, index) => (
        <RowsSection columns={section} data={data[index]} />
      ))}
    </div>
  );
};

DataGrid.propTypes = {
  className: PropTypes.string,
};

DataGrid.defaultProps = {
  className: undefined,
};

export default DataGrid;
