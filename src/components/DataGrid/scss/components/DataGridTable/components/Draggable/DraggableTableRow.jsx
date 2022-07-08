import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DragHandle from './DragHandle';

const DraggingRow = styled.td`
  background: rgba(127, 207, 250, 0.3);
`;

const TableData = styled.td`
  background: white;
  &:first-of-type {
    min-width: 20ch;
  }
`;

const DraggableTableRow = ({ row }) => {
  const { attributes, listeners, transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr ref={setNodeRef} style={style} {...row.getRowProps()}>
      {isDragging ? (
        <DraggingRow colSpan={row.cells.length}>&nbsp;</DraggingRow>
      ) : (
        row.cells.map((cell, i) => {
          if (i === 0) {
            return (
              <TableData {...cell.getCellProps()}>
                <DragHandle {...attributes} {...listeners} />
                <span>{cell.render('Cell')}</span>
              </TableData>
            );
          }
          return <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>;
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
