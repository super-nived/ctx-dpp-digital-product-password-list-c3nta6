import { AASCategory } from '../types';

const CATEGORIES: AASCategory[] = ['Machine', 'Material', 'Product', 'Tool', 'Component'];

interface SidebarProps {
  selected: AASCategory[];
  onToggle: (cat: AASCategory) => void;
  totalCount: number;
}

export default function Sidebar({ selected, onToggle, totalCount }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-14 bottom-0 w-52 bg-white border-r border-gray-200 flex flex-col px-4 py-5 z-10 overflow-y-auto">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Filter By</h3>

      <ul className="space-y-1">
        {CATEGORIES.map(cat => {
          const active = selected.includes(cat);
          return (
            <li key={cat}>
              <label
                className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
              >
                {/* Custom checkbox */}
                <span
                  onClick={() => onToggle(cat)}
                  className={`w-4 h-4 rounded flex items-center justify-center border-2 flex-shrink-0 transition-colors ${active ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'}`}
                >
                  {active && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span
                  onClick={() => onToggle(cat)}
                  className={`text-sm select-none ${active ? 'text-blue-700 font-medium' : 'text-gray-600'}`}
                >
                  {cat}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-600">
          Total AAS :{' '}
          <span className="text-blue-600 font-bold">{totalCount}</span>
        </p>
      </div>
    </aside>
  );
}
