import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataGridTable from '../DataGridTable';
import DataGridControl from '../DataGridControl';
import DataGridControlTypes from '../../types/dataGridTypes';

const DataGrid = ({
  className,
  data,
  columns,
  rowsPerPageOptions,
  sortBy,
  dataGridControlProps,
  customGridControl,
  handleUpdateData,
  selectedRowIds,
  useRowSelection,
  rowSelectionType,
  handleSelection,
  ...accProps
}) => {
  const [_data, _setData] = useState(data);
  const [skipPageReset, setSkipPageReset] = useState(false);
  const dataGridClasses = classNames('onex-data-grid', {
    [className]: className,
  });

  const updateData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);
    _setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]:
              typeof old[rowIndex][columnId] === 'object' && old[rowIndex][columnId] !== null
                ? { ...old[rowIndex][columnId], value }
                : value,
          };
        }
        return row;
      }),
    );
  };

  useEffect(() => {
    setSkipPageReset(false);
    handleUpdateData?.(_data);
  }, [_data]);

  return (
    <div className={dataGridClasses}>
      {customGridControl || (dataGridControlProps && <DataGridControl {...dataGridControlProps} />)}
      <DataGridTable
        columns={columns}
        data={_data}
        rowsPerPageOptions={rowsPerPageOptions}
        sortBy={sortBy}
        updateData={updateData}
        skipPageReset={skipPageReset}
        handleUpdateData={handleUpdateData}
        selectedRowIds={selectedRowIds}
        useRowSelection={useRowSelection}
        rowSelectionType={rowSelectionType}
        handleSelection={handleSelection}
        {...accProps}
      />
    </div>
  );
};

/* eslint-disable */
DataGrid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
      accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      type: PropTypes.oneOf(['action', 'custom','editable']),
      hasDivider: PropTypes.bool,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          Header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
          accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
          type: PropTypes.oneOf(['action', 'custom','editable']),
          hasDivider: PropTypes.bool,
          isEditabble: PropTypes.bool,
        }),
      ),
    }),
  ),
  data: PropTypes.array,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  sortBy: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      desc: PropTypes.bool,
    }),
  ),
  multiSort: PropTypes.bool,
  dataGridControlProps: DataGridControlTypes,
  customGridControl: PropTypes.element,
  handleUpdateData: PropTypes.func,
  selectedRowIds: PropTypes.object,
  useRowSelection: PropTypes.bool,
  rowSelectionType: PropTypes.oneOf(['single', 'multi']),
  handleSelection: PropTypes.func,
};
/* eslint-enable */

DataGrid.defaultProps = {
  className: undefined,
  data: [{}],
  columns: [],
  rowsPerPageOptions: [],
  sortBy: [],
  multiSort: false,
  dataGridControlProps: null,
  customGridControl: null,
  handleUpdateData: undefined,
  selectedRowIds: {},
  useRowSelection: false,
  rowSelectionType: 'multi',
  handleSelection: undefined,
};

export default DataGrid;
