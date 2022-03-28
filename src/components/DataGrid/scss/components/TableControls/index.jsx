import { FilterIcon } from '../../../../../icons';

import Typography from '../../../../Typography/scss';
import Badge from '../../../../Badge/scss';
import TextField from '../../../../TextField/scss';
import Button from '../../../../Buttons/scss';

const TableControls = () => (
  <div className="onex-dataGrid__tableControls">
    <div className="onex-dataGrid__tableControls__title">
      <Typography variant="h4">Title</Typography>
      <Badge type="default" className="onex-dataGrid__tableControls__title__badge">
        100
      </Badge>
    </div>
    <div className="onex-dataGrid__tableControls__controls">
      <div />
      <div />
      <div className="onex-dataGrid__tableControls__controls__filter">
        <FilterIcon />
      </div>
      <TextField size="sm" placeholder="Search" showDefaultIcon />
      <span className="onex-dataGrid__tableControls__controls__divider" />
      <Button size="sm" variant="primary">
        Action Button
      </Button>
    </div>
  </div>
);

export default TableControls;
