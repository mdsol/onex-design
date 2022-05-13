import PropTypes, { oneOfType } from 'prop-types';
import classNames from 'classnames';
import { Alert as ReactAlert } from 'react-bootstrap';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '../../Buttons/scss';

const Alert = ({
  className,
  variant,
  title,
  body,
  primaryAction,
  primaryText,
  secondaryAction,
  secondaryText,
  show,
  transition,
}) => {
  const classes = classNames('onex-alert', {
    [className]: className,
  });
  const Icon = {
    info: <InfoIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />,
    success: <CheckCircleIcon />,
  }[variant];

  return (
    <ReactAlert show={show} transition={transition} variant={variant} className={classes}>
      <ReactAlert.Heading>
        <span className="icon">{Icon}</span>
        {title}
      </ReactAlert.Heading>
      <div className="alert-body">{body}</div>
      <div className="alert-control">
        {primaryAction && (
          <Button onClick={primaryAction} variant="secondary">
            {primaryText}
          </Button>
        )}
        {secondaryAction && (
          <Button onClick={secondaryAction} variant="tertiary">
            {secondaryText}
          </Button>
        )}
      </div>
    </ReactAlert>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  title: PropTypes.string,
  body: oneOfType([PropTypes.string, PropTypes.element]),
  primaryAction: PropTypes.func,
  primaryText: PropTypes.string,
  secondaryAction: PropTypes.func,
  secondaryText: PropTypes.string,
  show: PropTypes.bool,
  transition: oneOfType([PropTypes.bool, PropTypes.elementType]),
};

Alert.defaultProps = {
  className: '',
  variant: 'info',
  title: 'Title',
  body: '',
  primaryAction: null,
  primaryText: '',
  secondaryAction: null,
  secondaryText: '',
  show: false,
  transition: false,
};

export default Alert;
