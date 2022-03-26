import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CloseIcon } from '../../../icons';

const Tag = ({
  image,
  isRemovable,
  className,
  onSelect,
  onRemove,
  controlId,
  dataTestId,
  disabled,
  size,
  children,
  variant,
}) => {
  const isImg = typeof image === 'string';
  const [selected, setSelected] = useState(false);
  const tagClassNames = classNames('onex-tag', `onex-tag--variant-${variant}`, {
    [className]: className,
    'onex-tag--size-sm': variant === 'input' && size === 'sm' && !image,
    'onex-tag--selected': variant === 'selection' && selected,
  });

  const handleSelect = () => {
    if (variant === 'selection') {
      setSelected((prev) => !prev);
      onSelect?.({ [controlId]: !selected });
    }
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
      {image && <div className="onex-tag__img">{isImg ? <img src={image} alt="" /> : image}</div>}
      {children && <span className="onex-tag__text">{children}</span>}
      {(isRemovable || variant === 'input') && (
        <button type="button" className="onex-tag__close" onClick={handleRemove}>
          <CloseIcon className="onex-tag__close__icon" />
        </button>
      )}
    </button>
  );
};

Tag.propTypes = {
  image: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  isRemovable: PropTypes.bool,
  className: PropTypes.string,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  controlId: PropTypes.string,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  variant: PropTypes.oneOf(['selection', 'input']),
};

Tag.defaultProps = {
  image: undefined,
  isRemovable: false,
  className: undefined,
  controlId: '',
  onSelect: undefined,
  onRemove: undefined,
  dataTestId: undefined,
  disabled: false,
  size: 'md',
  children: undefined,
  variant: 'selection',
};

export default Tag;
