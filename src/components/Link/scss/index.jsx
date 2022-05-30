import classNames from 'classnames';
import PropTypes from 'prop-types';

const Link = ({
  children,
  className,
  dataTestId,
  href,
  leadingIcon,
  trailingIcon,
  disabled,
  variant,
  ...props
}) => {
  const buttonClassNames = classNames('onex-link', {
    [className]: className,
    'onex-link--disabled': disabled,
    'onex-link--primary': variant === 'primary',
    'onex-link--secondary': variant === 'secondary',
  });

  return (
    <a href={href} className={buttonClassNames} data-test-id={dataTestId} {...props}>
      {leadingIcon && leadingIcon}
      <span className="onex-link__text">{children}</span>
      {trailingIcon && trailingIcon}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  leadingIcon: PropTypes.node,
  trailingIcon: PropTypes.node,
  dataTestId: PropTypes.string,
};

Link.defaultProps = {
  className: undefined,
  disabled: false,
  variant: 'primary',
  href: '#',
  children: undefined,
  trailingIcon: undefined,
  leadingIcon: undefined,
  dataTestId: undefined,
};

export default Link;
