import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import cssString from '../../scss/platform.scss';

const Styled = styled.div`
  ${cssString}
`;

const ThemeProvider = React.forwardRef((props, ref) => {
  const { children, className, dataTestId, id, ...accProps } = props;

  return (
    <Styled ref={ref} className={className} data-test-id={dataTestId} id={id} {...accProps}>
      {children}
    </Styled>
  );
});

ThemeProvider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataTestId: PropTypes.string,
  id: PropTypes.string,
};

ThemeProvider.defaultProps = {
  className: undefined,
  children: undefined,
  dataTestId: undefined,
  id: undefined,
};

export default ThemeProvider;
