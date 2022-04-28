import styled from 'styled-components';
import Tabs from '../scss';
// eslint-disable-next-line import/no-unresolved
import cssString from './platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

// eslint-disable-next-line prefer-template
const handleCssString = (str) => '&' + str;

const StyledComponent = styled(Tabs)`
  ${() => cssString.replaceAll(/.onex-.[^__]+?[.|\s]/g, handleCssString)}
`;
