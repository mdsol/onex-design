import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DragHandle from './DragHandle';
import Check from '../../../../../../Check/scss';

const DraggingRow = styled.td`
  background: rgba(127, 207, 250, 0.3);
`;

const TableData = styled.td`
  background: white;
  &:first-of-type {
    min-width: 20ch;
  }
`;

const DraggableTableRow = ({
  row,
  _selectedRowIds,
  useRowSelection,
  rowSelectionType,
  handleRowCheck,
  handleColumnType,
  updateData,
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
      ref={setNodeRef}
      style={style}
      {...row.getRowProps()}
      className={`onex-data-grid__table-body-row ${_selectedRowIds[row.id] ? 'isSelected' : ''}`}
    >
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
      {isDragging ? (
        <DraggingRow colSpan={row.cells.length}>&nbsp;</DraggingRow>
      ) : (
        row.cells.map((cell, cellInd) => {
          if (cellInd === 0) {
            return (
              <TableData>
                <DragHandle {...attributes} {...listeners} />
                <span>{cell.render('Cell')}</span>
              </TableData>
            );
          }
          return handleColumnType(row, cell, cellInd, updateData);
        })
      )}
    </tr>
  );
};

/* eslint-disable */
DraggableTableRow.propTypes = {
  row: PropTypes.object,
};
/* eslint-enable */

DraggableTableRow.defaultProps = {
  row: undefined,
};

export default DraggableTableRow;
