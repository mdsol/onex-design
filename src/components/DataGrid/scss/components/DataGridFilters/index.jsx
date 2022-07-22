import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FilterSelect } from '../../../../index';

const DataGridFilters = ({ filters }) => {
  const [defaultFilters, setDefaultFilters] = useState([]);
  useEffect(() => {
    setDefaultFilters(filters.filter((item) => item.defaultFilter));
  }, [filters]);

  return (
    <div className="onex-data-grid-filters">
      {defaultFilters.map((item) => (
        <FilterSelect size="sm" {...item.props} />
      ))}
    </div>
  );
};

/* eslint-disable */
DataGridFilters.propTypes = {
  filters: PropTypes.array,
};
/* eslint-enable */

DataGridFilters.defaultProps = {
  filters: [],
};

export default DataGridFilters;
