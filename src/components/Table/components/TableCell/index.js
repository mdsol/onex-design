import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableCell = (props) => {
    const { children, className, component, variant, align, width, dataTestId } = props;

    const tableClasses = classNames(
        'onex-table__cell',
        `onex-table__cell--align-${align}`,
        `onex-table__cell--variant-${variant}`,
        {
            [className]: className,
        },
    );

    if (component === 'th' || (component === undefined && variant === 'header')) {
        return (
            <th className={tableClasses} style={{ width }} data-test-id={dataTestId}>
                {children}
            </th>
        );
    }

    return (
        <td className={tableClasses}>
            <div className="cell__container">{children}</div>
        </td>
    );
};

TableCell.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    component: PropTypes.oneOf(['td', 'th']),
    variant: PropTypes.oneOf(['body', 'footer', 'header']),
    align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
    width: PropTypes.string,
    dataTestId: PropTypes.string,
};

TableCell.defaultProps = {
    className: undefined,
    children: undefined,
    component: undefined,
    variant: undefined,
    align: 'left',
    width: 'auto',
    dataTestId: undefined,
};

export default TableCell;
