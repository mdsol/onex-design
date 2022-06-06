import styled from 'styled-components';
import DataGrid from '../../scss/components/DataGrid';
// eslint-disable-next-line import/no-unresolved
import cssString from '../platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

// eslint-disable-next-line prefer-template
const handleCssString = (str) => '&' + str;

const StyledComponent = styled(DataGrid)`
  ${() => cssString.replaceAll(/\.onex-data-grid.[^__]+?[.|\s]/g, handleCssString)}
`;
