import styled from 'styled-components';
import { Dropdown } from '../../components';
// eslint-disable-next-line import/no-unresolved
import cssString from './platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

const StyledComponent = styled(Dropdown)`
  ${() =>
    cssString
      .replaceAll('.onex-', '&.onex-')
      .replaceAll('.dropdown', '&.dropdown')
      .replaceAll('.dropdown-', '&.dropdown-')}
`;
