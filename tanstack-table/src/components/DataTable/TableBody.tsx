import { flexRender } from '@tanstack/react-table';
import type { Table } from '@tanstack/react-table';

interface TableBodyProps<T> {
  table: Table<T>;
  loading?: boolean;
  emptyMessage?: string;
  columnsCount: number;
}

export function TableBody<T>({
  table,
  loading = false,
  emptyMessage = 'No data available',
  columnsCount,
}: TableBodyProps<T>) {
  if (loading) {
    return (
      <tbody className="bg-white">
        <tr>
          <td colSpan={columnsCount} className="px-6 py-12 text-center text-gray-500">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="ml-3">Loading...</span>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  if (table.getRowModel().rows.length === 0) {
    return (
      <tbody className="bg-white">
        <tr>
          <td colSpan={columnsCount} className="px-6 py-12 text-center text-gray-500">
            {emptyMessage}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
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
  );
} 