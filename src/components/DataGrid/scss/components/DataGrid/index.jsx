import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataGridTable from '../DataGridTable';

const DataGrid = ({
  className,
  data,
  columns,
  rowsPerPageOptions,
  dataGridControlComponent,
  sortBy,
  ...accProps
}) => {
  const dataGridClasses = classNames('onex-data-grid', {
    [className]: className,
  });

  return (
    <div className={dataGridClasses}>
      {dataGridControlComponent}
      <DataGridTable
        columns={columns}
        data={data}
        rowsPerPageOptions={rowsPerPageOptions}
        sortBy={sortBy}
        {...accProps}
      />
    </div>
  );
};

/* eslint-disable */
DataGrid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          Header: PropTypes.string,
          accessor: PropTypes.string,
        }),
      ),
    }),
  ),
  data: PropTypes.array,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  dataGridControlComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  sortBy: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      desc: PropTypes.bool,
    }),
  ),
};
/* eslint-enable */

DataGrid.defaultProps = {
  className: undefined,
  data: [{}],
  columns: [],
  rowsPerPageOptions: [],
  dataGridControlComponent: undefined,
  sortBy: [],
};

export default DataGrid;
