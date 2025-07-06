import type { Table } from '@tanstack/react-table';
import type { PaginationInfo } from './types';

interface TablePaginationProps<T> {
  table: Table<T>;
  paginationInfo: PaginationInfo;
  pageSizeOptions?: number[];
  showEditColumns?: boolean;
  onEditColumnsClick?: () => void;
  editColumnsLabel?: string;
}

export function TablePagination<T>({
  table,
  paginationInfo,
  pageSizeOptions = [25, 50, 100],
  showEditColumns = false,
  onEditColumnsClick,
  editColumnsLabel = 'Edit Columns',
}: TablePaginationProps<T>) {
  return (
    <div className="border-t border-gray-200 px-6 py-3 bg-gray-50">
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center gap-4">
          {showEditColumns && (
            <button
              onClick={onEditColumnsClick}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium shadow-sm"
            >
              {editColumnsLabel}
            </button>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span>Rows per Page:</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm bg-white"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>
            {paginationInfo.startItem} - {paginationInfo.endItem} (of {paginationInfo.totalItems})
          </span>
          <div className="flex gap-1">
            <button
              className="p-1 rounded hover:bg-gray-200 disabled:opacity-50"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="p-1 rounded hover:bg-gray-200 disabled:opacity-50"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 