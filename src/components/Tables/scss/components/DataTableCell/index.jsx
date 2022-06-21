import classNames from 'classnames';
import PropTypes from 'prop-types';

const DataTableCell = (props) => {
  const { img, icon, subTitle, iconPosition, children, className, dataTestId, ...accProps } = props;

  const dataTableClasses = classNames('onex-data-table', {
    [className]: className,
  });

  return (
    <div {...accProps} className={dataTableClasses} data-test-id={dataTestId}>
      {img && <span className="onex-data-table__img">{img}</span>}
      {icon && iconPosition === 'start' && (
        <span className="onex-data-table__icon onex-data-table__icon--start">{icon}</span>
      )}
      <div className="onex-data-table__text">
        <span className="onex-data-table__title">{children}</span>
        {subTitle && <span className="onex-data-table__subTitle">{subTitle}</span>}
      </div>
      {icon && iconPosition === 'end' && (
        <span className="onex-data-table__icon onex-data-table__icon--end">{icon}</span>
      )}
    </div>
  );
};

DataTableCell.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  img: PropTypes.node,
  subTitle: PropTypes.string,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  dataTestId: PropTypes.string,
};

DataTableCell.defaultProps = {
  className: undefined,
  icon: undefined,
  img: undefined,
  subTitle: undefined,
  iconPosition: 'start',
  children: undefined,
  dataTestId: undefined,
};

export default DataTableCell;
