'use client';

interface IdaraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  theme?: 'light' | 'dark';
}

export default function IdaraLogo({
  className = '',
  size = 'md',
  showText = true,
  theme = 'light',
}: IdaraLogoProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    hero: 'w-16 h-16',
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Speed Ring Emblem (Black & Orange) */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="idaraLogoOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
            <linearGradient id="idaraLogoBlack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B0F19" />
            </linearGradient>
          </defs>

          {/* Black Outer Arc */}
          <path
            d="M 32 6 A 26 26 0 0 0 6 32 A 26 26 0 0 0 16 51"
            stroke={isDark ? '#FFFFFF' : 'url(#idaraLogoBlack)'}
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Orange Outer Arc with Glow */}
          <path
            d="M 32 58 A 26 26 0 0 0 58 32 A 26 26 0 0 0 48 13"
            stroke="url(#idaraLogoOrange)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Decorative Speed Flares */}
          <path d="M 46 9 L 53 4" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M 18 55 L 11 60"
            stroke={isDark ? '#FFFFFF' : '#0B0F19'}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Stylized Italic Monogram 'I' */}
          <path
            d="M 23 20 L 41 20 L 38 26 L 33 26 L 29 38 L 38 38 L 35 44 L 26 44 L 24 50 L 17 50 L 23 20 Z"
            fill={isDark ? '#FFFFFF' : 'url(#idaraLogoBlack)'}
          />

          {/* Center Orange Light Accent */}
          <path d="M 36 29 L 46 29 L 43 35 L 33 35 Z" fill="url(#idaraLogoOrange)" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black italic tracking-wider ${
                isDark ? 'text-white' : 'text-[#0B0F19]'
              } ${
                size === 'sm'
                  ? 'text-lg'
                  : size === 'lg'
                  ? 'text-2xl'
                  : size === 'hero'
                  ? 'text-3xl'
                  : 'text-xl'
              }`}
            >
              IDARA
            </span>
            <span className="text-[10px] font-black tracking-widest text-orange-600 bg-orange-50 border border-orange-200 px-1.5 py-0.5 rounded uppercase">
              OSRAM
            </span>
          </div>
          <span
            className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mt-0.5 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Distribuidora · Warnes
          </span>
        </div>
      )}
    </div>
  );
}
