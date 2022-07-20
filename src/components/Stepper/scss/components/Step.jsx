import classNames from 'classnames';
import PropTypes from 'prop-types';
import StepItem from './StepItem';
import SubStep from './SubStep';

const iconVariant = {
  default: 'radio_button_unchecked',
  active: 'play_circle',
  done: 'check_circle',
};

const Step = ({ className, active, disabled, done, title, subSteps, onClick, ...accProps }) => {
  const classes = classNames('onex-step', {
    [className]: className,
  });

  return (
    <div className="onex-step-wrap">
      <StepItem
        className={classes}
        iconVariant={iconVariant}
        active={active}
        disabled={disabled}
        done={done}
        title={title}
        onClick={onClick}
        {...accProps}
      />
      {subSteps?.length && (
        <div className="onex-step__sub-step-block">
          {subSteps.map((subStepData) => (
            <SubStep key={subStepData.key} {...subStepData} />
          ))}
        </div>
      )}
    </div>
  );
};

Step.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  done: PropTypes.bool,
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  subSteps: PropTypes.object,
  onClick: PropTypes.func,
};

Step.defaultProps = {
  className: undefined,
  active: false,
  disabled: false,
  done: false,
  title: undefined,
  subSteps: undefined,
  onClick: () => {},
};

export default Step;
