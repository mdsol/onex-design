import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../../../../../../Typography/scss';
import Icon from '../../../../../../Icon/scss';

const DataGridHeader = ({ column, multiSort }) => {
  const dataGridHeaderClassNames = classNames(
    'onex-data-grid-header-cell',
    `onex-data-grid-cell__text-align-${column.textAlign ? column.textAlign : 'left'}`,
    `onex-data-grid-cell__text-variant-${column.textVariant ? column.textVariant : 'regular'}`,
    {
      'onex-data-grid__table-headers-action-cell': column.type === 'action',
      'onex-data-grid__cell-divider': column.hasDivider,
    },
  );

  if (column.type === 'action') {
    return (
      <th className={dataGridHeaderClassNames} {...column.getHeaderProps()}>
        <div className="onex-data-grid__cell-action-content">{column.render('Header')}</div>
      </th>
    );
  }

  return (
    <th
      className={dataGridHeaderClassNames}
      {...column.getHeaderProps(column.getSortByToggleProps())}
      onClick={() => column.toggleSortBy(undefined, multiSort)}
    >
      <Typography variant="caption" uppercase>
        {column.render('Header')}
      </Typography>
      <span className="onex-data-grid__table-headers-sort-by-icons">
        {column.isSorted && (
          <Icon className="sort-by-icon">
            {column.isSortedDesc ? 'arrow_downward' : 'arrow_upward'}
          </Icon>
        )}
      </span>
    </th>
  );
};

/* eslint-disable */
DataGridHeader.propTypes = {
  column: PropTypes.shape({
    type: PropTypes.oneOf(['action', 'custom','editable']),
    getHeaderProps: PropTypes.func,
    render: PropTypes.func,
    getSortByToggleProps: PropTypes.func,
    hasDivider: PropTypes.bool,
    textAlign: PropTypes.oneOf(['left', 'right']),
    textVariant: PropTypes.oneOf(['regular', 'semibold']),
    toggleSortBy: PropTypes.func,
    isSorted: PropTypes.bool,
    isSortedDesc: PropTypes.bool,
  }),
  multiSort: PropTypes.bool,
};
/* eslint-enable */

DataGridHeader.defaultProps = {
  column: undefined,
  multiSort: undefined,
};

export default DataGridHeader;
