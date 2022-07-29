import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { Select } from '../../../../../..';

const DataGridBadgeSelectCell = ({ cell, row, updateData }) => {
  const DataGridBadgeSelectCellClassNames = classNames('onex-data-grid-select-badge');

  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
    updateData(row.index, cell?.column.id, value);
  };

  useEffect(() => {
    setSelectedValue(row.values.selectBadge);
  }, []);

  return (
    <td className={DataGridBadgeSelectCellClassNames} {...cell.getCellProps()}>
      <Select
        size="md"
        className="select"
        dataTestId="select"
        options={cell.column.options}
        defaultValue={cell.column.defaultOption}
        selectedValues={selectedValue}
        onSelect={handleSelect}
        isBadged
        tooltip={cell.column.getTooltip(row)}
      />
    </td>
  );
};

/* eslint-disable */
DataGridBadgeSelectCell.propTypes = {
  cell: PropTypes.shape({
    getCellProps: PropTypes.func,
    render: PropTypes.func,
    column: PropTypes.object,
    options: PropTypes.arrayOf({
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
      }),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  row: PropTypes.object,
  updateData: PropTypes.func,
};
/* eslint-enable */

DataGridBadgeSelectCell.defaultProps = {
  cell: undefined,
};

export default DataGridBadgeSelectCell;
