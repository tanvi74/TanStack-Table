import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type SortingState,
  type PaginationState,
  useReactTable,
  type RowSelectionState,
} from '@tanstack/react-table';
import { useState } from 'react';
import { userData, totalUsers, type User } from '../data/userData';

function StandardLayoutTable() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  });

  const columns: ColumnDef<User>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
          className="w-4 h-4"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
          className="w-4 h-4"
        />
      ),
      enableSorting: false,
    },
    {
      id: 'email',
      accessorKey: 'email',
      header: ({ column }) => (
        <button
          className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Email ({totalUsers})</span>
          {column.getIsSorted() === 'asc' && (
            <span className="text-gray-600">↑</span>
          )}
          {column.getIsSorted() === 'desc' && (
            <span className="text-gray-600">↓</span>
          )}
        </button>
      ),
      cell: ({ getValue }) => (
        <span className="text-sm text-gray-900">{getValue() as string}</span>
      ),
    },
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <button
          className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Name</span>
          {column.getIsSorted() === 'asc' && (
            <span className="text-gray-600">↑</span>
          )}
          {column.getIsSorted() === 'desc' && (
            <span className="text-gray-600">↓</span>
          )}
        </button>
      ),
      cell: ({ getValue }) => (
        <span className="text-sm font-medium text-gray-900">{getValue() as string}</span>
      ),
    },
    {
      accessorKey: 'department',
      header: ({ column }) => (
        <button
          className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Department</span>
          {column.getIsSorted() === 'asc' && (
            <span className="text-gray-600">↑</span>
          )}
          {column.getIsSorted() === 'desc' && (
            <span className="text-gray-600">↓</span>
          )}
        </button>
      ),
      cell: ({ getValue }) => (
        <span className="text-sm text-gray-600">{getValue() as string}</span>
      ),
    },
    {
      accessorKey: 'assignedView',
      header: ({ column }) => (
        <button
          className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Assigned View</span>
          {column.getIsSorted() === 'asc' && (
            <span className="text-gray-600">↑</span>
          )}
          {column.getIsSorted() === 'desc' && (
            <span className="text-gray-600">↓</span>
          )}
        </button>
      ),
      cell: ({ getValue }) => (
        <span className="text-sm text-gray-600">{getValue() as string}</span>
      ),
    },
    {
      accessorKey: 'permissions',
      header: ({ column }) => (
        <button
          className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Permissions</span>
          {column.getIsSorted() === 'asc' && (
            <span className="text-gray-600">↑</span>
          )}
          {column.getIsSorted() === 'desc' && (
            <span className="text-gray-600">↓</span>
          )}
        </button>
      ),
      cell: ({ getValue }) => (
        <span className="text-sm text-gray-600">{getValue() as string}</span>
      ),
    },
    {
      accessorKey: 'communicationSyncStatus',
      header: ({ column }) => (
        <button
          className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Communication Sync Status</span>
          {column.getIsSorted() === 'asc' && (
            <span className="text-gray-600">↑</span>
          )}
          {column.getIsSorted() === 'desc' && (
            <span className="text-gray-600">↓</span>
          )}
        </button>
      ),
      cell: ({ getValue }) => (
        <span className="text-sm text-gray-600">{getValue() as string}</span>
      ),
    },
    {
      accessorKey: 'dateCreated',
      header: ({ column }) => (
        <button
          className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Date Created</span>
          {column.getIsSorted() === 'asc' && (
            <span className="text-gray-600">↑</span>
          )}
          {column.getIsSorted() === 'desc' && (
            <span className="text-gray-600">↓</span>
          )}
        </button>
      ),
      cell: ({ getValue }) => (
        <span className="text-sm text-gray-600">{getValue() as string}</span>
      ),
    },
  ];

  const table = useReactTable({
    data: userData,
    columns,
    state: {
      globalFilter,
      sorting,
      rowSelection,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);
      return String(value).toLowerCase().includes(filterValue.toLowerCase());
    },
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Users</h1>
            <p className="text-sm text-gray-600 mt-1">
              {totalUsers} Users
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Export
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              + Create New
            </button>
            <div className="relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                <span>Import Users</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden search input for functionality */}
      <input
        type="text"
        value={globalFilter}
        onChange={e => setGlobalFilter(e.target.value)}
        className="sr-only"
      />

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
            <tbody className="bg-white">
              {table.getRowModel().rows.map((row, index) => (
                <tr 
                  key={row.id} 
                  className={`
                    ${index !== table.getRowModel().rows.length - 1 ? 'border-b border-gray-100' : ''}
                    ${row.getIsSelected() ? 'bg-blue-50' : 'hover:bg-gray-50'}
                  `}
                >
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-3 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span>Rows per Page:</span>
              <select 
                className="border border-gray-300 rounded px-2 py-1 text-sm bg-white"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <span>
                {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} - {' '}
                {Math.min(
                  (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                  totalUsers
                )} (of {totalUsers})
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
      </div>
    </div>
  );
}

export default StandardLayoutTable;
