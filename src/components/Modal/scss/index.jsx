import PropTypes from 'prop-types';
import { Modal as ReactModal } from 'react-bootstrap';
import classNames from 'classnames';

import { useEffect, useState } from 'react';
import Icon from '../../Icon/scss';
import Button from '../../Buttons/scss';
import Typography from '../../Typography/scss';
import Link from '../../Link/scss';

const Modal = ({
  handleClose,
  show,
  children,
  onPrimaryClick,
  onSecondaryClick,
  secondaryActionName,
  primaryActionName,
  size,
  widthClassName,
  showFooter,
  className,
  actionLinkName,
  link,
  title,
  ...accProps
}) => {
  const classes = classNames('onex-modal', { [className]: className });
  const [_show, setShow] = useState(show);

  useEffect(() => {
    setShow(show);
  }, [show]);

  const onClose = () => {
    setShow(false);
    handleClose?.();
  };

  return (
    <ReactModal
      {...accProps}
      scrollable
      show={_show}
      onHide={onClose}
      size={size}
      dialogClassName={widthClassName}
      className={classes}
    >
      <ReactModal.Header>
        <Typography variant="h4">{title}</Typography>
        <Button onClick={onClose} variant="tertiary" type="icon" size="md">
          <Icon>close</Icon>
        </Button>
      </ReactModal.Header>
      <ReactModal.Body>{children}</ReactModal.Body>
      <ReactModal.Footer>
        {showFooter && (
          <div className="modal-footer__content">
            {actionLinkName && <Link href={link}>{actionLinkName}</Link>}
            <div>
              <Button
                variant="secondary"
                onClick={onSecondaryClick}
                size="md"
                className="modal-footer__content__secondary"
              >
                {secondaryActionName}
              </Button>
              <Button variant="primary" onClick={onPrimaryClick} size="md">
                {primaryActionName}
              </Button>
            </div>
          </div>
        )}
      </ReactModal.Footer>
    </ReactModal>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
  secondaryActionName: PropTypes.string,
  primaryActionName: PropTypes.string,
  size: PropTypes.string,
  widthClassName: PropTypes.string,
  showFooter: PropTypes.bool,
  actionLinkName: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

Modal.defaultProps = {
  className: undefined,
  handleClose: undefined,
  show: false,
  children: '',
  onPrimaryClick: undefined,
  onSecondaryClick: undefined,
  secondaryActionName: '',
  primaryActionName: '',
  size: '',
  widthClassName: '',
  showFooter: false,
  actionLinkName: '',
  link: '',
  title: '',
};

export default Object.assign(Modal, {
  Body: ReactModal.Body,
  Header: ReactModal.Header,
  Title: ReactModal.Title,
  Footer: ReactModal.Footer,
  Dialog: ReactModal.Dialog,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
