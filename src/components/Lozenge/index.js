import PropTypes from 'prop-types';
import classNames from 'classnames';

const Lozenge = (props) => {
    const { className, size, type, children, variant, icon, dataTestId } = props;

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
        <div className={lozengeClassNames} data-test-id={dataTestId}>
            {icon && <span className="c-lozenge__icon">{icon}</span>}
            {variant !== 'icon' && <span className="c-lozenge__text">{children}</span>}
        </div>
    );
};

Lozenge.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm']),
    type: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'info']),
    variant: PropTypes.oneOf(['subtle', 'bold', 'icon']),
    icon: PropTypes.node,
    dataTestId: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Lozenge.defaultProps = {
    className: undefined,
    size: 'sm',
    type: 'default',
    variant: 'subtle',
    icon: undefined,
    dataTestId: undefined,
    children: undefined,
};

export default Lozenge;
