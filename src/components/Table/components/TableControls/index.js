import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableControl = (props) => {
    const { children, className, dataTestId } = props;

    const tableControlsClasses = classNames('c-table-control', {
        [className]: className,
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
    dataTestId: PropTypes.string,
};

TableControl.defaultProps = {
    className: undefined,
    children: undefined,
    dataTestId: undefined,
};

export default TableControl;
