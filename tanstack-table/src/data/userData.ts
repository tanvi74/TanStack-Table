export type User = {
  id: string;
  email: string;
  name: string;
  department: string;
  assignedView: string;
  permissions: string;
  communicationSyncStatus: string;
  dateCreated: string;
};

export const userData: User[] = [
  // Page 1 - First 25 users
  {
    id: '1',
    email: 'aagrawal@demandbase.com',
    name: 'Ashika Agrawal',
    department: 'demand_gen',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Aug 22, 2022'
  },
  {
    id: '2',
    email: 'aartesona@demandbase.com',
    name: 'Al Artesona',
    department: 'Demand Gen',
    assignedView: 'Standard View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'May 15, 2024'
  },
  {
    id: '3',
    email: 'abauri@demandbase.com',
    name: 'Abhishek Bauri',
    department: 'Advertising',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jan 6, 2025'
  },
  {
    id: '4',
    email: 'abeebe@demandbase.com',
    name: 'Alex Beebe',
    department: 'Demand Gen',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jan 6, 2025'
  },
  {
    id: '5',
    email: 'abenartzi@demandbase.com',
    name: 'Avi Benartzi',
    department: 'Advertising',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Sep 14, 2022'
  },
  {
    id: '6',
    email: 'abkumar@demandbase.com',
    name: 'Abhishek Kumar',
    department: 'marketing',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Oct 17, 2022'
  },
  {
    id: '7',
    email: 'abkumar+dev@demandbase.com',
    name: 'Abhishek Kumar Dev',
    department: 'Advertising',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jan 6, 2025'
  },
  {
    id: '8',
    email: 'ablasco@demandbase.com',
    name: 'Allison Reiss',
    department: 'sales',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jan 6, 2025'
  },
  {
    id: '9',
    email: 'aboles@demandbase.com',
    name: 'Audrey Boles',
    department: 'Advertising',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jan 16, 2025'
  },
  {
    id: '10',
    email: 'aboyanapalli@demandbase.com',
    name: 'Mohit',
    department: 'Demand Gen',
    assignedView: 'Standard View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Sep 20, 2024'
  },
  {
    id: '11',
    email: 'cdavis@demandbase.com',
    name: 'Catherine Davis',
    department: 'Engineering',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Mar 10, 2023'
  },
  {
    id: '12',
    email: 'dsmith@demandbase.com',
    name: 'David Smith',
    department: 'Product',
    assignedView: 'MCM View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jul 8, 2023'
  },
  {
    id: '13',
    email: 'ewilson@demandbase.com',
    name: 'Emily Wilson',
    department: 'Design',
    assignedView: 'Standard View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Nov 15, 2023'
  },
  {
    id: '14',
    email: 'fjohnson@demandbase.com',
    name: 'Frank Johnson',
    department: 'Sales',
    assignedView: 'MCM View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Feb 28, 2024'
  },
  {
    id: '15',
    email: 'gbrown@demandbase.com',
    name: 'Grace Brown',
    department: 'Marketing',
    assignedView: 'Standard View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Apr 12, 2024'
  },
  {
    id: '16',
    email: 'hlee@demandbase.com',
    name: 'Henry Lee',
    department: 'Engineering',
    assignedView: 'MCM View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jun 5, 2024'
  },
  {
    id: '17',
    email: 'igarcia@demandbase.com',
    name: 'Isabella Garcia',
    department: 'HR',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Aug 18, 2024'
  },
  {
    id: '18',
    email: 'jmartinez@demandbase.com',
    name: 'James Martinez',
    department: 'Finance',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Oct 3, 2024'
  },
  {
    id: '19',
    email: 'kanderson@demandbase.com',
    name: 'Karen Anderson',
    department: 'Legal',
    assignedView: 'Standard View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Dec 11, 2024'
  },
  {
    id: '20',
    email: 'lthompson@demandbase.com',
    name: 'Lisa Thompson',
    department: 'Operations',
    assignedView: 'MCM View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jan 14, 2025'
  },
  {
    id: '21',
    email: 'mwhite@demandbase.com',
    name: 'Michael White',
    department: 'Support',
    assignedView: 'Standard View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Jan 20, 2025'
  },
  {
    id: '22',
    email: 'nrodriguez@demandbase.com',
    name: 'Nicole Rodriguez',
    department: 'QA',
    assignedView: 'MCM View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jan 25, 2025'
  },
  {
    id: '23',
    email: 'owilliams@demandbase.com',
    name: 'Oliver Williams',
    department: 'DevOps',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Jan 28, 2025'
  },
  {
    id: '24',
    email: 'ptaylor@demandbase.com',
    name: 'Patricia Taylor',
    department: 'Content',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Jan 30, 2025'
  },
  {
    id: '25',
    email: 'qjones@demandbase.com',
    name: 'Quincy Jones',
    department: 'Business Intelligence',
    assignedView: 'Standard View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Feb 1, 2025'
  },

  // Page 2 - Next 25 users (26-50)
  {
    id: '26',
    email: 'rmiller@demandbase.com',
    name: 'Rachel Miller',
    department: 'Customer Success',
    assignedView: 'MCM View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Feb 3, 2025'
  },
  {
    id: '27',
    email: 'sdavis@demandbase.com',
    name: 'Samuel Davis',
    department: 'Partnerships',
    assignedView: 'Standard View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Feb 5, 2025'
  },
  {
    id: '28',
    email: 'tmoore@demandbase.com',
    name: 'Tiffany Moore',
    department: 'Research',
    assignedView: 'MCM View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Feb 7, 2025'
  },
  {
    id: '29',
    email: 'ujackson@demandbase.com',
    name: 'Ulysses Jackson',
    department: 'Security',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Feb 9, 2025'
  },
  {
    id: '30',
    email: 'vmartin@demandbase.com',
    name: 'Victoria Martin',
    department: 'Training',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Feb 11, 2025'
  },
  {
    id: '31',
    email: 'wthomas@demandbase.com',
    name: 'William Thomas',
    department: 'Analytics',
    assignedView: 'Standard View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Feb 13, 2025'
  },
  {
    id: '32',
    email: 'xharris@demandbase.com',
    name: 'Xavier Harris',
    department: 'Infrastructure',
    assignedView: 'MCM View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Feb 15, 2025'
  },
  {
    id: '33',
    email: 'yclark@demandbase.com',
    name: 'Yolanda Clark',
    department: 'Compliance',
    assignedView: 'Standard View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Feb 17, 2025'
  },
  {
    id: '34',
    email: 'zlewis@demandbase.com',
    name: 'Zachary Lewis',
    department: 'API',
    assignedView: 'MCM View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Feb 19, 2025'
  },
  {
    id: '35',
    email: 'arobinson@demandbase.com',
    name: 'Amanda Robinson',
    department: 'Documentation',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Feb 21, 2025'
  },
  {
    id: '36',
    email: 'bwalker@demandbase.com',
    name: 'Benjamin Walker',
    department: 'Mobile',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Feb 23, 2025'
  },
  {
    id: '37',
    email: 'chall@demandbase.com',
    name: 'Caroline Hall',
    department: 'Web',
    assignedView: 'Standard View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Feb 25, 2025'
  },
  {
    id: '38',
    email: 'dallen@demandbase.com',
    name: 'Daniel Allen',
    department: 'Platform',
    assignedView: 'MCM View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Feb 27, 2025'
  },
  {
    id: '39',
    email: 'eyoung@demandbase.com',
    name: 'Elizabeth Young',
    department: 'Integration',
    assignedView: 'Standard View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Mar 1, 2025'
  },
  {
    id: '40',
    email: 'fking@demandbase.com',
    name: 'Frederick King',
    department: 'Architecture',
    assignedView: 'MCM View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Mar 3, 2025'
  },
  {
    id: '41',
    email: 'gwright@demandbase.com',
    name: 'Gloria Wright',
    department: 'Database',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Mar 5, 2025'
  },
  {
    id: '42',
    email: 'hlopez@demandbase.com',
    name: 'Howard Lopez',
    department: 'Network',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Mar 7, 2025'
  },
  {
    id: '43',
    email: 'ihill@demandbase.com',
    name: 'Irene Hill',
    department: 'Testing',
    assignedView: 'Standard View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Mar 9, 2025'
  },
  {
    id: '44',
    email: 'jscott@demandbase.com',
    name: 'Jordan Scott',
    department: 'Release',
    assignedView: 'MCM View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Mar 11, 2025'
  },
  {
    id: '45',
    email: 'kgreen@demandbase.com',
    name: 'Kimberly Green',
    department: 'Deployment',
    assignedView: 'Standard View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Mar 13, 2025'
  },
  {
    id: '46',
    email: 'ladams@demandbase.com',
    name: 'Lawrence Adams',
    department: 'Monitoring',
    assignedView: 'MCM View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Mar 15, 2025'
  },
  {
    id: '47',
    email: 'mbaker@demandbase.com',
    name: 'Margaret Baker',
    department: 'Logging',
    assignedView: 'Standard View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Mar 17, 2025'
  },
  {
    id: '48',
    email: 'ngonzalez@demandbase.com',
    name: 'Nathan Gonzalez',
    department: 'Metrics',
    assignedView: 'MCM View',
    permissions: '2 permissions',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Mar 19, 2025'
  },
  {
    id: '49',
    email: 'onelson@demandbase.com',
    name: 'Olivia Nelson',
    department: 'Performance',
    assignedView: 'Standard View',
    permissions: '3 permissions',
    communicationSyncStatus: 'Initial',
    dateCreated: 'Mar 21, 2025'
  },
  {
    id: '50',
    email: 'pcarter@demandbase.com',
    name: 'Paul Carter',
    department: 'Optimization',
    assignedView: 'MCM View',
    permissions: 'Demandbase Admin',
    communicationSyncStatus: 'Not Included',
    dateCreated: 'Mar 23, 2025'
  }
];

export const totalUsers = userData.length; 