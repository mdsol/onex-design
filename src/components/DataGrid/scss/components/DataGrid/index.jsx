import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataGridTable from '../DataGridTable';
import DataGridControl from '../DataGridControl';
import DataGridControlTypes from '../../types/dataGridTypes';

const DataGrid = ({
  className,
  data,
  columns,
  rowsPerPageOptions,
  sortBy,
  dataGridControlProps,
  customGridControl,
  ...accProps
}) => {
  const dataGridClasses = classNames('onex-data-grid', {
    [className]: className,
  });

  return (
    <div className={dataGridClasses}>
      {customGridControl || (dataGridControlProps && <DataGridControl {...dataGridControlProps} />)}
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
  sortBy: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      desc: PropTypes.bool,
    }),
  ),
  multiSort: PropTypes.bool,
  dataGridControlProps: DataGridControlTypes,
  customGridControl: PropTypes.element,
};
/* eslint-enable */

DataGrid.defaultProps = {
  className: undefined,
  data: [{}],
  columns: [],
  rowsPerPageOptions: [],
  sortBy: [],
  multiSort: false,
  dataGridControlProps: null,
  customGridControl: null,
};

export default DataGrid;
