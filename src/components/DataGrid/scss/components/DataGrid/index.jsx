/* eslint-disable no-nested-ternary */
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
  handleDragged,
  draggable,
  getRowId,
  handleSort,
  handlePagination,
  ...accProps
}) => {
  const dataRef = useRef(data);
  const [filterData, setFilterData] = useState({});
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
            isDraggeble={draggable}
            dataTableBindingProps={bulkActionsProps}
            dataGridBulkActionsProps={dataGridBulkActionsProps}
            filterData={filterData}
            setFilterData={setFilterData}
          />
        ))}
      <DataGridTable
        columns={columns}
        data={renderedData}
        rowsPerPageOptions={rowsPerPageOptions}
        sortByData={sortBy}
        updateData={updateData}
        skipPageReset={skipPageReset}
        handleUpdateData={handleUpdateData}
        selectedRowIds={selectedRowIds}
        useRowSelection={useRowSelection}
        rowSelectionType={rowSelectionType}
        handleSelection={handleSelection}
        handleDragged={handleDragged}
        draggable={draggable}
        setData={setRenderedData}
        setBulkActionsProps={setBulkActionsProps}
        getRowId={getRowId}
        filterData={filterData}
        handleFilter={dataGridControlProps?.handleFilter}
        handleSort={handleSort}
        handlePagination={handlePagination}
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
  handleDragged: PropTypes.func,
  getRowId: PropTypes.func,
  draggable: PropTypes.bool,
  handleSort: PropTypes.func,
  handlePagination: PropTypes.func,
};

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
  handleDragged: undefined,
  getRowId: (row, relativeIndex, parent) =>
    row?.id ? row.id : parent ? [`s.${parent.id}`, relativeIndex].join('.') : `s.${relativeIndex}`,
  draggable: false,
  handleSort: undefined,
};

export default DataGrid;
