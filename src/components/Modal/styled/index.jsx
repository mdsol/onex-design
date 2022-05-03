import styled from 'styled-components';
import Modal from '../scss';
// eslint-disable-next-line import/no-unresolved
import cssString from './platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

// eslint-disable-next-line prefer-template
const handleCssString = (str) => '&' + str;

const StyledComponent = styled(Modal)`
  ${() =>
    cssString
      .replaceAll(/\.onex-modal.[^__]+?[.|\s]/g, handleCssString)
      .replaceAll(/\.modal[^-]+?[.|\s]/g, handleCssString)
      .replaceAll(/\.fade.[^__]+?[.|\s]/g, handleCssString)
      .replaceAll(/\.show.[^__]+?[.|\s]/g, handleCssString)}
`;
