import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState } from 'react';
import Select from '../../../../../../Select/scss';

const DataGridBadgeSelectCell = ({ cell, row, updateData }) => {
  const cellProps = typeof cell.value === 'object' ? cell.value : { value: cell.value };
  const badgeSelectProps = cell?.value?.badgeSelectProps || {};
  const DataGridBadgeSelectCellClassNames = classNames('onex-data-grid-select-badge');

  const [selectedValue, setSelectedValue] = useState(cellProps.value || cell.column.defaultOption);

  const handleSelect = (value) => {
    setSelectedValue(value[0]);
    updateData(row.index, cell?.column.id, value[0]);
  };

  return (
    <td className={DataGridBadgeSelectCellClassNames} {...cell.getCellProps()}>
      <Select
        size="md"
        className="select"
        dataTestId="select"
        options={cell.column.options}
        selectedValues={selectedValue}
        onSelect={handleSelect}
        isBadged
        tooltip={
          (badgeSelectProps.tooltipType && {
            type: badgeSelectProps.tooltipType,
            text: badgeSelectProps.tooltipText,
          }) ||
          cell.column.getTooltip(cell)
        }
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
