import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomTooltip = (props) => {
    const {
        children,
        className,
        id,
        delay,
        show,
        defaultShow = false,
        onToggle,
        placement,
        trigger,
        variant,
        hasArrow,
        tooltipChildren,
        dataTestId,
    } = props;

    const toggleClassNames = classNames('onex-tooltip', `onex-tooltip--${variant}`, {
        [className]: className,
        'onex-tooltip--regular': !hasArrow,
    });

    return (
        <OverlayTrigger
            placement={placement}
            delay={delay}
            show={show}
            defaultShow={defaultShow}
            onToggle={onToggle}
            trigger={trigger}
            data-test-id={dataTestId}
            overlay={
                <Tooltip id={id} className={toggleClassNames}>
                    {tooltipChildren}
                </Tooltip>
            }
        >
            <div className="onex-tooltip__child-wrap">{children}</div>
        </OverlayTrigger>
    );
};

CustomTooltip.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    delay: PropTypes.shape({
        show: PropTypes.number,
        hide: PropTypes.number,
    }),
    show: PropTypes.bool,
    defaultShow: PropTypes.bool,
    onToggle: PropTypes.func,
    tooltipChildren: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    placement: PropTypes.oneOf([
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
    ]),
    trigger: PropTypes.oneOfType([
        PropTypes.oneOf(['hover', 'click', 'focus']),
        PropTypes.arrayOf(PropTypes.oneOf(['hover', 'click', 'focus'])),
    ]),
    variant: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'info']),
    hasArrow: PropTypes.bool,
    dataTestId: PropTypes.string,
};

CustomTooltip.defaultProps = {
    className: undefined,
    children: undefined,
    delay: { show: 250, hide: 300 },
    show: undefined,
    onToggle: undefined,
    defaultShow: false,
    placement: 'right',
    trigger: ['hover', 'focus'],
    variant: 'default',
    hasArrow: true,
    dataTestId: undefined,
    tooltipChildren: undefined,
};

export default CustomTooltip;
