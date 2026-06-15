import { useState, useMemo } from 'react';
import { mockAASData } from './data/mockAAS';
import { AASEntry, AssetCategory } from './types';
import PasswordCard from './components/PasswordCard';
import PasswordModal from './components/PasswordModal';

const ALL_CATEGORIES: AssetCategory[] = ['Machine', 'Material', 'Product', 'Tool', 'Component'];

export default function App() {
  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState<Set<AssetCategory>>(new Set(['Machine']));
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<AASEntry | null>(null);

  const toggleFilter = (cat: AssetCategory) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  const filtered = useMemo(() => {
    return mockAASData.filter(entry => {
      const q = search.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        entry.code.toLowerCase().includes(q) ||
        entry.name.toLowerCase().includes(q);
      const matchesFilter =
        activeFilters.size === 0 || activeFilters.has(entry.category);
      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilters]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* ── Top Header ── */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4 sticky top-0 z-20 shadow-sm">
        {/* Logo */}
        <div className="flex items-center select-none shrink-0">
          <span className="text-blue-600 font-extrabold text-2xl leading-none">D</span>
          <span className="text-gray-800 font-extrabold text-2xl leading-none">PP</span>
        </div>

        {/* Search bar */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by asset code"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              aria-label="Search assets"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Auto Refresh toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-sm text-gray-500">Auto Refresh</span>
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            role="switch"
            aria-checked={autoRefresh}
            aria-label="Toggle auto refresh"
            className={`relative inline-flex w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
              autoRefresh ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                autoRefresh ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Body: Sidebar + Grid ── */}
      <div className="flex flex-1">
        {/* ── Sidebar ── */}
        <aside className="w-52 bg-white border-r border-gray-200 flex flex-col p-5 shrink-0 sticky top-[57px] self-start h-[calc(100vh-57px)]">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Filter By</h3>

          <div className="space-y-1">
            {ALL_CATEGORIES.map(cat => {
              const isActive = activeFilters.has(cat);
              return (
                <label
                  key={cat}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => toggleFilter(cat)}
                    className="w-4 h-4 rounded accent-blue-600 cursor-pointer"
                    aria-label={`Filter by ${cat}`}
                  />
                  <span className="text-sm font-medium">{cat}</span>
                </label>
              );
            })}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Total AAS :{' '}
              <span className="text-blue-600 font-bold">{filtered.length}</span>
            </p>
          </div>
        </aside>

        {/* ── Main Grid ── */}
        <main className="flex-1 p-6">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 gap-3 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-400 text-base font-medium">No AAS entries found</p>
              <p className="text-gray-300 text-sm">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {filtered.map(entry => (
                <PasswordCard
                  key={entry.id}
                  entry={entry}
                  onClick={() => setSelectedEntry(entry)}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ── Password Modal ── */}
      {selectedEntry && (
        <PasswordModal
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </div>
  );
}
