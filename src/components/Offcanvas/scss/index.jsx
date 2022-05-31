import {
  Offcanvas as ReactOffcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Badge,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState } from 'react';
import Button from '../../Buttons/scss';
import Icon from '../../Icon/scss';

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
  hasActionsBlock,
  hasSecondaryAction,
  hasLinkAction,
  ...props
}) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const classes = classNames('onex-offcanvas', {
    [className]: className,
  });

  const headerClasses = classNames({
    scrolling: isScrolling,
  });

  const scrollHendle = (event) => setIsScrolling(event.target.scrollTop > 0);

  return (
    <ReactOffcanvas {...props} className={classes} show={show} placement="end">
      <OffcanvasHeader className={headerClasses}>
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
        <Button onClick={onHide} variant="tertiary" type="icon" size="md">
          <Icon>close</Icon>
        </Button>
      </OffcanvasHeader>

      <OffcanvasBody onScroll={scrollHendle}>{children}</OffcanvasBody>

      {hasActionsBlock && (
        <div className="offcanvas-footer">
          <div>
            {hasLinkAction ? (
              <a href={link} className="action-link">
                {linkText || 'Link'}
              </a>
            ) : (
              <>
                {hasSecondaryAction && (
                  <Button
                    onClick={secondaryActionFc}
                    variant="secondary"
                    className="secondary"
                    size="md"
                  >
                    {secondaryActionText || 'Secondary'}
                  </Button>
                )}
                <Button onClick={primaryActionFc} className="primary" size="md">
                  {primaryActionText || 'Primary'}
                </Button>
              </>
            )}
          </div>
        </div>
      )}
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
  hasActionsBlock: PropTypes.bool,
  hasSecondaryAction: PropTypes.bool,
  hasLinkAction: PropTypes.bool,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEntering: PropTypes.func,
  onEscapeKeyDown: PropTypes.func,
  onExit: PropTypes.func,
  onExited: PropTypes.func,
  onExiting: PropTypes.func,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  dataTestId: PropTypes.string,
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
  hasActionsBlock: true,
  hasSecondaryAction: false,
  hasLinkAction: false,
  onEnter: undefined,
  onEntered: undefined,
  onEntering: undefined,
  onEscapeKeyDown: undefined,
  onExit: undefined,
  onExited: undefined,
  onExiting: undefined,
  onHide: undefined,
  onShow: undefined,
  dataTestId: undefined,
};

export default {
  ...Offcanvas,
  Header: OffcanvasHeader,
  Body: OffcanvasBody,
  Title: OffcanvasTitle,
};
