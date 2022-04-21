import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Tag = ({
  image,
  isRemovable,
  className,
  onSelect,
  onRemove,
  controlId,
  dataTestId,
  disabled,
  children,
  variant,
}) => {
  const [selected, setSelected] = useState(false);
  const tagClassNames = classNames('onex-tag', `onex-tag--variant-${variant}`, {
    [className]: className,
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
      {image.icon && <div className="onex-tag__img">{image.icon}</div>}
      {!image.icon && image.src && (
        <div className="onex-tag__img">
          <img src={image.src} alt="" />
        </div>
      )}
      {children && <span className="onex-tag__text">{children}</span>}
      {(isRemovable || variant === 'input') && (
        <button type="button" className="onex-tag__close" onClick={handleRemove}>
          <CloseRoundedIcon />
        </button>
      )}
    </button>
  );
};

Tag.propTypes = {
  image: PropTypes.shape({
    icon: PropTypes.node,
    src: PropTypes.string,
  }),
  isRemovable: PropTypes.bool,
  className: PropTypes.string,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  controlId: PropTypes.string,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  variant: PropTypes.oneOf(['selection']),
};

Tag.defaultProps = {
  image: {
    icon: undefined,
    src: undefined,
  },
  isRemovable: false,
  className: undefined,
  controlId: '',
  onSelect: undefined,
  onRemove: undefined,
  dataTestId: undefined,
  disabled: false,
  children: undefined,
  variant: 'selection',
};

export default Tag;
