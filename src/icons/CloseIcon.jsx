import PropTypes from 'prop-types';

const CloseIcon = ({ className }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.25 0.75834C10.925 0.43334 10.4 0.43334 10.075 0.75834L6 4.82501L1.925 0.750006C1.6 0.425006 1.075 0.425006 0.749998 0.750006C0.424998 1.07501 0.424998 1.60001 0.749998 1.92501L4.825 6.00001L0.749998 10.075C0.424998 10.4 0.424998 10.925 0.749998 11.25C1.075 11.575 1.6 11.575 1.925 11.25L6 7.17501L10.075 11.25C10.4 11.575 10.925 11.575 11.25 11.25C11.575 10.925 11.575 10.4 11.25 10.075L7.175 6.00001L11.25 1.92501C11.5667 1.60834 11.5667 1.07501 11.25 0.75834Z"
      fill="currentColor"
    />
  </svg>
);

CloseIcon.propTypes = {
  className: PropTypes.string,
};

CloseIcon.defaultProps = {
  className: undefined,
};

export default CloseIcon;
