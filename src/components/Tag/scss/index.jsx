import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CloseIcon } from '../../../icons';

const Tag = ({
  image,
  isRemovable,
  className,
  path,
  onSelect,
  onRemove,
  controlId,
  dataTestId,
  disabled,
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
      disabled={disabled}
    >
      {image && <div className="onex-tag__img">{image}</div>}
      {children && !path && <span className="onex-tag__text">{children}</span>}
      {children && path && <a href={path}>{children}</a>}
      {isRemovable && (
        <button type="button" className="onex-tag__close" onClick={handleRemove}>
          <CloseIcon className="onex-tag__close__icon" />
        </button>
      )}
    </button>
  );
};

Tag.propTypes = {
  image: PropTypes.node,
  isRemovable: PropTypes.bool,
  className: PropTypes.string,
  path: PropTypes.string,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  controlId: PropTypes.string,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Tag.defaultProps = {
  image: undefined,
  isRemovable: false,
  className: undefined,
  controlId: '',
  path: undefined,
  onSelect: undefined,
  onRemove: undefined,
  dataTestId: undefined,
  disabled: false,
  children: undefined,
};

export default Tag;
