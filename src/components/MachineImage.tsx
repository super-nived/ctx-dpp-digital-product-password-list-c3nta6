import { AssetCategory } from '../types';

const CATEGORY_COLORS: Record<AssetCategory, { bg1: string; bg2: string; panel: string }> = {
  Machine:   { bg1: '#a8bec9', bg2: '#6b8fa5', panel: '#1e40af' },
  Material:  { bg1: '#a8c9b8', bg2: '#5a8f75', panel: '#065f46' },
  Product:   { bg1: '#c9b8a8', bg2: '#8f7560', panel: '#7c2d12' },
  Tool:      { bg1: '#b8a8c9', bg2: '#7560a5', panel: '#4c1d95' },
  Component: { bg1: '#c9c4a8', bg2: '#8f8460', panel: '#713f12' },
};

interface Props {
  category: AssetCategory;
  code: string;
}

export default function MachineImage({ category, code }: Props) {
  const c = CATEGORY_COLORS[category];
  const seed = code.charCodeAt(0) + code.charCodeAt(code.length - 1);
  const offsetX = ((seed % 5) - 2) * 4;

  return (
    <svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`bg-${code}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.bg1} />
          <stop offset="100%" stopColor={c.bg2} />
        </linearGradient>
        <linearGradient id={`mach-${code}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8cdd8" />
          <stop offset="100%" stopColor="#7a9aae" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="280" height="170" fill={`url(#bg-${code})`} />

      {/* Floor line */}
      <rect x="0" y="148" width="280" height="22" fill="rgba(0,0,0,0.15)" />

      {/* Machine body */}
      <rect x={20 + offsetX} y="35" width="240" height="110" rx="5" fill={`url(#mach-${code})`} />

      {/* Top rail */}
      <rect x={18 + offsetX} y="28" width="244" height="14" rx="3" fill="#8fafc0" />

      {/* Blue control panel / screen */}
      <rect x={105 + offsetX} y="45" width="90" height="62" rx="4" fill={c.panel} />
      <rect x={110 + offsetX} y="50" width="80" height="52" rx="3" fill={c.panel} opacity="0.85" />
      {/* Screen content */}
      <rect x={116 + offsetX} y="60" width="48" height="3" rx="1" fill="#93c5fd" opacity="0.8" />
      <rect x={116 + offsetX} y="68" width="33" height="3" rx="1" fill="#93c5fd" opacity="0.55" />
      <rect x={116 + offsetX} y="76" width="42" height="3" rx="1" fill="#93c5fd" opacity="0.55" />
      <rect x={116 + offsetX} y="84" width="28" height="3" rx="1" fill="#93c5fd" opacity="0.4" />

      {/* Orange indicator light */}
      <circle cx={62 + offsetX} cy="54" r="10" fill="rgba(0,0,0,0.2)" />
      <circle cx={62 + offsetX} cy="54" r="8" fill="#f97316" />
      <circle cx={59 + offsetX} cy="51" r="2.5" fill="#fed7aa" opacity="0.65" />

      {/* Left panel box */}
      <rect x={28 + offsetX} y="88" width="62" height="48" rx="3" fill="#547a90" />
      <rect x={33 + offsetX} y="93" width="52" height="38" rx="2" fill="#3d6070" />
      <rect x={36 + offsetX} y="99" width="38" height="2" rx="1" fill="#2a4a5a" />
      <rect x={36 + offsetX} y="105" width="38" height="2" rx="1" fill="#2a4a5a" />
      <rect x={36 + offsetX} y="111" width="38" height="2" rx="1" fill="#2a4a5a" />
      <rect x={36 + offsetX} y="117" width="28" height="2" rx="1" fill="#2a4a5a" />

      {/* Right panel box */}
      <rect x={210 + offsetX} y="88" width="62" height="48" rx="3" fill="#547a90" />
      <rect x={215 + offsetX} y="93" width="52" height="38" rx="2" fill="#3d6070" />
      <rect x={218 + offsetX} y="99" width="38" height="2" rx="1" fill="#2a4a5a" />
      <rect x={218 + offsetX} y="105" width="38" height="2" rx="1" fill="#2a4a5a" />
      <rect x={218 + offsetX} y="111" width="38" height="2" rx="1" fill="#2a4a5a" />

      {/* Bottom base / feet */}
      <rect x={50 + offsetX} y="143" width="50" height="8" rx="2" fill="#4a6a7a" />
      <rect x={180 + offsetX} y="143" width="50" height="8" rx="2" fill="#4a6a7a" />

      {/* Small green status LED */}
      <circle cx={82 + offsetX} cy="54" r="4" fill="#22c55e" />
      <circle cx={81 + offsetX} cy="53" r="1.5" fill="#bbf7d0" opacity="0.7" />
    </svg>
  );
}
