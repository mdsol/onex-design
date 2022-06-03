import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Icon/scss';
import Link from '../../Link/scss';

const iconVariants = {
  info: 'campaign',
  warning: 'warning',
  error: 'error',
};

const Banner = ({
  className,
  variant,
  children,
  icon,
  dataTestId,
  linkDisabled,
  linkHref,
  linkChildren,
  linkTargetBlank,
}) => {
  const classes = classNames('onex-banner', `onex-banner--variant-${variant}`, {
    [className]: className,
  });

  return (
    <div className={classes} data-test-id={dataTestId}>
      <div className="onex-banner__icon">{icon || <Icon>{iconVariants[variant]}</Icon>}</div>
      <span className="onex-banner__body">
        {children}{' '}
        {linkHref && linkChildren && (
          <Link
            className="onex-banner__link"
            href={linkHref}
            disabled={linkDisabled}
            targetBlank={linkTargetBlank}
          >
            {linkChildren}
          </Link>
        )}
      </span>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'warning', 'error']),
  children: PropTypes.node,
  icon: PropTypes.node,
  linkDisabled: PropTypes.bool,
  linkHref: PropTypes.string,
  linkChildren: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  linkTargetBlank: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Banner.defaultProps = {
  className: '',
  variant: 'info',
  linkDisabled: false,
  linkHref: undefined,
  linkChildren: undefined,
  linkTargetBlank: undefined,
  children: undefined,
  icon: undefined,
  dataTestId: undefined,
};

export default Banner;
