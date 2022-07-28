import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../../../../../Icon/scss';
import Tooltip from '../../../../../../Tooltip/scss';

const iconType = {
  info: 'info',
  error: 'error',
  warning: 'warning',
};

const DataGridTooltip = ({ type, message }) => {
  const classes = classNames('onex-data-grid-tooltip', {
    'onex-data-grid-tooltip--info': type === 'info',
    'onex-data-grid-tooltip--error': type === 'error',
    'onex-data-grid-tooltip--warning': type === 'warning',
  });

  return (
    <div className={classes}>
      <Tooltip
        className="onex-data-grid-tooltip-body"
        trigger="hover"
        variant={type === 'info' ? 'default' : type}
        tooltipChildren={message}
        placement="right-start"
      >
        <Icon>{iconType[type]}</Icon>
      </Tooltip>
    </div>
  );
};

DataGridTooltip.propTypes = {
  type: ['info', 'error', 'warning'],
  message: PropTypes.string,
};

DataGridTooltip.defaultProps = {
  type: 'info',
  message: undefined,
};

export default DataGridTooltip;
