import { useState, useEffect, useCallback, useMemo } from 'react';
import { InfiniteDataTable } from '../components/DataTable/InfiniteDataTable';
import { userData, type User } from '../data/userData';
import { 
  createSelectionColumn, 
  createSortableColumn, 
  createBadgeColumn, 
  createAvatarColumn
} from '../components/DataTable/columnHelpers';
import type { ColumnDef } from '@tanstack/react-table';
import type { InfiniteTableConfig } from '../components/DataTable/InfiniteDataTable';

// Extended user data generator for infinite scrolling
const generateExtendedUserData = (size: number, pageNumber: number): User[] => {
  const extendedData: User[] = [];
  for (let i = 0; i < size; i++) {
    const baseUser = userData[i % userData.length];
    extendedData.push({
      ...baseUser,
      id: `${baseUser.id}-page-${pageNumber}-${i}`,
      email: `${baseUser.email.split('@')[0]}-p${pageNumber}-${i}@${baseUser.email.split('@')[1]}`,
      name: `${baseUser.name} (Page ${pageNumber}, Item ${i + 1})`,
    });
  }
  return extendedData;
};

// Generic infinite table example for Users
export function InfiniteDataTableExample() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  
  const pageSize = 50;
  const maxPages = 20; // Simulate 1000 total items

  // Define columns for User data with percentage-based widths
  const columns = useMemo<ColumnDef<User>[]>(() => [
    createSelectionColumn<User>({ widthPercent: 5 }),
    createAvatarColumn<User>('email', 'name', 'User', { widthPercent: 35 }),
    createSortableColumn<User>('department', 'Department', { widthPercent: 12 }),
    createSortableColumn<User>('assignedView', 'Assigned View', { widthPercent: 15 }),
    createSortableColumn<User>('permissions', 'Permissions', { widthPercent: 15 }),
    createBadgeColumn<User>('communicationSyncStatus', 'Status', {
      'Initial': { label: 'Initial', className: 'bg-green-100 text-green-800' },
      'Not Included': { label: 'Not Included', className: 'bg-yellow-100 text-yellow-800' },
    }, { widthPercent: 10 }),
    createSortableColumn<User>('dateCreated', 'Date Created', { widthPercent: 8 }),
  ], []);

  // Header configuration
  const header = {
    title: 'Infinite Scrolling Users',
    subtitle: 'Scroll to load more users automatically',
    actions: [
      {
        label: 'Export All',
        onClick: () => console.log('Export all users:', data.length),
        variant: 'secondary' as const,
      },
      {
        label: 'Refresh',
        onClick: () => {
          setData([]);
          setPage(0);
          setHasMore(true);
        },
        variant: 'secondary' as const,
      },
    ],
  };

  // Table configuration
  const config: InfiniteTableConfig = {
    enableSorting: true,
    enableSelection: true,
    enableFiltering: true,
    height: 600,
    estimateSize: 60,
    overscan: 5,
    loadMoreThreshold: 5,
  };

  // Initial load
  useEffect(() => {
    const initialData = generateExtendedUserData(pageSize, 0);
    setData(initialData);
    setPage(1);
  }, []);

  // Fetch more data function
  const fetchMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newData = generateExtendedUserData(pageSize, page);
    setData(prev => [...prev, ...newData]);
    setPage(prev => prev + 1);
    
    // Check if we've reached the maximum pages
    if (page >= maxPages) {
      setHasMore(false);
    }
    
    setLoading(false);
  }, [loading, hasMore, page, pageSize, maxPages]);

  return (
    <InfiniteDataTable<User>
      data={data}
      columns={columns}
      header={header}
      config={config}
      loading={loading}
      hasMore={hasMore}
      onFetchMore={fetchMore}
      emptyMessage="No users found"
    />
  );
}

export default InfiniteDataTableExample; 