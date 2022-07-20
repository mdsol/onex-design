import classNames from 'classnames';
import PropTypes from 'prop-types';
import StepItem from './StepItem';

const iconVariant = {
  default: 'radio_button_unchecked',
  active: 'play_circle_outline',
  done: 'check_circle_outline',
};

const SubStep = ({ className, active, disabled, done, children, onClick, ...accProps }) => {
  const classes = classNames('onex-sub-step', {
    [className]: className,
  });

  return (
    <StepItem
      className={classes}
      iconVariant={iconVariant}
      active={active}
      disabled={disabled}
      done={done}
      title={children}
      onClick={onClick}
      {...accProps}
    >
      {children}
    </StepItem>
  );
};

SubStep.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  done: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

SubStep.defaultProps = {
  className: undefined,
  active: false,
  disabled: false,
  done: false,
  children: undefined,
  onClick: () => {},
};

export default SubStep;
