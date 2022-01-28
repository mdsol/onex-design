import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const NavItem = (props) => {
  const { eventKey, children, disabled, href, dataTestId } = props;

  return (
    <Nav.Item className="onex-nav__item" data-key={eventKey} dataTestId={dataTestId}>
      <Nav.Link className="onex-nav__link" eventKey={eventKey} href={href} disabled={disabled}>
        {children}
      </Nav.Link>
    </Nav.Item>
  );
};

NavItem.propTypes = {
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataTestId: PropTypes.string,
};

NavItem.defaultProps = {
  disabled: false,
  href: undefined,
  children: undefined,
  dataTestId: undefined,
};

export default NavItem;
