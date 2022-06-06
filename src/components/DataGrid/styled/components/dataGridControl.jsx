import styled from 'styled-components';
import DataGridControl from '../../scss/components/DataGridControl';
// eslint-disable-next-line import/no-unresolved
import cssString from '../platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

// eslint-disable-next-line prefer-template
const handleCssString = (str) => '&' + str;

const StyledComponent = styled(DataGridControl)`
  ${() => cssString.replaceAll(/\.onex-data-grid-control.[^__]+?[.|\s]/g, handleCssString)}
`;
