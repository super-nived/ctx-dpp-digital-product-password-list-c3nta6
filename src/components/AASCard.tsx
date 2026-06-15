import { useState } from 'react';
import { AASEntry } from '../types';

/* ── Industrial machine SVG thumbnail (no gradient IDs = no collision) ─── */
function MachineThumbnail() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* sky/bg */}
      <rect width="400" height="220" fill="#607d8b" />
      <rect y="185" width="400" height="35" fill="#546e7a" />
      {/* machine body */}
      <rect x="28" y="38" width="344" height="152" rx="7" fill="#37474f" />
      {/* top rail */}
      <rect x="28" y="20" width="344" height="18" rx="4" fill="#455a64" />
      <rect x="48" y="25" width="200" height="8" rx="2" fill="#37474f" />
      {/* left panel */}
      <rect x="48" y="56" width="158" height="116" rx="5" fill="#2c3e50" />
      {/* screen */}
      <rect x="60" y="68" width="104" height="68" rx="3" fill="#1565c0" />
      <rect x="66" y="74" width="48" height="28" rx="1" fill="#1976d2" opacity="0.5" />
      {/* scan lines */}
      <line x1="60" y1="90" x2="164" y2="90" stroke="#1e88e5" strokeWidth="0.6" opacity="0.4" />
      <line x1="60" y1="104" x2="164" y2="104" stroke="#1e88e5" strokeWidth="0.6" opacity="0.4" />
      <line x1="60" y1="118" x2="164" y2="118" stroke="#1e88e5" strokeWidth="0.6" opacity="0.4" />
      {/* LED column */}
      <circle cx="186" cy="78"  r="7" fill="#b71c1c" />
      <circle cx="186" cy="78"  r="4" fill="#e53935" />
      <circle cx="186" cy="100" r="7" fill="#e65100" />
      <circle cx="186" cy="100" r="4" fill="#fb8c00" />
      <circle cx="186" cy="122" r="7" fill="#1b5e20" />
      <circle cx="186" cy="122" r="4" fill="#43a047" />
      {/* right panel */}
      <rect x="224" y="56" width="134" height="116" rx="5" fill="#2c3e50" />
      <rect x="237" y="70" width="108" height="64" rx="3" fill="#1a2530" />
      {/* dial 1 */}
      <circle cx="270" cy="100" r="20" fill="#37474f" stroke="#546e7a" strokeWidth="2.5" />
      <circle cx="270" cy="100" r="13" fill="#263238" />
      <line x1="270" y1="100" x2="276" y2="86" stroke="#78909c" strokeWidth="2.5" strokeLinecap="round" />
      {/* dial 2 */}
      <circle cx="318" cy="100" r="20" fill="#37474f" stroke="#546e7a" strokeWidth="2.5" />
      <circle cx="318" cy="100" r="13" fill="#263238" />
      <line x1="318" y1="100" x2="326" y2="88" stroke="#78909c" strokeWidth="2.5" strokeLinecap="round" />
      {/* cables */}
      <rect x="96"  y="158" width="8" height="32" rx="2" fill="#455a64" />
      <rect x="284" y="158" width="8" height="32" rx="2" fill="#455a64" />
      {/* corner bolts */}
      <circle cx="40"  cy="48"  r="5" fill="#546e7a" />
      <circle cx="360" cy="48"  r="5" fill="#546e7a" />
      <circle cx="40"  cy="183" r="5" fill="#546e7a" />
      <circle cx="360" cy="183" r="5" fill="#546e7a" />
    </svg>
  );
}

/* ── Icons ───────────────────────────────────────────────────────────────── */
function EyeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}
function EyeOffIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  );
}
function CopyIcon({ done }: { done: boolean }) {
  return done ? (
    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

/* ── Main card component ─────────────────────────────────────────────────── */
interface Props { entry: AASEntry; }

export default function AASCard({ entry }: Props) {
  const [expanded, setExpanded]   = useState(false);
  const [showPass, setShowPass]   = useState(false);
  const [copied, setCopied]       = useState<string | null>(null);

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch { /* ignore */ }
  };

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">

      {/* ── Thumbnail ── */}
      <div className="h-40 overflow-hidden">
        <MachineThumbnail />
      </div>

      {/* ── Code row / expand toggle ── */}
      <button
        onClick={() => { setExpanded(e => !e); setShowPass(false); }}
        className="w-full flex items-center justify-between px-4 py-3 border-t border-gray-100 hover:bg-gray-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-200"
        aria-expanded={expanded}
      >
        <span className="text-sm text-gray-700 truncate">{entry.code}</span>
        <svg
          className={`w-4 h-4 text-gray-400 flex-shrink-0 ml-2 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ── Expanded credentials panel ── */}
      {expanded && (
        <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 space-y-3">

          {/* Username */}
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-0.5">Username</p>
              <p className="text-sm text-gray-700 font-mono truncate">{entry.username}</p>
            </div>
            <button
              onClick={() => copy(entry.username, 'user')}
              className="p-1.5 rounded-md text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors flex-shrink-0"
              title="Copy username"
              aria-label="Copy username"
            >
              <CopyIcon done={copied === 'user'} />
            </button>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-0.5">Password</p>
              <p className="text-sm text-gray-700 font-mono truncate">
                {showPass ? entry.password : '••••••••••••'}
              </p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={() => setShowPass(s => !s)}
                className="p-1.5 rounded-md text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
                title={showPass ? 'Hide password' : 'Show password'}
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? <EyeOffIcon /> : <EyeIcon />}
              </button>
              <button
                onClick={() => copy(entry.password, 'pass')}
                className="p-1.5 rounded-md text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
                title="Copy password"
                aria-label="Copy password"
              >
                <CopyIcon done={copied === 'pass'} />
              </button>
            </div>
          </div>

          {/* URL */}
          {entry.url && (
            <div>
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-0.5">URL</p>
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline truncate block"
                title={entry.url}
              >
                {entry.url}
              </a>
            </div>
          )}

          {/* Category badge */}
          <div className="pt-1">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-700">
              {entry.category}
            </span>
          </div>
        </div>
      )}
    </article>
  );
}
