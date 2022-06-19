import classNames from 'classnames';
import PropTypes from 'prop-types';
import Alert from '../../Alert/scss';

const InlineAlert = ({ className, variant, title, show, dataTestId, ...accProps }) => {
  const classes = classNames('onex-inline-alert', {
    [className]: className,
  });
  return (
    <Alert
      {...accProps}
      variant={variant}
      title={title}
      className={classes}
      show={show}
      dataTestId={dataTestId}
    />
  );
};

InlineAlert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  title: PropTypes.string,
  show: PropTypes.bool,
  dataTestId: PropTypes.string,
};

InlineAlert.defaultProps = {
  className: '',
  variant: 'info',
  title: '',
  show: false,
  dataTestId: '',
};

export default InlineAlert;
