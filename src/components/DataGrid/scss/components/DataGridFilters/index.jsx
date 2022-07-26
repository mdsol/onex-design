import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DataGridFiltersTypes } from '../../types/dataGridTypes';
import FilterSelect from '../../../../FilterSelect/scss';
import Dropdown from '../../../../Dropdown/scss';
import Icon from '../../../../Icon/scss';

const DataGridFilters = ({ filters, handleFilter }) => {
  const [defaultFilters, setDefaultFilters] = useState([]);
  const [listFilters, setListFilters] = useState([]);
  useEffect(() => {
    setDefaultFilters(filters.filter((item) => item.defaultFilter));
    setListFilters(
      filters.reduce((acc, item) => {
        if (!item.defaultFilter) {
          acc.push({ eventKey: item.id, title: item.name });
        }
        return acc;
      }, []),
    );
  }, [filters]);

  console.log('listFilters', listFilters);

  return (
    <div className="onex-data-grid-filters">
      {defaultFilters.map((item) => (
        <div className="onex-data-grid-filters-default">
          <FilterSelect
            size="sm"
            label={item.name}
            onSelect={(option) => handleFilter(option, item.id)}
            {...item}
          />
        </div>
      ))}
      <Dropdown title="Add filter" size="sm" variant="tertiary" leadingIcon={<Icon>add</Icon>} />
    </div>
  );
};

DataGridFilters.propTypes = {
  filters: DataGridFiltersTypes,
  handleFilter: PropTypes.func,
};

DataGridFilters.defaultProps = {
  filters: [],
  handleFilter: undefined,
};

export default DataGridFilters;
