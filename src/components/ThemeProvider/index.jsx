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
    <Styled {...accProps} ref={ref} className={className} data-test-id={dataTestId} id={id}>
      {children}
    </Styled>
  );
});

ThemeProvider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  dataTestId: PropTypes.string,
  id: PropTypes.string,
};

ThemeProvider.defaultProps = {
  className: undefined,
  children: null,
  dataTestId: undefined,
  id: undefined,
};

export default ThemeProvider;
