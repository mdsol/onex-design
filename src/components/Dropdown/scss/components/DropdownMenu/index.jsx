import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchField from '../../../../SearchField/scss';

const DropdownMenu = React.forwardRef(
  ({ children, style, className, isSearchable, ...accProps }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div ref={ref} {...accProps} style={style} className={className}>
        {isSearchable && (
          <SearchField
            className="dropdown-menu--search"
            autoFocus
            placeholder="Search"
            onChange={(val) => setValue(val)}
            value={value}
          />
        )}
        <ul className="dropdown-menu--list">
          {React.Children.toArray(children).filter((child) =>
            !value || child.props.children.length
              ? child?.props?.children[0]?.props?.title?.toLowerCase().startsWith(value)
              : false,
          )}
        </ul>
      </div>
    );
  },
);

DropdownMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.shape({}),
  className: PropTypes.string,
  isSearchable: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
  isSearchable: false,
};

export default DropdownMenu;
