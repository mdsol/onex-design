import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const ThemeProvider = React.forwardRef((props, ref) => {
  const { children, className, dataTestId, id, ...accProps } = props;

  const classes = classNames('onex-themeprovider', {
    [className]: className,
  });

  return (
    <div {...accProps} ref={ref} className={classes} data-test-id={dataTestId} id={id}>
      {children}
    </div>
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
