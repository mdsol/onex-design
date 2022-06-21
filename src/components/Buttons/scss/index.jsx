import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Button as ReactButton } from 'react-bootstrap';

const Button = React.forwardRef((props, ref) => {
  const { children, className, dataTestId, type, leadingIcon, trailingIcon, ...accProps } = props;
  const buttonClassNames = classNames('onex-btn', {
    [className]: className,
    'onex-btn--default': type === 'default',
    'onex-btn--icon': type === 'icon',
  });

  return (
    <ReactButton {...accProps} ref={ref} className={buttonClassNames} data-test-id={dataTestId}>
      {leadingIcon && leadingIcon}
      {children}
      {trailingIcon && trailingIcon}
    </ReactButton>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  type: PropTypes.oneOf(['default', 'icon']),
  size: PropTypes.oneOf(['md', 'sm']),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  leadingIcon: PropTypes.node,
  trailingIcon: PropTypes.node,
  dataTestId: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  variant: 'primary',
  size: 'sm',
  type: 'default',
  children: undefined,
  trailingIcon: undefined,
  leadingIcon: undefined,
  onClick: undefined,
  dataTestId: undefined,
};

export default Button;
