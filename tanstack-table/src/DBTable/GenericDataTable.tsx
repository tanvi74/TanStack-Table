import { DataTable } from '../components/DataTable/DataTable';
import type { 
  TableConfig, 
  TableAction, 
  TableHeader 
} from '../components/DataTable/types';
import type { ColumnDef } from '@tanstack/react-table';

// Re-export types for backward compatibility
export interface GenericDataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  header?: TableHeader;
  config?: TableConfig;
  loading?: boolean;
  emptyMessage?: string;
}

export type { TableConfig, TableAction, TableHeader };

export function GenericDataTable<T>({
  data,
  columns,
  header,
  config = {},
  loading = false,
  emptyMessage = 'No data available',
}: GenericDataTableProps<T>) {
  // Use the advanced DataTable component with all features
  return (
    <DataTable<T>
      data={data}
      columns={columns}
      header={header}
      config={config}
      loading={loading}
      emptyMessage={emptyMessage}
    />
  );
}

export default GenericDataTable; 