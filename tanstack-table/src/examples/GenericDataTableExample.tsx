import { GenericDataTable } from '../DBTable/GenericDataTable';
import { 
  createSelectionColumn, 
  createSortableColumn, 
  createBadgeColumn, 
  createAvatarColumn
} from '../components/DataTable/columnHelpers';
import { userData, type User } from '../data/userData';

export function GenericDataTableExample() {
  // Table configuration
  const config = {
    enableSorting: true,
    enableSelection: false,
    enablePagination: true,
    initialPageSize: 25,
    pageSizeOptions: [25, 50, 100],
  };

  // Define columns using helper functions - conditionally include selection column
  const columns = [
    ...(config.enableSelection ? [createSelectionColumn<User>()] : []),
    createAvatarColumn<User>('email', 'name', 'User'),
    createSortableColumn<User>('department', 'Department'),
    createSortableColumn<User>('assignedView', 'Assigned View'),
    createSortableColumn<User>('permissions', 'Permissions'),
    createBadgeColumn<User>('communicationSyncStatus', 'Sync Status', {
      'Initial': { label: 'Initial', className: 'bg-green-100 text-green-800' },
      'Not Included': { label: 'Not Included', className: 'bg-yellow-100 text-yellow-800' },
    }),
    createSortableColumn<User>('dateCreated', 'Date Created'),
  ];

  // Define header configuration
  const header = {
    title: 'Users',
    subtitle: 'Manage your team members and their access',
    actions: [
      {
        label: 'Export',
        onClick: () => console.log('Export clicked'),
        variant: 'secondary' as const,
      },
      {
        label: 'Create New',
        onClick: () => console.log('Create clicked'),
        variant: 'primary' as const,
      },
      {
        label: 'Import Users',
        onClick: () => console.log('Import clicked'),
        variant: 'secondary' as const,
      },
    ],
  };

  return (
    <GenericDataTable<User>
      data={userData}
      columns={columns}
      header={header}
      config={config}
    />
  );
} 