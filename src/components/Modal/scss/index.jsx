import PropTypes from 'prop-types';
import { Modal as ReactModal } from 'react-bootstrap';
import classNames from 'classnames';

import Icon from '../../Icon/scss';
import Button from '../../Buttons/scss';
import Typography from '../../Typography/scss';

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
}) => {
  const classes = classNames('onex-modal', { [className]: className });

  return (
    <ReactModal
      scrollable
      show={show}
      onHide={handleClose}
      size={size}
      dialogClassName={widthClassName}
      className={classes}
    >
      <ReactModal.Header>
        <Typography variant="h4">{title}</Typography>
        <Button onClick={handleClose} variant="tertiary" type="icon" size="md">
          <Icon>close</Icon>
        </Button>
      </ReactModal.Header>
      <ReactModal.Body>{children}</ReactModal.Body>
      <ReactModal.Footer>
        {showFooter && (
          <div className="modal-footer__content">
            {actionLinkName && (
              <Typography variant="label" href={link}>
                {actionLinkName}
              </Typography>
            )}
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

export default Modal;
