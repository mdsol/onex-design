import styled from 'styled-components';
import DataTableCell from '../../scss/components/DataTableCell';
// eslint-disable-next-line import/no-unresolved
import cssString from '../platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

// eslint-disable-next-line prefer-template
const handleCssString = (str) => '&' + str;

const StyledComponent = styled(DataTableCell)`
  ${() => cssString.replaceAll(/\.onex-table-wrap.[^__]+?[.|\s]/g, handleCssString)}
`;
