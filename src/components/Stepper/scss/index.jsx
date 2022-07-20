import classNames from 'classnames';
import PropTypes from 'prop-types';
import Step from './components/Step';

const Stepper = ({ className, stepItemsData, ...accProps }) => {
  const classes = classNames('onex-stepper', {
    [className]: className,
  });

  return (
    <div className={classes} {...accProps}>
      {stepItemsData?.map((stepItemData) => (
        <Step key={stepItemData.key} {...stepItemData} />
      ))}
    </div>
  );
};

Stepper.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  stepItemsData: PropTypes.object,
  onClick: PropTypes.func,
};

Stepper.defaultProps = {
  className: undefined,
  stepItemsData: undefined,
  onClick: () => {},
};

export default Stepper;
