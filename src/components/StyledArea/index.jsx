import styled from 'styled-components';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import cssString from './platform.css?raw';

const StyledComponent = styled.div`
  ${cssString}
`;

const StyledArea = forwardRef(({ children, as, ...props }, ref) => (
  <StyledComponent ref={ref} as={as} {...props}>
    {children}
  </StyledComponent>
));

StyledArea.propTypes = {
  as: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

StyledArea.defaultProps = {
  as: 'div',
  children: null,
};

export default StyledArea;
