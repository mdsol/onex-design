import styled from 'styled-components';
import TableRow from '../../scss/components/TableRow';
// eslint-disable-next-line import/no-unresolved
import cssString from '../platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

// eslint-disable-next-line prefer-template
const handleCssString = (str) => '&' + str;

const StyledComponent = styled(TableRow)`
  ${() => cssString.replaceAll(/\.onex-table-wrap.[^__]+?[.|\s]/g, handleCssString)}
`;
