import PropTypes from 'prop-types';
import classNames from 'classnames';

const Lozenge = (props) => {
    const { className, size, type, text, variant, icon } = props;

    const lozengeClassNames = classNames(
        'c-lozenge',
        `c-lozenge--size-${size}`,
        `c-lozenge--type-${type}`,
        `c-lozenge--variant-${variant}`,
        {
            [className]: className,
        },
    );

    return (
        <div className={lozengeClassNames}>
            {icon && <span className="c-lozenge__icon">{icon}</span>}
            {variant !== 'icon' && <span className="c-lozenge__text">{text}</span>}
        </div>
    );
};

Lozenge.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm']),
    type: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'info']),
    variant: PropTypes.oneOf(['subtle', 'bold', 'icon']),
    text: PropTypes.string,
    icon: PropTypes.node,
};

Lozenge.defaultProps = {
    className: undefined,
    size: 'sm',
    type: 'default',
    variant: 'subtle',
    text: undefined,
    icon: undefined,
};

export default Lozenge;
