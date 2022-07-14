import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';

const DataGridEditableCell = ({ cell, row, updateData }) => {
  const cellProps = typeof cell.value === 'object' ? cell.value : { value: cell.value };

  const [value, setValue] = useState('');

  const dataGridEditableCellClassNames = classNames(
    'onex-data-grid-editable-cell',
    `onex-data-grid-editable-cell__text-align-${
      cell?.column.textAlign ? cell?.column.textAlign : 'left'
    }`,
    `onex-data-grid-editable-cell__text-variant-${
      cell?.column.textVariant ? cell?.column.textVariant : 'regular'
    }`,
    {
      'onex-data-grid__cell-divider': cell?.column.hasDivider,
    },
  );

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
    <td className={dataGridEditableCellClassNames} {...cell.getCellProps()}>
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  row: PropTypes.object,
  updateData: PropTypes.func,
};
/* eslint-enable */

DataGridEditableCell.defaultProps = {
  cell: undefined,
  updateData: undefined,
};

export default DataGridEditableCell;
