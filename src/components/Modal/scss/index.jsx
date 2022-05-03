import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import classNames from 'classnames';

import Button from '../../Buttons/scss';
import Typography from '../../Typography/scss';

const CustomModal = ({
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
}) => {
  const classes = classNames('onex-modal', { [className]: className });

  return (
    <Modal
      scrollable
      show={show}
      onHide={handleClose}
      size={size}
      dialogClassName={widthClassName}
      className={classes}
    >
      <Modal.Header closeButton>
        <Typography variant="h4">Modal heading</Typography>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {showFooter && (
        <Modal.Footer>
          <Button variant="secondary" onClick={onSecondaryClick}>
            {secondaryActionName}
          </Button>
          <Button variant="primary" onClick={onPrimaryClick}>
            {primaryActionName}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

CustomModal.propTypes = {
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
};

CustomModal.defaultProps = {
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
};

export default CustomModal;
