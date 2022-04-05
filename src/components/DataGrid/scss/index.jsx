import PropTypes from 'prop-types';
import classNames from 'classnames';
import RowsSection from './components/RowsSection';
import TableControls from './components/TableControls';

const DataGrid = ({ className, data, columns, rowsDividers }) => {
  const dataGridClasses = classNames('onex-dataGrid', {
    [className]: className,
  });

  return (
    <div className={dataGridClasses}>
      <TableControls title={columns[0].Header} rowsQuantity={data.length} />
      <RowsSection columns={columns} data={data} rowsDividers={rowsDividers} />
    </div>
  );
};

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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      study: PropTypes.string,
      country: PropTypes.string,
      category: PropTypes.string,
      created: PropTypes.string,
    }),
  ),
  rowsDividers: PropTypes.arrayOf(PropTypes.number),
};

DataGrid.defaultProps = {
  className: undefined,
  data: [{}],
  columns: [],
  rowsDividers: [],
};

export default DataGrid;
