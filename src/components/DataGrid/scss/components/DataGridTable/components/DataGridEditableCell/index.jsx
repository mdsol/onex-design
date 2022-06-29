import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';

const DataGridEditableCell = ({ cell, row, cellIndex, updateData }) => {
  const cellProps = typeof cell.value === 'object' ? cell.value : { value: cell.value };

  const [value, setValue] = useState('');

  const dataGridEditableCellClassNames = classNames('onex-data-grid-editable-cell', {
    'onex-data-grid__cell-divider': cell?.column.hasDivider,
  });

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateData(row.index, cell?.column.id, value);
  };

  useEffect(() => {
    setValue(cellProps.value);
  }, [cellProps.value]);

  return (
    <td
      className={dataGridEditableCellClassNames}
      key={`body_cell_${cellIndex}`}
      {...cell.getCellProps()}
    >
      <Form.Control
        className="onex-data-grid-editable-cell__input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </td>
  );
};

/* eslint-disable */
DataGridEditableCell.propTypes = {
  cell: PropTypes.shape({
    getCellProps: PropTypes.func,
    render: PropTypes.func,
    column: PropTypes.object,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        leadingIcon: PropTypes.node,
        trailingIcon: PropTypes.node,
        caption: PropTypes.string,
        style: PropTypes.oneOf(['subtle', 'bold']),
        component: PropTypes.node,
      }),
    ]),
  }),
  row: PropTypes.object,
  cellIndex: PropTypes.number,
  updateData: PropTypes.func,
};
/* eslint-enable */

DataGridEditableCell.defaultProps = {
  cell: undefined,
  cellIndex: undefined,
  updateData: undefined,
};

export default DataGridEditableCell;
