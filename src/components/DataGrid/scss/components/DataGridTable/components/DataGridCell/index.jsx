import PropTypes from 'prop-types';
import classNames from 'classnames';

import Typography from '../../../../../../Typography/scss';

const DataGridCell = ({ cell, cellIndex }) => {
  console.log('TEST', cell);
  const cellProps = typeof cell.value === 'object' ? cell.value : { value: cell.value };

  const dataGridCellClassNames = classNames('onex-data-grid-cell', {
    'onex-data-grid-cell--caption': cellProps.caption,
    'onex-data-grid-cell--bold': cellProps.style === 'bold',
  });

  return (
    <td className={dataGridCellClassNames} key={`${cell}_${cellIndex}`} {...cell.getCellProps()}>
      <div className="onex-data-grid-cell-content">
        {cellProps.leadingIcon && (
          <div className="onex-data-grid-cell-content__leading-icon">{cellProps.leadingIcon}</div>
        )}
        {cellProps.component && cellProps.component}
        {cellProps?.value && !cellProps.component && (
          <div className="onex-data-grid-cell-content__text">
            <Typography variant="label">{cellProps?.value}</Typography>
            {cellProps.caption && (
              <Typography className="onex-data-grid-cell-content__caption" variant="caption">
                {cellProps.caption}
              </Typography>
            )}
          </div>
        )}
        {cellProps.trailingIcon && (
          <div className="onex-data-grid-cell-content__trailing-icon">
            {' '}
            {cellProps.trailingIcon}{' '}
          </div>
        )}
      </div>
    </td>
  );
};

DataGridCell.propTypes = {
  cell: PropTypes.shape({
    getCellProps: PropTypes.func,
    render: PropTypes.func,
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
  cellIndex: PropTypes.number,
};

DataGridCell.defaultProps = {
  cell: undefined,
  cellIndex: undefined,
};

export default DataGridCell;
