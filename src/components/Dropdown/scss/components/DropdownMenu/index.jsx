import React from 'react';
import PropTypes from 'prop-types';

const CustomMenu = React.forwardRef(({ children, style, className }, ref) => (
  <div ref={ref} style={style} className={className}>
    <ul className="dropdown-menu--list">{children}</ul>
  </div>
));

CustomMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

CustomMenu.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
};

export default CustomMenu;
