import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { DragHandle } from './DragHandle';

const DraggableTableRow = ({ row, children }) => {
  console.log('row here, child', row, children);
};

/* eslint-disable */
DraggableTableRow.propTypes = {
  row: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
/* eslint-enable */

DraggableTableRow.defaultProps = {
  row: undefined,
  children: undefined,
};

export default DraggableTableRow;
