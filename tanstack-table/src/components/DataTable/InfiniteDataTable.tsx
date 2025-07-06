import { useState, useEffect, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';
import { TableHeader } from './TableHeader';
import type { TableHeader as TableHeaderType, TableConfig } from './types';

// Custom meta type for columns with percentage width support
interface ColumnMetaWithPercent {
  widthPercent?: number;
}

// Generic infinite table configuration
export interface InfiniteTableConfig extends Omit<TableConfig, 'enablePagination'> {
  height?: number;
  estimateSize?: number;
  overscan?: number;
  loadMoreThreshold?: number;
}

// Generic infinite data table props
export interface InfiniteDataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  header?: TableHeaderType;
  config?: InfiniteTableConfig;
  loading?: boolean;
  hasMore?: boolean;
  onFetchMore?: () => void;
  emptyMessage?: string;
  className?: string;
}

// Default configuration for infinite tables
const defaultInfiniteConfig: InfiniteTableConfig = {
  enableSorting: true,
  enableSelection: true,
  enableFiltering: true,
  height: 600,
  estimateSize: 60,
  overscan: 5,
  loadMoreThreshold: 5,
};

export function InfiniteDataTable<T>({
  data,
  columns,
  header,
  config = {},
  loading = false,
  hasMore = true,
  onFetchMore,
  emptyMessage = 'No data available',
  className = '',
}: InfiniteDataTableProps<T>) {
  const tableConfig = { ...defaultInfiniteConfig, ...config };
  
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState(tableConfig.enableSelection ? {} : {});

  const table = useReactTable<T>({
    data,
    columns,
    state: {
      ...(tableConfig.enableFiltering && { globalFilter }),
      ...(tableConfig.enableSorting && { sorting }),
      ...(tableConfig.enableSelection && { rowSelection }),
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
    getCoreRowModel: getCoreRowModel(),
    ...(tableConfig.enableFiltering && { getFilteredRowModel: getFilteredRowModel() }),
    ...(tableConfig.enableSorting && { getSortedRowModel: getSortedRowModel() }),
    ...(tableConfig.enableSelection && { enableRowSelection: true }),
  });

  const { rows } = table.getRowModel();
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => tableConfig.estimateSize || 60,
    overscan: tableConfig.overscan || 5,
  });

  // Infinite scrolling logic
  useEffect(() => {
    if (!onFetchMore || !hasMore || loading) return;

    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();
    
    if (!lastItem) return;

    const threshold = tableConfig.loadMoreThreshold || 5;
    if (lastItem.index >= rows.length - threshold) {
      onFetchMore();
    }
  }, [hasMore, onFetchMore, loading, rows.length, rowVirtualizer.getVirtualItems(), tableConfig.loadMoreThreshold]);

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

      {/* Virtualized Table Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 overflow-hidden">
        {/* Table Header - Using flex layout */}
        <div className="bg-gray-50 border-b border-gray-200">
          {table.getHeaderGroups().map(headerGroup => (
            <div key={headerGroup.id} className="flex w-full">
              {headerGroup.headers.map(header => {
                const widthPercent = (header.column.columnDef.meta as ColumnMetaWithPercent)?.widthPercent;
                return (
                  <div
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={
                      widthPercent
                        ? { 
                            flexBasis: `${widthPercent}%`,
                            minWidth: 0,
                            maxWidth: 'none'
                          }
                        : { 
                            width: `${header.getSize()}px`,
                            minWidth: `${header.getSize()}px`,
                            maxWidth: `${header.getSize()}px`,
                            flexShrink: 0
                          }
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Virtualized Table Body */}
        <div
          ref={parentRef}
          className="overflow-auto bg-white relative"
          style={{ height: `${tableConfig.height}px` }}
        >
          {rows.length === 0 && !loading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">{emptyMessage}</p>
            </div>
          ) : (
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: '100%',
                position: 'relative',
              }}
            >
              {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const row = rows[virtualRow.index];
                return (
                  <div
                    key={row.id}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                    className={`transition-colors duration-150 border-b border-gray-100 hover:bg-gray-50 ${
                      row.getIsSelected() ? 'bg-blue-50' : 'bg-white'
                    }`}
                  >
                    <div className="flex h-full items-center w-full">
                      {row.getVisibleCells().map((cell) => {
                        const widthPercent = (cell.column.columnDef.meta as ColumnMetaWithPercent)?.widthPercent;
                        return (
                          <div
                            key={cell.id}
                            className="px-6 py-4 whitespace-nowrap text-sm flex items-center"
                            style={
                              widthPercent
                                ? { 
                                    flexBasis: `${widthPercent}%`,
                                    minWidth: 0,
                                    maxWidth: 'none'
                                  }
                                : { 
                                    width: `${cell.column.getSize()}px`,
                                    minWidth: `${cell.column.getSize()}px`,
                                    maxWidth: `${cell.column.getSize()}px`,
                                    flexShrink: 0
                                  }
                            }
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading more data...</span>
            </div>
          </div>
        )}

        {/* Stats Footer */}
        <div className="border-t border-gray-200 px-6 py-3 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-700">
            <span>
              Showing {rows.length.toLocaleString()} of {data.length.toLocaleString()} items
            </span>
            <span>
              {hasMore ? 'Scroll to load more' : 'All data loaded'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfiniteDataTable; 