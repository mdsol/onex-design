import React from 'react';
import PropTypes from 'prop-types';

const CustomMenu = React.forwardRef(({ children, style, className }, ref) => (
  <div ref={ref} style={style} className={className}>
    <ul className="dropdown-menu--list">
      {children}
      {/*       {React.Children.toArray(children).filter((child) => */}
      {/*         !value || child.props.children.length */}
      {/*           ? child?.props?.children[0]?.props?.title?.toLowerCase().startsWith(value) */}
      {/*           : false, */}
      {/*       )} */}
    </ul>
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
