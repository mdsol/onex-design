import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CameraFillIcon, PersonIcon } from '../../icons';
import { getInitials } from './utils';

const Avatar = ({ className, size, name, children, src, hoverDisabled, dataTestId }) => {
  const avatarClassNames = classNames('onex-avatar', `onex-avatar--size-${size}`, {
    [className]: className,
    'hover-disabled': hoverDisabled,
  });
  const childComponent = Array.isArray(children) ? children[0] : children;

  return (
    <div className={avatarClassNames} data-test-id={dataTestId}>
      {src && <img className="onex-avatar__img" src={src} alt={name || ''} />}
      {!src && (name || childComponent) && (
        <div className="onex-avatar__children">{childComponent || getInitials(name)}</div>
      )}
      <PersonIcon className={(name || src || childComponent) && `onex-avatar__icon-decorator`} />
      {!hoverDisabled && (
        <div className="onex-avatar__hover">
          <CameraFillIcon />
        </div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  name: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string,
  hoverDisabled: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Avatar.defaultProps = {
  className: undefined,
  size: 'xxl',
  name: undefined,
  children: undefined,
  src: undefined,
  hoverDisabled: false,
  dataTestId: '',
};

export default Avatar;
