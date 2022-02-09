import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = React.forwardRef((props, ref) => {
  const { children, className, dataTestId, ...accProps } = props;
  const buttonClassNames = classNames('onex-btn', {
    [className]: className,
  });

  return (
    <Button ref={ref} className={buttonClassNames} data-test-id={dataTestId} {...accProps}>
      {children}
      {accProps.variant === 'link' && <span className="onex-btn__decorator" />}
    </Button>
  );
});

CustomButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'link', 'icon-link']),
  size: PropTypes.oneOf(['lg', 'sm']),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataTestId: PropTypes.string,
};

CustomButton.defaultProps = {
  className: undefined,
  disabled: false,
  variant: 'primary',
  size: 'sm',
  children: undefined,
  onClick: undefined,
  dataTestId: undefined,
};

export default CustomButton;
