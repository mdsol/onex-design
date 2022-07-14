import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';
import DragHandle from './DragHandle';
import Check from '../../../../../../Check/scss';

const DraggableTableRow = ({
  row,
  _selectedRowIds,
  useRowSelection,
  rowSelectionType,
  handleRowCheck,
  handleColumnType,
  updateData,
  draggable,
}) => {
  const { attributes, listeners, transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      key={`body_row_${row.id}`}
      ref={setNodeRef}
      style={style}
      {...row.getRowProps()}
      className={`onex-data-grid__table-body-row ${_selectedRowIds[row.id] ? 'isSelected' : ''}`}
    >
      {isDragging ? (
        <td colSpan={row.cells.length + 1} className="onex-data-grid__table-body-row-drag">
          &nbsp;
        </td>
      ) : (
        <>
          {draggable && (
            <td key={`body_cell_drag_${row.id}`}>
              <DragHandle {...attributes} {...listeners} />
            </td>
          )}
          {useRowSelection && (
            <td key={`body_cell_check_${row.id}`}>
              <Check
                id={`onex-data-grid-row-check_${row.id}`}
                className="onex-data-grid__table-body-row-check"
                checked={_selectedRowIds[row.id]}
                type={rowSelectionType === 'multi' ? 'checkbox' : 'radio'}
                onChange={(e) => handleRowCheck(e, row)}
              />
            </td>
          )}
          {row.cells.map((cell, cellInd) => handleColumnType(row, cell, cellInd, updateData))}
        </>
      )}
    </tr>
  );
};

/* eslint-disable */
DraggableTableRow.propTypes = {
  row: PropTypes.object,
  _selectedRowIds: PropTypes.object,
  useRowSelection: PropTypes.bool,
  rowSelectionType: PropTypes.oneOf(['single', 'multi']),
  handleRowCheck: PropTypes.func,
  handleColumnType: PropTypes.func,
  updateData: PropTypes.func,
  draggable: PropTypes.bool,
};
/* eslint-enable */

DraggableTableRow.defaultProps = {
  row: undefined,
  _selectedRowIds: {},
  useRowSelection: false,
  rowSelectionType: 'multi',
  handleRowCheck: undefined,
  handleColumnType: undefined,
  updateData: undefined,
  draggable: false,
};

export default DraggableTableRow;
