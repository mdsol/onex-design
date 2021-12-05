import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PersonIcon, CameraFillIcon } from '../../icons';
import { getInitials } from './utils';

const Avatar = ({ className, size, name, children, src, hoverDisabled, dataTestId }) => {
    const avatarClassNames = classNames('c-avatar', `c-avatar--size-${size}`, {
        [className]: className,
        'hover-disabled': hoverDisabled,
    });
    const childComponent = Array.isArray(children) ? children[0] : children;

    return (
        <div className={avatarClassNames} data-test-id={dataTestId}>
            {src && <img className="c-avatar__img" src={src} alt={name || ''} />}
            {!src && (name || childComponent) && (
                <div className="c-avatar__children">{childComponent || getInitials(name)}</div>
            )}
            <PersonIcon className={(name || src || childComponent) && `c-avatar__icon-decorator`} />
            {!hoverDisabled && (
                <div className="c-avatar__hover">
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
