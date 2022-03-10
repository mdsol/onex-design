import styled from 'styled-components';
import TableBody from '../../scss/components/TableBody';
// eslint-disable-next-line import/no-unresolved
import cssString from '../platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

const StyledComponent = styled(TableBody)`
  ${() =>
    cssString
      .replaceAll('.onex-', '&.onex-')
      .replaceAll('.table', '&.table')
      .replaceAll('.table-', '&.table-')}
`;
