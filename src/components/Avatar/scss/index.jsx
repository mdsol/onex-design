import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getInitials } from './utils';

const Avatar = ({ className, size, name, children, src, onClick, hoverDisabled, dataTestId }) => {
  const avatarClassNames = classNames('onex-avatar', `onex-avatar--size-${size}`, {
    [className]: className,
    'hover-disabled': hoverDisabled || size !== 'lg',
  });
  const childComponent = Array.isArray(children) ? children[0] : children;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-hidden="true"
      className={avatarClassNames}
      data-test-id={dataTestId}
      onClick={onClick}
    >
      {src && <img className="onex-avatar__img" src={src} alt={name || ''} />}
      {!src && (name || childComponent) && (
        <div className="onex-avatar__children">{childComponent || getInitials(name)}</div>
      )}
      {!(name || src || childComponent) && (
        <span className="material-icons-round onex-avatar__person-icon">person</span>
      )}
      {!hoverDisabled && size === 'lg' && (
        <div className="onex-avatar__hover">
          <span className="material-icons-round onex-avatar__hover-avatar">photo_camera</span>
        </div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  name: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  src: PropTypes.string,
  hoverDisabled: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Avatar.defaultProps = {
  className: undefined,
  size: 'md',
  name: undefined,
  children: undefined,
  src: undefined,
  hoverDisabled: false,
  onClick: undefined,
  dataTestId: '',
};

export default Avatar;
