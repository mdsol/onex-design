import PropTypes from 'prop-types';
import DragHandle from './DragHandle';
import Check from '../../../../../../Check/scss';

const StaticTableRow = ({ row, handleColumnType, updateData, useRowSelection }) => (
  <tr {...row.getRowProps()} className="onex-data-grid__table-body-row">
    <td key={`body_cell_drag_${row.id}`}>
      <DragHandle />
    </td>
    {useRowSelection && (
      <td key={`body_cell_check_${row.id}`}>
        <Check
          id={`onex-data-grid-row-check_${row.id}`}
          className="onex-data-grid__table-body-row-check"
        />
      </td>
    )}
    {row.cells.map((cell, cellInd) => handleColumnType(row, cell, cellInd, updateData))}
  </tr>
);

/* eslint-disable */
StaticTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  handleColumnType: PropTypes.func,
  updateData: PropTypes.func,
  useRowSelection: PropTypes.bool,
};
/* eslint-enable */

StaticTableRow.defaultProps = {
  handleColumnType: undefined,
  updateData: undefined,
  useRowSelection: false,
};

export default StaticTableRow;
