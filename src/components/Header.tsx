interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  autoRefresh: boolean;
  onAutoRefreshToggle: () => void;
}

export default function Header({ searchQuery, onSearchChange, autoRefresh, onAutoRefreshToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 h-14 flex items-center px-5 gap-4">
      {/* Logo — sits above sidebar width */}
      <div className="w-52 flex-shrink-0">
        <span className="text-2xl tracking-tight select-none">
          <span className="font-black text-blue-600">D</span>
          <span className="font-bold text-blue-600">PP</span>
        </span>
      </div>

      {/* Search */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search by asset code"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-100 rounded-full border border-transparent focus:outline-none focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all placeholder-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Auto Refresh toggle */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-sm text-gray-500 select-none">Auto Refresh</span>
        <button
          role="switch"
          aria-checked={autoRefresh}
          onClick={onAutoRefreshToggle}
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${autoRefresh ? 'bg-blue-500' : 'bg-gray-300'}`}
        >
          <span
            className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${autoRefresh ? 'translate-x-[18px]' : 'translate-x-[3px]'}`}
          />
        </button>
      </div>
    </header>
  );
}
