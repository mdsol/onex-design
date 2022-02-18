import styled from 'styled-components';
import { Tabs } from '../../components';
// eslint-disable-next-line import/no-unresolved
import cssString from './platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

const StyledComponent = styled(Tabs)`
  ${() => cssString.replaceAll('.onex-', '&.onex-')}
`;
