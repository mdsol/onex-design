import PropTypes from 'prop-types';
import classNames from 'classnames';

const DataTableCell = (props) => {
    const { img, icon, subTitle, iconPosition, children, className, dataTestId } = props;

    const dataTableClasses = classNames('c-data-table', {
        [className]: className,
    });

    return (
        <div className={dataTableClasses} data-test-id={dataTestId}>
            {img && <span className="c-data-table__img">{img}</span>}
            {icon && iconPosition === 'start' && (
                <span className="c-data-table__icon c-data-table__icon--start">{icon}</span>
            )}
            <div className="c-data-table__text">
                <span className="c-data-table__title">{children}</span>
                {subTitle && <span className="c-data-table__subTitle">{subTitle}</span>}
            </div>
            {icon && iconPosition === 'end' && (
                <span className="c-data-table__icon c-data-table__icon--end">{icon}</span>
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
