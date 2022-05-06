import styled from 'styled-components';
import Offcanvas from '../scss';
// eslint-disable-next-line import/no-unresolved
import cssString from './platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

// eslint-disable-next-line prefer-template
const handleCssString = (str) => '&' + str;

const StyledComponent = styled(Offcanvas)`
  ${() =>
    cssString
      .replaceAll(/\.onex-offcanvas.[^__]+?[.|\s]/g, handleCssString)
      .replaceAll(/\.offcanvas[^-]+?[.|\s]/g, handleCssString)
      .replaceAll(/\.offcanvas-end[^-]+?[.|\s]/g, handleCssString)
      .replaceAll(/\.fade.[^__]+?[.|\s]/g, handleCssString)
      .replaceAll(/\.show.[^__]+?[.|\s]/g, handleCssString)}
`;
