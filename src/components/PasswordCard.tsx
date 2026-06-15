import { AASEntry } from '../types';
import MachineImage from './MachineImage';

interface Props {
  entry: AASEntry;
  onClick: () => void;
}

const CATEGORY_BADGE: Record<string, string> = {
  Machine:   'bg-blue-100 text-blue-700',
  Material:  'bg-emerald-100 text-emerald-700',
  Product:   'bg-orange-100 text-orange-700',
  Tool:      'bg-purple-100 text-purple-700',
  Component: 'bg-yellow-100 text-yellow-700',
};

export default function PasswordCard({ entry, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`View credentials for ${entry.name}`}
    >
      {/* Image area */}
      <div className="relative bg-gray-100 overflow-hidden" style={{ height: '160px' }}>
        <MachineImage category={entry.category} code={entry.code} />

        {/* Lock overlay — subtle, top-right */}
        <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded-full p-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Category badge */}
        <div className="absolute bottom-2 left-2">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_BADGE[entry.category]} bg-white/80 backdrop-blur-sm`}>
            {entry.category}
          </span>
        </div>
      </div>

      {/* Name area */}
      <div className="px-3 py-3 border-t border-gray-100">
        <p className="text-sm text-gray-700 text-center font-medium tracking-wide truncate">
          {entry.name}
        </p>
        <p className="text-xs text-gray-400 text-center mt-0.5 truncate">{entry.code}</p>
      </div>
    </button>
  );
}
