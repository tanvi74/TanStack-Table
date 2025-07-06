import { useState, useRef, useEffect } from 'react';
import type { TableHeader as TableHeaderType, RowSelectionState } from './types';

interface TableHeaderProps {
  header: TableHeaderType;
  globalFilter: string;
  onGlobalFilterChange: (value: string) => void;
  enableFiltering?: boolean;
  rowSelection: RowSelectionState;
  totalItems: number;
}

export function TableHeader({
  header,
  globalFilter,
  onGlobalFilterChange,
  enableFiltering = true,
  rowSelection,
  totalItems,
}: TableHeaderProps) {
  const selectedCount = Object.keys(rowSelection).length;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      // Clear search when closing
      onGlobalFilterChange('');
    }
  };

  return (
    <div className="bg-white px-6 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{header.title}</h1>
          <p className="text-sm text-gray-600 mt-1">
            {header.subtitle || `${totalItems} Items`}
          </p>
          {selectedCount > 0 && (
            <p className="text-sm text-blue-600 mt-1">
              {selectedCount} selected
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          {enableFiltering && (
            <div className="relative flex items-center">
              <div 
                className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
                  isSearchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'
                }`}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={globalFilter}
                  onChange={(e) => onGlobalFilterChange(e.target.value)}
                  placeholder={header.searchPlaceholder || 'Search...'}
                  className="w-full px-3 py-1.5 pl-8 bg-white border border-gray-300 rounded-full text-sm focus:outline-none focus:border-gray-400 transition-all duration-300"
                  onBlur={() => {
                    if (!globalFilter) {
                      setIsSearchOpen(false);
                    }
                  }}
                />
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <button
                onClick={handleSearchToggle}
                className={`p-2 text-gray-400 hover:text-gray-600 transition-all duration-300 ${
                  isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          )}
          {header.actions?.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              disabled={action.disabled}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                action.variant === 'primary'
                  ? 'text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50'
                  : action.variant === 'ghost'
                  ? 'text-gray-700 hover:text-gray-900 disabled:opacity-50'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50'
              }`}
            >
              {action.icon && <span className="mr-2">{action.icon}</span>}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 