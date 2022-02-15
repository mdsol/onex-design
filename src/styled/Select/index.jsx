import styled from 'styled-components';
import Select from '../../components/Select';
// eslint-disable-next-line import/no-unresolved
import cssString from './platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

const StyledComponent = styled(Select)`
  ${() => cssString.replaceAll('.onex-', '&.onex-')}
`;
