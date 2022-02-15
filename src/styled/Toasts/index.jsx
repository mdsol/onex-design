import styled from 'styled-components';
import Toasts from '../../components/Toasts';
// eslint-disable-next-line import/no-unresolved
import cssString from './platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

const StyledComponent = styled(Toasts)`
  ${() => cssString.replaceAll('.onex-', '&.onex-').replaceAll('.toast', '&.toast')}
`;
