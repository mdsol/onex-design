import PropTypes from 'prop-types';

export const passwordVariantType = PropTypes.oneOf(['strong', 'medium', 'weak']);
export const passwordHelpTextType = PropTypes.shape({
  [passwordVariantType]: PropTypes.string,
});
