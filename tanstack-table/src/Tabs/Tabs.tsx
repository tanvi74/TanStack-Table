import React, { useState } from 'react';
import BasicTable from '../DBTable/BasicTable';
import StandardLayoutTable from '../DBTable/StandardLayoutTable';
import { GenericDataTableExample } from '../examples/GenericDataTableExample';
import { ColumnEditorExample } from '../examples/ColumnEditorExample';
import { InfiniteDataTableExample } from '../examples/InfiniteDataTableExample';
import TakeActionTable from '../DBTable/TakeActionTable';

type TabItem = {
  id: string;
  label: string;
  component: React.ComponentType;
};

const tabItems: TabItem[] = [
  {
    id: 'basic-table',
    label: 'Basic Table',
    component: BasicTable,
  },
  {
    id: 'standard-grid-layout',
    label: 'Standard Grid Layout',
    component: StandardLayoutTable,
  },
  {
    id: 'generic-data-table',
    label: 'Generic Data Table',
    component: GenericDataTableExample,
  },
  {
    id: 'column-editing-table',
    label: 'Column Editing Table',
    component: ColumnEditorExample,
  },
  {
    id: 'infinite-data-table',
    label: 'Infinite Data Table',
    component: InfiniteDataTableExample,
  },
  {
    id: 'selection',
    label: 'Row Selection',
    component: TakeActionTable, // We'll create more examples later
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('standard-grid-layout');
  
  const ActiveComponent = tabItems.find(tab => tab.id === activeTab)?.component || BasicTable;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Vertical Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">TanStack Table</h1>
          <p className="text-sm text-gray-600 mt-1">Examples & Demos</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {tabItems.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="font-medium">{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 w-64 p-4 border-t border-gray-200 bg-white">
          <div className="text-xs text-gray-500">
            Built with TanStack Table v8
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default Tabs;