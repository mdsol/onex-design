import {
  Offcanvas as ReactOffcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Badge,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Button from '../../Buttons/scss';

const Offcanvas = ({
  link,
  linkText,
  primaryActionFc,
  primaryActionText,
  secondaryActionFc,
  secondaryActionText,
  title,
  badge,
  children,
  show,
  className,
  onHide,
  ...props
}) => {
  const classes = classNames('onex-offcanvas', {
    [className]: className,
  });

  return (
    <ReactOffcanvas {...props} className={classes} show={show} placement="end">
      <OffcanvasHeader>
        <OffcanvasTitle>
          <h5>
            {title}
            {badge && (
              <Badge pill bg="light" text="dark">
                {badge}
              </Badge>
            )}
          </h5>
        </OffcanvasTitle>
        <Button onClick={onHide} variant="tertiary" type="icon">
          <CloseRoundedIcon />
        </Button>
      </OffcanvasHeader>

      <OffcanvasBody>{children}</OffcanvasBody>

      <div className="offcanvas-footer">
        {link && linkText ? (
          <a href={link} className="action-link">
            {linkText}
          </a>
        ) : (
          <>
            {secondaryActionFc && (
              <Button onClick={secondaryActionFc} variant="secondary" className="secondary">
                {secondaryActionText || 'Secondary'}
              </Button>
            )}
            <Button onClick={primaryActionFc} className="primary">
              {primaryActionText || 'Primary'}
            </Button>
          </>
        )}
      </div>
    </ReactOffcanvas>
  );
};

Offcanvas.propTypes = {
  link: PropTypes.string,
  linkText: PropTypes.string,
  primaryActionFc: PropTypes.func,
  primaryActionText: PropTypes.string,
  secondaryActionFc: PropTypes.func,
  secondaryActionText: PropTypes.string,
  title: PropTypes.string,
  badge: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  show: PropTypes.bool,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  enforceFocus: PropTypes.bool,
  restoreFocusOptions: PropTypes.string,
  scroll: PropTypes.bool,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEntering: PropTypes.func,
  onEscapeKeyDown: PropTypes.func,
  onExit: PropTypes.func,
  onExited: PropTypes.func,
  onExiting: PropTypes.func,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
};

Offcanvas.defaultProps = {
  link: '',
  linkText: '',
  primaryActionFc: null,
  primaryActionText: '',
  secondaryActionFc: null,
  secondaryActionText: '',
  title: '',
  badge: null,
  children: undefined,
  show: false,
  className: '',
  autoFocus: false,
  backdrop: true,
  backdropClassName: '',
  enforceFocus: false,
  restoreFocusOptions: undefined,
  scroll: false,
  onEnter: undefined,
  onEntered: undefined,
  onEntering: undefined,
  onEscapeKeyDown: undefined,
  onExit: undefined,
  onExited: undefined,
  onExiting: undefined,
  onHide: undefined,
  onShow: undefined,
};

export default Offcanvas;
