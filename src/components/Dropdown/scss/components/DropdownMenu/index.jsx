import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchField from '../../../../SearchField/scss';

const CustomMenu = React.forwardRef(({ children, style, className, isSearchable }, ref) => {
  const [value, setValue] = useState('');
  console.log('isSearchable', isSearchable);

  return (
    <div ref={ref} style={style} className={className}>
      {isSearchable && (
        <SearchField
          className="dropdown-menu--search"
          autoFocus
          placeholder="Search"
          onChange={(val) => setValue(val)}
          value={value}
          size="sm"
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
});

CustomMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.shape({}),
  className: PropTypes.string,
  isSearchable: PropTypes.boolean,
};

CustomMenu.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
  isSearchable: false,
};

export default CustomMenu;
