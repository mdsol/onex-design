import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataGridTable from '../DataGridTable';
import DataGridControl from '../DataGridControl';
import { DataGridControlTypes, DataGridBulkActionsType } from '../../types/dataGridTypes';

const DataGrid = ({
  className,
  data,
  columns,
  rowsPerPageOptions,
  sortBy,
  dataGridControlProps,
  customGridControl,
  dataGridBulkActionsProps,
  handleUpdateData,
  selectedRowIds,
  useRowSelection,
  rowSelectionType,
  handleSelection,
  draggable,
  ...accProps
}) => {
  const dataRef = useRef(data);
  const [renderedData, setRenderedData] = useState(data);
  const [skipPageReset, setSkipPageReset] = useState(false);
  const [bulkActionsProps, setBulkActionsProps] = useState({});
  const dataGridClasses = classNames('onex-data-grid', {
    [className]: className,
  });

  useEffect(() => setRenderedData(data), [data]);

  const updateData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);
    dataRef.current = dataRef.current.map((row, index) => {
      if (index === rowIndex) {
        return {
          ...dataRef.current[rowIndex],
          [columnId]:
            typeof dataRef.current[rowIndex][columnId] === 'object' &&
            dataRef.current[rowIndex][columnId] !== null
              ? { ...dataRef.current[rowIndex][columnId], value }
              : value,
        };
      }
      return row;
    });
  };

  useEffect(() => {
    setSkipPageReset(false);
    handleUpdateData?.(dataRef.current);
  }, [dataRef.current]);

  return (
    <div className={dataGridClasses}>
      {customGridControl ||
        (dataGridControlProps && (
          <DataGridControl
            {...dataGridControlProps}
            dataTableBindingProps={bulkActionsProps}
            dataGridBulkActionsProps={dataGridBulkActionsProps}
          />
        ))}
      <DataGridTable
        columns={columns}
        data={renderedData}
        rowsPerPageOptions={rowsPerPageOptions}
        sortBy={sortBy}
        updateData={updateData}
        skipPageReset={skipPageReset}
        handleUpdateData={handleUpdateData}
        selectedRowIds={selectedRowIds}
        useRowSelection={useRowSelection}
        rowSelectionType={rowSelectionType}
        handleSelection={handleSelection}
        draggable={draggable}
        setData={setRenderedData}
        setBulkActionsProps={setBulkActionsProps}
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
      type: PropTypes.oneOf(['action', 'custom', 'editable']),
      hasDivider: PropTypes.bool,
      textAlign: PropTypes.oneOf(['left', 'right']),
      textVariant: PropTypes.oneOf(['regular', 'semibold']),
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          Header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
          accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
          type: PropTypes.oneOf(['action', 'custom', 'editable']),
          hasDivider: PropTypes.bool,
          textAlign: PropTypes.oneOf(['left', 'right']),
          textVariant: PropTypes.oneOf(['regular', 'semibold']),
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
  dataGridBulkActionsProps: DataGridBulkActionsType,
  handleUpdateData: PropTypes.func,
  selectedRowIds: PropTypes.object,
  useRowSelection: PropTypes.bool,
  rowSelectionType: PropTypes.oneOf(['single', 'multi']),
  handleSelection: PropTypes.func,
  draggable: PropTypes.bool,
};
/* eslint-enable */

DataGrid.defaultProps = {
  className: undefined,
  data: [{}],
  columns: [],
  rowsPerPageOptions: [],
  sortBy: [],
  multiSort: false,
  dataGridControlProps: {},
  customGridControl: null,
  dataGridBulkActionsProps: null,
  handleUpdateData: undefined,
  selectedRowIds: {},
  useRowSelection: false,
  rowSelectionType: 'multi',
  handleSelection: undefined,
  draggable: false,
};

export default DataGrid;
