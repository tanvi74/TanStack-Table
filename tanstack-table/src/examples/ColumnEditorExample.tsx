import { userData, type User } from '../data/userData';
import { 
  createSelectionColumn, 
  createSortableColumn, 
  createBadgeColumn, 
  createAvatarColumn
} from '../components/DataTable/columnHelpers';
import type { ColumnDef } from '@tanstack/react-table';
import ColumnEditorTable from '../DBTable/ColumnEditorTable';

// Example usage with User data
export function ColumnEditorExample() {
  // Define all possible columns for User type
  const allColumns: Record<string, ColumnDef<User>> = {
    select: createSelectionColumn<User>(),
    user: createAvatarColumn<User>('email', 'name', 'Email'),
    department: createSortableColumn<User>('department', 'Department'),
    assignedView: createSortableColumn<User>('assignedView', 'Assigned View'),
    permissions: createSortableColumn<User>('permissions', 'Permissions'),
    communicationSyncStatus: createBadgeColumn<User>('communicationSyncStatus', 'Communication Sync Status', {
      'Initial': { label: 'Initial', className: 'bg-green-100 text-green-800' },
      'Not Included': { label: 'Not Included', className: 'bg-yellow-100 text-yellow-800' },
    }),
    dateCreated: createSortableColumn<User>('dateCreated', 'Date Created'),
    id: createSortableColumn<User>('id', 'External User Id'),
  };

  // Default visible columns
  const defaultVisibleColumns = ['select', 'user', 'department', 'assignedView', 'permissions', 'communicationSyncStatus', 'dateCreated'];

  // Column display names
  const columnDisplayNames: Record<string, string> = {
    user: 'Email',
    department: 'Department',
    assignedView: 'Assigned View',
    permissions: 'Permissions',
    communicationSyncStatus: 'Communication Sync Status',
    dateCreated: 'Date Created',
    id: 'External User Id',
  };

  // Header actions
  const headerActions = [
    {
      label: 'Import Users',
      onClick: () => console.log('Import Users clicked'),
      variant: 'secondary' as const,
    },
  ];

  return (
    <ColumnEditorTable<User>
      data={userData}
      allColumns={allColumns}
      defaultVisibleColumns={defaultVisibleColumns}
      columnDisplayNames={columnDisplayNames}
      tableTitle={`Users`}
      headerActions={headerActions}
    />
  );
}

export default ColumnEditorExample; 