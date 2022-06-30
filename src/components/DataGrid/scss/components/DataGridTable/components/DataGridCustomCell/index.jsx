import PropTypes from 'prop-types';
import classNames from 'classnames';

import Typography from '../../../../../../Typography/scss';

const DataGridCustomCell = ({ cell }) => {
  const cellProps = typeof cell.value === 'object' ? cell.value : { value: cell.value };

  const dataGridCellClassNames = classNames(
    'onex-data-grid-custom-cell',
    `onex-data-grid-cell__text-align-${cell?.column.textAlign ? cell?.column.textAlign : 'left'}`,
    `onex-data-grid-cell__text-variant-${
      cell?.column.textVariant ? cell?.column.textVariant : 'regular'
    }`,
    {
      'onex-data-grid-custom-cell--caption': cellProps.caption,
      'onex-data-grid__cell-divider': cell.column.hasDivider,
    },
  );

  return (
    <td className={dataGridCellClassNames} {...cell.getCellProps()}>
      <div className="onex-data-grid-custom-cell-content">
        {cellProps.leadingIcon && (
          <div className="onex-data-grid-custom-cell-content__leading-icon">
            {cellProps.leadingIcon}
          </div>
        )}
        {cellProps.component && cellProps.component}
        {cellProps?.value && !cellProps.component && (
          <div className="onex-data-grid-custom-cell-content__text">
            <Typography variant="label">{cellProps?.value}</Typography>
            {cellProps.caption && (
              <Typography className="onex-data-grid-custom-cell-content__caption" variant="caption">
                {cellProps.caption}
              </Typography>
            )}
          </div>
        )}
        {cellProps.trailingIcon && (
          <div className="onex-data-grid-custom-cell-content__trailing-icon">
            {cellProps.trailingIcon}
          </div>
        )}
      </div>
    </td>
  );
};

/* eslint-disable */
DataGridCustomCell.propTypes = {
  cell: PropTypes.shape({
    getCellProps: PropTypes.func,
    render: PropTypes.func,
    column: PropTypes.object,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        leadingIcon: PropTypes.node,
        trailingIcon: PropTypes.node,
        caption: PropTypes.string,
        component: PropTypes.node,
      }),
    ]),
  }),
};
/* eslint-enable */

DataGridCustomCell.defaultProps = {
  cell: undefined,
};

export default DataGridCustomCell;
