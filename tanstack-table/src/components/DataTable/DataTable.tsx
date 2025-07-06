import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import type { DataTableProps, PaginationInfo, SortingState } from './types';
import { TableHeader } from './TableHeader';
import { TablePagination } from './TablePagination';
import { TableBody } from './TableBody';

const defaultConfig = {
  enableSorting: true,
  enableSelection: true,
  enablePagination: true,
  enableFiltering: true,
  initialPageSize: 25,
  pageSizeOptions: [25, 50, 100],
};

export function DataTable<T>({
  data,
  columns,
  header,
  config = {},
  loading = false,
  emptyMessage = 'No data available',
  className = '',
  showEditColumns = false,
  onEditColumnsClick,
  editColumnsLabel = 'Edit Columns',
}: DataTableProps<T>) {
  const tableConfig = { ...defaultConfig, ...config };

  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState(tableConfig.enableSelection ? {} : {});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: tableConfig.initialPageSize,
  });

  const table = useReactTable<T>({
    data,
    columns,
    state: {
      ...(tableConfig.enableFiltering && { globalFilter }),
      ...(tableConfig.enableSorting && { sorting }),
      ...(tableConfig.enableSelection && { rowSelection }),
      ...(tableConfig.enablePagination && { pagination }),
    },
    ...(tableConfig.enableFiltering && {
      onGlobalFilterChange: setGlobalFilter,
      globalFilterFn: (row, columnId, filterValue) => {
        const value = row.getValue(columnId);
        return String(value).toLowerCase().includes(filterValue.toLowerCase());
      },
    }),
    ...(tableConfig.enableSorting && { onSortingChange: setSorting }),
    ...(tableConfig.enableSelection && { onRowSelectionChange: setRowSelection }),
    ...(tableConfig.enablePagination && { onPaginationChange: setPagination }),
    getCoreRowModel: getCoreRowModel(),
    ...(tableConfig.enableFiltering && { getFilteredRowModel: getFilteredRowModel() }),
    ...(tableConfig.enableSorting && { getSortedRowModel: getSortedRowModel() }),
    ...(tableConfig.enablePagination && { getPaginationRowModel: getPaginationRowModel() }),
    ...(tableConfig.enableSelection && { enableRowSelection: true }),
  });

  // Future: could notify parent of state changes if needed

  const paginationInfo: PaginationInfo = {
    currentPage: pagination.pageIndex + 1,
    totalPages: table.getPageCount(),
    pageSize: pagination.pageSize,
    totalItems: data.length,
    startItem: pagination.pageIndex * pagination.pageSize + 1,
    endItem: Math.min((pagination.pageIndex + 1) * pagination.pageSize, data.length),
  };

  return (
    <div className={`bg-gray-50 min-h-screen ${className}`}>
      {header && (
        <TableHeader
          header={header}
          globalFilter={globalFilter}
          onGlobalFilterChange={setGlobalFilter}
          enableFiltering={tableConfig.enableFiltering}
          rowSelection={rowSelection}
          totalItems={data.length}
        />
      )}

      {/* Table Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className="border-b border-gray-200">
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <TableBody
              table={table}
              loading={loading}
              emptyMessage={emptyMessage}
              columnsCount={columns.length}
            />
          </table>
        </div>

        {tableConfig.enablePagination && (
          <TablePagination
            table={table}
            paginationInfo={paginationInfo}
            pageSizeOptions={tableConfig.pageSizeOptions}
            showEditColumns={showEditColumns}
            onEditColumnsClick={onEditColumnsClick}
            editColumnsLabel={editColumnsLabel}
          />
        )}
      </div>
    </div>
  );
}

export default DataTable; 