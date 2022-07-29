import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DataGridFiltersTypes } from '../../types/dataGridTypes';
import FilterSelect from '../../../../FilterSelect/scss';
import Dropdown from '../../../../Dropdown/scss';
import Button from '../../../../Buttons/scss';
import Icon from '../../../../Icon/scss';

const DataGridFilters = ({
  filters,
  handleFilter,
  additionalFilters,
  setAdditionalFilters,
  handleClearFilters,
  filterData,
}) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [defaultFilters, setDefaultFilters] = useState([]);
  const [listFilters, setListFilters] = useState([]);

  const handleListFilters = () => {
    const updFilterList = filters.reduce((acc, item) => {
      const isAdditionalFilter = additionalFilters.filter(
        (customFilterItem) => customFilterItem.id === item.id,
      ).length;
      if (!item.defaultFilter && !isAdditionalFilter) {
        acc.push({ eventKey: item.id, title: item.name });
      }
      return acc;
    }, []);
    setListFilters(updFilterList);
  };

  useEffect(() => {
    setDefaultFilters(filters.filter((item) => item.defaultFilter));
    handleListFilters();
  }, [filters]);

  useEffect(() => {
    handleListFilters();
  }, [additionalFilters]);

  useEffect(() => {
    const updSelectedValues = [];
    if (filterData) {
      Object.entries(filterData).forEach(([key, value]) => {
        if (value) {
          updSelectedValues.push({ id: key, value, label: value.toString() });
        }
        setSelectedValues(updSelectedValues);
      });
    }
  }, [filterData]);

  const handleAddNewFilter = (option) => {
    const updAdditionalFilters = filters.filter((item) => item.id === option);
    setAdditionalFilters([...additionalFilters, ...updAdditionalFilters]);
  };

  return (
    <div className="onex-data-grid-filters">
      <div className="onex-data-grid-filters-container">
        {defaultFilters.map((item) => (
          <div className="onex-data-grid-filters-wrapper">
            <FilterSelect
              size="sm"
              label={item.name}
              onSelect={(option) => handleFilter(option, item.id)}
              selectedValues={selectedValues.filter((selectedItem) => item.id === selectedItem.id)}
              {...item}
            />
          </div>
        ))}
        {additionalFilters.map((item) => (
          <div className="onex-data-grid-filters-wrapper">
            <FilterSelect
              size="sm"
              label={item.name}
              onSelect={(option) => handleFilter(option, item.id)}
              selectedValues={selectedValues.filter((selectedItem) => item.id === selectedItem.id)}
              showMenuByDefault
              {...item}
            />
          </div>
        ))}
        {!!listFilters.length && (
          <Dropdown
            id="data-grid-filters-list"
            title="Add filter"
            size="sm"
            variant="tertiary"
            isSearchable
            hideDefaultIcon
            leadingIcon={<Icon>add</Icon>}
            items={listFilters}
            onSelect={handleAddNewFilter}
          />
        )}
      </div>
      <div className="onex-data-grid-filters-clear-wrapper">
        <Button
          variant="tertiary"
          size="sm"
          leadingIcon={<Icon>highlight_off</Icon>}
          onClick={handleClearFilters}
        >
          Clear filter
        </Button>
      </div>
    </div>
  );
};

/* eslint-disable */
DataGridFilters.propTypes = {
  filters: DataGridFiltersTypes,
  handleFilter: PropTypes.func,
  additionalFilters: PropTypes.arrayOf(
    PropTypes.shape({
      eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
    }),
  ),
  setAdditionalFilters: PropTypes.func,
  handleClearFilters: PropTypes.func,
  filterData: PropTypes.array,
};
/* eslint-enable */

DataGridFilters.defaultProps = {
  filters: [],
  handleFilter: undefined,
  additionalFilters: [],
  setAdditionalFilters: undefined,
  handleClearFilters: undefined,
};

export default DataGridFilters;
