import PropTypes from 'prop-types';
import classNames from 'classnames';

const DataGridCell = ({ cell }) => {
  const dataGridCellClassNames = classNames('onex-data-grid-cell', {
    'onex-data-grid__cell-divider': cell?.column.hasDivider,
  });

  return (
    <td className={dataGridCellClassNames} {...cell.getCellProps()}>
      {cell.render('Cell')}
    </td>
  );
};

/* eslint-disable */
DataGridCell.propTypes = {
  cell: PropTypes.shape({
    getCellProps: PropTypes.func,
    render: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
    column: PropTypes.object,
  }),
};
/* eslint-enable */

DataGridCell.defaultProps = {
  cell: undefined,
};

export default DataGridCell;
