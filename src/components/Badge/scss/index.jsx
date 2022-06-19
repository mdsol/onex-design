import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Badge as ReactBadge } from 'react-bootstrap';

const Badge = React.forwardRef((props, ref) => {
  const { className, type, iconEnd, children, dataTestId, variant, iconStart, ...accProps } = props;
  const badgeClassNames = classNames('onex-badge', `onex-badge--variant-${variant}`, {
    [className]: className,
  });

  return (
    <ReactBadge
      {...accProps}
      ref={ref}
      className={badgeClassNames}
      bg={type}
      pill
      data-test-id={dataTestId}
    >
      {iconStart && <span className="onex-badge__icon onex-badge__icon--start">{iconStart}</span>}
      {children}
      {iconEnd && <span className="onex-badge__icon onex-badge__icon--end">{iconEnd}</span>}
    </ReactBadge>
  );
});

Badge.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'important',
    'default',
    'default-invert',
    'removed',
    'added',
    'success',
    'warning',
    'info',
  ]),
  variant: PropTypes.oneOf(['counter', 'status', 'status-bold', 'status-icon']),
  iconEnd: PropTypes.node,
  iconStart: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataTestId: PropTypes.string,
};

Badge.defaultProps = {
  className: undefined,
  type: 'default-invert',
  variant: 'counter',
  iconEnd: undefined,
  iconStart: undefined,
  children: undefined,
  dataTestId: undefined,
};

export default Badge;
