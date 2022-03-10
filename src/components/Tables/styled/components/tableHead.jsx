import styled from 'styled-components';
import TableHead from '../../scss/components/TableHead';
// eslint-disable-next-line import/no-unresolved
import cssString from '../platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

const StyledComponent = styled(TableHead)`
  ${() =>
    cssString
      .replaceAll('.onex-', '&.onex-')
      .replaceAll('.table', '&.table')
      .replaceAll('.table-', '&.table-')}
`;
