import type { ColumnDef, RowSelectionState, SortingState, PaginationState } from '@tanstack/react-table';

export type { RowSelectionState, SortingState, PaginationState, ColumnDef };

export interface TableConfig {
  enableSorting?: boolean;
  enableSelection?: boolean;
  enablePagination?: boolean;
  enableFiltering?: boolean;
  initialPageSize?: number;
  pageSizeOptions?: number[];
}

export interface TableAction {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
}

export interface TableHeader {
  title: string;
  subtitle?: string;
  actions?: TableAction[];
  searchPlaceholder?: string;
}

export interface TableState {
  globalFilter: string;
  sorting: SortingState;
  rowSelection: RowSelectionState;
  pagination: PaginationState;
}

export interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  header?: TableHeader;
  config?: TableConfig;
  onStateChange?: (state: Partial<TableState>) => void;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
  showEditColumns?: boolean;
  onEditColumnsClick?: () => void;
  editColumnsLabel?: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  startItem: number;
  endItem: number;
} 