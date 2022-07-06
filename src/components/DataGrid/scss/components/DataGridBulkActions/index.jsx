import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { DataGridBulkActionsType } from '../../types/dataGridTypes';
import Badge from '../../../../Badge/scss';
import Button from '../../../../Buttons/scss';
import Check from '../../../../Check/scss/index';
import Dropdown from '../../../../Dropdown/scss';

const DataGridBulkActions = ({
  selectedRowsCount,
  isAllRowsSelected,
  actions,
  dropdownActions,
  handleHide,
  className,
  dataTestId,
  ...accProps
}) => {
  const dataGridBulkActions = classNames('onex-data-grid-bulk-actions', {
    [className]: className,
  });

  const [isIndeterminate, setIsIndeterminate] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isAllRowsSelected) {
      setIsIndeterminate(false);
      setIsChecked(true);
    } else {
      setIsChecked(false);
      setIsIndeterminate(true);
    }
  }, [isAllRowsSelected]);

  return (
    <div {...accProps} className={dataGridBulkActions}>
      <Check
        id="bulk-checkbox"
        checked={isChecked}
        indeterminate={isIndeterminate}
        className="onex-data-grid-bulk-actions__checkbox"
        onClick={handleHide}
      />
      <div className="onex-data-grid-bulk-actions__info">
        <span className="label">Selected</span>
        <Badge className="custom-badge" dataTestId="text-badge-id" size="sm" type="primary">
          {selectedRowsCount}
        </Badge>
      </div>
      <div className="onex-data-grid-bulk-actions__actions">
        {actions.map((item) => (
          <Button onClick={item.action} size="sm" variant="secondary" className="action">
            {item.title}
          </Button>
        ))}
        <Dropdown
          variant="secondary"
          id="secondary-actions"
          items={dropdownActions}
          size="sm"
          align="end"
          title="More"
        />
      </div>
    </div>
  );
};

DataGridBulkActions.propTypes = DataGridBulkActionsType;

DataGridBulkActions.defaultProps = {
  selectedRowsCount: 0,
  isAllRowsSelected: false,
  actions: [],
  dropdownActions: [],
  handleHide: undefined,
  className: '',
  dataTestId: '',
};

export default DataGridBulkActions;
