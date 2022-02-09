import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Button } from 'react-bootstrap';

const CustomOverlay = ({
  text,
  placement,
  transition,
  rootClose,
  onHide,
  onExiting,
  onExited,
  onExit,
  onEntering,
  onEntered,
  onEnter,
  id,
  rootCloseEvent,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement={placement} transition={transition}>
        <div
          {...props}
          style={{
            backgroundColor: 'rgba(255, 100, 100, 0.85)',
            padding: '2px 10px',
            color: 'white',
            borderRadius: 3,
          }}
        >
          {text}
        </div>
      </Overlay>
    </>
  );
};

CustomOverlay.propTypes = {
  text: PropTypes.string,
  rootClose: PropTypes.bool,
  transition: PropTypes.bool,
  onHide: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func,
  onExit: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onEnter: PropTypes.func,
  id: PropTypes.string,
  rootCloseEvent: PropTypes.string,
  placement: PropTypes.oneOf([
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start',
  ]),
};

CustomOverlay.defaultProps = {
  text: 'Overlay',
  transition: false,
  rootClose: false,
  onHide: undefined,
  onExiting: undefined,
  placement: 'right',
  onExited: undefined,
  onExit: undefined,
  onEntering: undefined,
  onEntered: undefined,
  onEnter: undefined,
  id: 'overlay',
  rootCloseEvent: 'click',
};

export default CustomOverlay;
