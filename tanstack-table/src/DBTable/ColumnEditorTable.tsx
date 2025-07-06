import { useState, useMemo } from 'react';
import { DataTable } from '../components/DataTable/DataTable';
import type { ColumnDef, VisibilityState } from '@tanstack/react-table';

// Generic interface for column editor configuration
interface ColumnEditorConfig<T> {
  data: T[];
  allColumns: Record<string, ColumnDef<T>>;
  defaultVisibleColumns: string[];
  columnDisplayNames: Record<string, string>;
  tableTitle: string;
  headerActions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  }>;
}

// Generic ColumnEditorExample component
function ColumnEditorTable<T>({
  data,
  allColumns,
  defaultVisibleColumns,
  columnDisplayNames,
  tableTitle,
  headerActions = [],
}: ColumnEditorConfig<T>) {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [isColumnEditorOpen, setIsColumnEditorOpen] = useState(false);
  const [selectedNewColumn, setSelectedNewColumn] = useState('');
  // Temporary state for modal changes
  const [tempColumnVisibility, setTempColumnVisibility] = useState<VisibilityState>({});

  // Get current visible columns (using actual table state)
  const visibleColumns = useMemo(() => {
    return Object.keys(allColumns).filter(key => 
      columnVisibility[key] !== false && (defaultVisibleColumns.includes(key) || columnVisibility[key] === true)
    );
  }, [columnVisibility, allColumns, defaultVisibleColumns]);

  // Get temporary visible columns (for modal display)
  const tempVisibleColumns = useMemo(() => {
    return Object.keys(allColumns).filter(key => 
      tempColumnVisibility[key] !== false && (defaultVisibleColumns.includes(key) || tempColumnVisibility[key] === true)
    );
  }, [tempColumnVisibility, allColumns, defaultVisibleColumns]);

  // Current columns for the table
  const columns = useMemo(() => {
    return visibleColumns.map(key => allColumns[key]);
  }, [visibleColumns, allColumns]);

  // Available columns for the dropdown (not currently visible in temp state)
  const availableColumns = useMemo(() => {
    return Object.keys(allColumns).filter(key => 
      !tempVisibleColumns.includes(key) && key !== 'select' // Always keep select available but don't show in dropdown
    );
  }, [tempVisibleColumns, allColumns]);

  const handleAddColumn = (columnKey: string) => {
    if (columnKey && availableColumns.includes(columnKey)) {
      setTempColumnVisibility(prev => ({
        ...prev,
        [columnKey]: true
      }));
      setSelectedNewColumn('');
    }
  };

  const handleRemoveColumn = (columnKey: string) => {
    if (columnKey !== 'select') { // Don't allow removing select column
      setTempColumnVisibility(prev => ({
        ...prev,
        [columnKey]: false
      }));
    }
  };

  const handleResetToDefault = () => {
    setTempColumnVisibility({});
    setSelectedNewColumn('');
  };

  const handleOpenModal = () => {
    // Initialize temp state with current table state
    setTempColumnVisibility(columnVisibility);
    setSelectedNewColumn('');
    setIsColumnEditorOpen(true);
  };

  const handleApply = () => {
    // Apply temp changes to actual table state
    setColumnVisibility(tempColumnVisibility);
    setIsColumnEditorOpen(false);
  };

  const handleCancel = () => {
    // Discard temp changes and close modal
    setTempColumnVisibility({});
    setSelectedNewColumn('');
    setIsColumnEditorOpen(false);
  };

  const getColumnDisplayName = (columnKey: string) => {
    return columnDisplayNames[columnKey] || columnKey;
  };

  // Define header
  const header = {
    title: tableTitle,
    subtitle: '',
    actions: headerActions,
  };

  // Table configuration
  const config = {
    enableSorting: true,
    enableSelection: true,
    enablePagination: true,
    enableFiltering: true,
    initialPageSize: 25,
    pageSizeOptions: [25, 50, 100],
  };

  return (
    <div className="relative">
      {/* Use Generic DataTable with Edit Columns functionality */}
      <DataTable<T>
        data={data}
        columns={columns}
        header={header}
        config={config}
        showEditColumns={true}
        onEditColumnsClick={handleOpenModal}
        editColumnsLabel="Edit Columns"
      />

      {/* Column Editor Modal */}
      {isColumnEditorOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Edit Columns Fields to Display</h2>
              
              {/* Add Column Dropdown */}
              <div className="mb-6">
                <select
                  value={selectedNewColumn}
                  onChange={(e) => {
                    if (e.target.value) {
                      handleAddColumn(e.target.value);
                    }
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select...</option>
                  {availableColumns.map(columnKey => (
                    <option key={columnKey} value={columnKey}>
                      {getColumnDisplayName(columnKey)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Current Columns List */}
              <div className="space-y-3 mb-6">
                {tempVisibleColumns.filter(key => key !== 'select').map(columnKey => (
                  <div key={columnKey} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">☰</span>
                      <span className="font-medium text-gray-900">{getColumnDisplayName(columnKey)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleRemoveColumn(columnKey)}
                        className="text-red-600 hover:text-red-800"
                      >
                        ⊖
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Actions */}
              <div className="flex justify-between">
                <button
                  onClick={handleResetToDefault}
                  className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Reset to default
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleApply}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColumnEditorTable;