import classNames from 'classnames';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip as ReactTooltip } from 'react-bootstrap';

const Tooltip = (props) => {
  const {
    children,
    className,
    container,
    id,
    delay,
    show,
    defaultShow = false,
    onToggle,
    placement,
    trigger,
    tooltipChildren,
    dataTestId,
    variant,
    ...accProps
  } = props;

  const toggleClassNames = classNames('onex-tooltip', `onex-tooltip--${variant}`, {
    [className]: className,
  });

  let themeContainer;
  if (document.getElementsByClassName('onex-themeprovider').length) {
    [themeContainer] = document.getElementsByClassName('onex-themeprovider');
  }

  return (
    <OverlayTrigger
      {...accProps}
      container={container || themeContainer}
      placement={placement}
      delay={delay}
      show={show}
      defaultShow={defaultShow}
      onToggle={onToggle}
      trigger={trigger}
      data-test-id={dataTestId}
      overlay={
        <ReactTooltip id={id} className={toggleClassNames}>
          {tooltipChildren}
        </ReactTooltip>
      }
    >
      <div className="onex-tooltip__child-wrap">{children}</div>
    </OverlayTrigger>
  );
};

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  container: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  delay: PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number,
  }),
  show: PropTypes.bool,
  defaultShow: PropTypes.bool,
  onToggle: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'error', 'warning']),
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
  dataTestId: PropTypes.string,
};

Tooltip.defaultProps = {
  className: undefined,
  children: undefined,
  container: undefined,
  variant: 'default',
  delay: { show: 250, hide: 300 },
  show: undefined,
  onToggle: undefined,
  defaultShow: false,
  placement: 'right',
  trigger: ['hover', 'focus'],
  dataTestId: undefined,
  tooltipChildren: undefined,
};

export default Tooltip;
