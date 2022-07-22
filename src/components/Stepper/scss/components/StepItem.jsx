import { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../../Icon/scss';

const StepItem = ({
  className,
  active,
  disabled,
  done,
  title,
  iconVariant,
  onClick,
  ...accProps
}) => {
  const classes = classNames('onex-step-item', {
    'onex-step-item--active': active,
    'onex-step-item--disabled': disabled,
    'onex-step-item--done': done,
    [className]: className,
  });

  const icon = useMemo(() => {
    if (active) {
      return iconVariant.active;
    }
    if (done) {
      return iconVariant.done;
    }

    return iconVariant.default;
  }, [active, done]);

  return (
    <div
      {...accProps}
      className={classes}
      tabIndex={0}
      aria-hidden="true"
      role="button"
      disabled={disabled}
      onClick={onClick}
    >
      <span className="onex-step-item__icon">
        <Icon>{icon}</Icon>
      </span>
      {title && <span className="onex-step-item__title">{title}</span>}
    </div>
  );
};

StepItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  done: PropTypes.bool,
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  iconVariant: PropTypes.object,
  onClick: PropTypes.func,
};

StepItem.defaultProps = {
  className: undefined,
  active: false,
  disabled: false,
  done: false,
  title: undefined,
  iconVariant: undefined,
  onClick: () => {},
};

export default StepItem;
