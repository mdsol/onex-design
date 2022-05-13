import PropTypes from 'prop-types';

import Typography from '../../../../Typography/scss';
import Badge from '../../../../Badge/scss';
import TextField from '../../../../TextField/scss';
import Button from '../../../../Buttons/scss';

const TableControls = ({ title, rowsQuantity }) => (
  <div className="onex-dataGrid__tableControls">
    <div className="onex-dataGrid__tableControls__title">
      <Typography variant="h4">{title}</Typography>
      {/* <Badge type="default" className="onex-dataGrid__tableControls__title__badge">
        {rowsQuantity}
      </Badge> */}
    </div>
    {/* <div className="onex-dataGrid__tableControls__controls">
      <div className="onex-dataGrid__tableControls__controls__filter">
        // TODO: check filter icon
      </div>
      <TextField size="sm" placeholder="Search" showDefaultIcon />
      <span className="onex-dataGrid__tableControls__controls__divider" />
      <Button size="sm" variant="primary">
        Action Button
      </Button>
    </div> */}
  </div>
);

TableControls.propTypes = {
  title: PropTypes.string,
  rowsQuantity: PropTypes.number,
};

TableControls.defaultProps = {
  title: '',
  rowsQuantity: 0,
};

export default TableControls;
