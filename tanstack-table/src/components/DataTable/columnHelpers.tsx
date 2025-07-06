import type { ColumnDef } from '@tanstack/react-table';
import React from 'react';

// Helper to create a sortable text column
export function createSortableColumn<T>(
  accessorKey: keyof T,
  header: string,
  options?: {
    enableSorting?: boolean;
    cell?: (value: unknown) => React.ReactNode;
    size?: number;
    widthPercent?: number; // Percentage-based width (0-100)
  }
): ColumnDef<T> {
  return {
    accessorKey: accessorKey as string,
    header: ({ column }) => (
      <button
        className="flex items-center gap-2 font-medium hover:text-gray-900"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        {header}
        {column.getIsSorted() === 'asc' && <span>↑</span>}
        {column.getIsSorted() === 'desc' && <span>↓</span>}
        {!column.getIsSorted() && <span className="text-gray-400">↑↓</span>}
      </button>
    ),
    cell: options?.cell ? ({ getValue }) => options.cell!(getValue()) : ({ getValue }) => getValue(),
    enableSorting: options?.enableSorting ?? true,
    size: options?.size ?? 150,
    meta: {
      widthPercent: options?.widthPercent,
    },
  };
}

// Helper to create a selection column
export function createSelectionColumn<T>(options?: { size?: number; widthPercent?: number }): ColumnDef<T> {
  return {
    id: 'select',
    header: ({ table }) => (
      <div className="flex items-center">
        <input
          type="checkbox"
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          checked={table.getIsAllPageRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center">
        <input
          type="checkbox"
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      </div>
    ),
    enableSorting: false,
    enableGlobalFilter: false,
    size: options?.size ?? 50,
    meta: {
      widthPercent: options?.widthPercent,
    },
  };
}

// Helper to create a badge/status column
export function createBadgeColumn<T>(
  accessorKey: keyof T,
  header: string,
  statusMap: Record<string, { label: string; className: string }>,
  options?: {
    size?: number;
    widthPercent?: number;
  }
): ColumnDef<T> {
  return {
    accessorKey: accessorKey as string,
    header,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      const status = statusMap[value] || { label: value, className: 'bg-gray-100 text-gray-800' };
      
      return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.className}`}>
          {status.label}
        </span>
      );
    },
    size: options?.size ?? 120,
    meta: {
      widthPercent: options?.widthPercent,
    },
  };
}

// Helper to create an actions column
export function createActionsColumn<T>(
  actions: Array<{
    label: string;
    onClick: (row: T) => void;
    icon?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
  }>,
  options?: {
    size?: number;
    widthPercent?: number;
  }
): ColumnDef<T> {
  return {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => action.onClick(row.original)}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
              action.variant === 'danger'
                ? 'text-red-700 bg-red-50 hover:bg-red-100'
                : action.variant === 'primary'
                ? 'text-blue-700 bg-blue-50 hover:bg-blue-100'
                : 'text-gray-700 bg-gray-50 hover:bg-gray-100'
            }`}
          >
            {action.icon && <span className="mr-1">{action.icon}</span>}
            {action.label}
          </button>
        ))}
      </div>
    ),
    enableSorting: false,
    enableGlobalFilter: false,
    size: options?.size ?? 120,
    meta: {
      widthPercent: options?.widthPercent,
    },
  };
} 

// Helper to create an avatar column
export function createAvatarColumn<T>(
  accessorKey: keyof T,
  nameKey: keyof T,
  header: string = 'User',
  options?: {
    size?: number;
    widthPercent?: number;
  }
): ColumnDef<T> {
  return {
    accessorKey: accessorKey as string,
    header,
    cell: ({ row }) => {
      const email = row.getValue(accessorKey as string) as string;
      const name = (row.original as T)[nameKey] as string;
      const initials = name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();
      
      return (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-sm font-medium text-blue-800">{initials}</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
      );
    },
    size: options?.size ?? 280,
    meta: {
      widthPercent: options?.widthPercent,
    },
  };
}

// Default status configurations
export const statusConfigs = {
  userStatus: {
    active: { label: 'Active', className: 'bg-green-100 text-green-800' },
    inactive: { label: 'Inactive', className: 'bg-red-100 text-red-800' },
    pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-800' },
  },
  priority: {
    high: { label: 'High', className: 'bg-red-100 text-red-800' },
    medium: { label: 'Medium', className: 'bg-yellow-100 text-yellow-800' },
    low: { label: 'Low', className: 'bg-green-100 text-green-800' },
  },
}; 