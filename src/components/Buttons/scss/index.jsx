import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = React.forwardRef((props, ref) => {
  const { children, className, dataTestId, type, ...accProps } = props;
  const buttonClassNames = classNames('onex-btn', {
    [className]: className,
    'onex-btn--default': type === 'default',
    'onex-btn--icon': type === 'icon',
  });

  return (
    <Button ref={ref} className={buttonClassNames} data-test-id={dataTestId} {...accProps}>
      {children}
    </Button>
  );
});

CustomButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  type: PropTypes.oneOf(['default', 'icon']),
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
  type: 'default',
  children: undefined,
  onClick: undefined,
  dataTestId: undefined,
};

export default CustomButton;
