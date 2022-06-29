import PropTypes from 'prop-types';
import classNames from 'classnames';

const DataGridCell = ({ cell, cellIndex }) => {
  const dataGridCellClassNames = classNames('onex-data-grid-cell', {
    'onex-data-grid__cell-divider': cell?.column.hasDivider,
  });

  return (
    <td className={dataGridCellClassNames} key={`body_cell_${cellIndex}`} {...cell.getCellProps()}>
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
  cellIndex: PropTypes.number,
};
/* eslint-enable */

DataGridCell.defaultProps = {
  cell: undefined,
  cellIndex: undefined,
};

export default DataGridCell;
