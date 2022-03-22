import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import XIcon from '../../../icons/XIcon';

const Tag = ({
  icon,
  isRemovable,
  className,
  path,
  onSelect,
  onRemove,
  controlId,
  dataTestId,
  children,
}) => {
  const [selected, setSelected] = useState(false);
  const tagClassNames = classNames('onex-tag', {
    [className]: className,
    'onex-tag--link': path,
    'onex-tag--selected': selected,
  });

  const handleSelect = () => {
    setSelected((prev) => !prev);
    onSelect?.({ [controlId]: !selected });
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove?.(controlId);
  };

  return (
    <button
      type="button"
      className={tagClassNames}
      onClick={handleSelect}
      data-test-id={dataTestId}
    >
      {icon && <div className="onex-tag__img">{icon}</div>}
      {children && !path && <span className="onex-tag__text">{children}</span>}
      {children && path && <a href={path}>{children}</a>}
      {isRemovable && (
        <button type="button" className="onex-tag__close" onClick={handleRemove}>
          <XIcon className="onex-tag__close__icon" />
        </button>
      )}
    </button>
  );
};

Tag.propTypes = {
  icon: PropTypes.node,
  isRemovable: PropTypes.bool,
  className: PropTypes.string,
  path: PropTypes.string,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  controlId: PropTypes.string,
  dataTestId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Tag.defaultProps = {
  icon: undefined,
  isRemovable: false,
  className: undefined,
  controlId: '',
  path: undefined,
  onSelect: undefined,
  onRemove: undefined,
  dataTestId: undefined,
  children: undefined,
};

export default Tag;
