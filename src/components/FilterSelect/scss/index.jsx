import classNames from 'classnames';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

const FilterSelect = ({ className }) => {
  const selectClassNames = classNames('onex-filter-select', {
    [className]: className,
  });

  return (
    <div className={selectClassNames}>
      <ReactSelect classNamePrefix="onex-filter-select" />
    </div>
  );
};

FilterSelect.propTypes = {
  className: PropTypes.string,
};

FilterSelect.defaultProps = {
  className: undefined,
};

export default FilterSelect;
