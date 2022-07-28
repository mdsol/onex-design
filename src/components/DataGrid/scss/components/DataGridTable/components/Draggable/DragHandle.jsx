import styled from 'styled-components';
import Icon from '../../../../../../Icon/scss';

const HandleWrapper = styled.div`
  height: 1rem;
  vertical-align: top;
  display: inline-block;
  span {
    height: 1rem;
  }
  cursor: ${({ isDragging }) => (isDragging ? 'grabbing' : 'grab')};
`;

const DragHandle = (props) => (
  <HandleWrapper {...props}>
    <Icon>drag_handle</Icon>
  </HandleWrapper>
);

export default DragHandle;
