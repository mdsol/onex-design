import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NavItem = (props) => {
    const { eventKey, title, disabled, href } = props;

    return (
        <Nav.Item className="c-nav__item" data-key={eventKey}>
            <Nav.Link className="c-nav__link" eventKey={eventKey} href={href} disabled={disabled}>
                {title}
            </Nav.Link>
        </Nav.Item>
    );
};

NavItem.propTypes = {
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
};

NavItem.defaultProps = {
    title: undefined,
    disabled: false,
    href: undefined,
};

export default NavItem;
