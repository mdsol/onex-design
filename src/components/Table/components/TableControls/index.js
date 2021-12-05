import PropTypes from 'prop-types';
import classNames from 'classnames';
import Badge from '../../../Bagde';

const TableControl = (props) => {
    const { children, className, tableName, badgeTitle, dataTestId } = props;

    const tableControlsClasses = classNames('c-table-control', {
        [className]: className,
        'c-table-control--no-name': !tableName,
    });

    return (
        <div className={tableControlsClasses} data-test-id={dataTestId}>
            {children}
        </div>
    );
};

TableControl.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    tableName: PropTypes.string,
    badgeTitle: PropTypes.string,
    dataTestId: PropTypes.string,
};

TableControl.defaultProps = {
    className: undefined,
    children: undefined,
    tableName: undefined,
    badgeTitle: undefined,
    dataTestId: undefined,
};

export default TableControl;
