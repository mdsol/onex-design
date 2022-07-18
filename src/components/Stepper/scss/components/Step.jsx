import { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../../Icon/scss';
import Button from "../../../Buttons/scss";

const iconVariant = {
  step: {
    default: 'radio_button_unchecked',
    active: 'play_circle',
    done: 'check_circle',
  },
  subStep: {
    default: 'radio_button_unchecked',
    active: 'play_circle_outline',
    done: 'check_circle_outline',
  },
};

const Step = ({ className, active, disabled, done, type, children, ...accProps }) => {
  const classes = classNames('onex-step', {
    'onex-subStep': type === 'subStep',
    'onex-step--active': active,
    'onex-step--disabled': disabled,
    'onex-step--done': done,
    [className]: className,
  });

  const icon = useMemo(() => {
    if (active) {
      return iconVariant[type].active;
    }
    if (done) {
      return iconVariant[type].done;
    }

    return iconVariant[type].default;
  }, [active, done]);

  return (
    <div className={classes} {...accProps}>
      <span className="onex-step__icon">
        <Icon>{icon}</Icon>
      </span>
      {children && <span className="onex-step__title">{children}</span>}
    </div>
  );
};

Step.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  done: PropTypes.bool,
  type: PropTypes.oneOf(['step', 'subStep']),
  children: PropTypes.string,
};

Step.defaultProps = {
  className: undefined,
  active: false,
  disabled: false,
  done: false,
  type: 'step',
  children: undefined,
};

export default Step;
