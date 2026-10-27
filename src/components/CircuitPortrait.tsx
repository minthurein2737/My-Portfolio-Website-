import React from 'react';
import { Activity } from 'lucide-react';
import { Language, LocalizedString } from '../types/portfolio';
import { getLocalized } from '../utils/i18n';

interface CircuitPortraitProps {
  portraitUrl: string;
  portraitAlt: LocalizedString;
  name: LocalizedString;
  title: LocalizedString;
  lang: Language;
}

export const CircuitPortrait: React.FC<CircuitPortraitProps> = ({
  portraitUrl,
  portraitAlt,
  name,
  title,
  lang,
}) => {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] mx-auto select-none">
      {/* Radiant Glow Behind Portrait */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[#C8FF00]/15 via-[#ff2244]/10 to-[#C8FF00]/15 rounded-3xl blur-2xl opacity-70 pointer-events-none animate-pulse" />

      {/* High-Tech Cybernetic Corner Bracket Markers */}
      <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#C8FF00] z-30" />
      <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#C8FF00] z-30" />
      <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#C8FF00] z-30" />
      <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#C8FF00] z-30" />

      {/* Main Clean Portrait Card Container (Circuit Background completely removed) */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#2A2E2B] group-hover:border-[#C8FF00]/70 bg-[#141719] shadow-2xl shadow-black/90 group transition-all duration-300">
        
        {/* Top Chip Header HUD */}
        <div className="relative z-30 flex items-center justify-between px-3.5 py-2 bg-[#0B0D0E]/95 backdrop-blur-md border-b border-[#2A2E2B] text-xs font-mono-tech text-[#F4F5F2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
            <span className="font-bold text-[#C8FF00] tracking-wider">PROCESSOR.01</span>
          </div>
          <span className="text-[#A6AAA5] text-[10px] tracking-tight">ONLINE // 4.8 GHz</span>
        </div>

        {/* Min Thurein's Clean Full-Size Portrait Photo */}
        <div className="relative flex-1 w-full h-[calc(100%-80px)] overflow-hidden bg-[#141719]">
          <img
            src={portraitUrl}
            alt={getLocalized(portraitAlt, lang)}
            className="w-full h-full object-cover object-top filter contrast-105 saturate-[1.02] group-hover:scale-105 transition-transform duration-700"
            loading="eager"
          />

          {/* Subtle architectural scanline overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Bottom Hardware Tag Overlay */}
        <div className="relative z-30 px-3.5 py-2 bg-[#0B0D0E]/95 backdrop-blur-md border-t border-[#2A2E2B] flex items-center justify-between text-xs font-mono-tech">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2244] animate-ping" />
            <span className="font-bold text-[#F4F5F2] font-myanmar truncate max-w-[150px]">
              {getLocalized(name, lang)}
            </span>
          </div>
          <span className="text-[#C8FF00] font-bold text-[10px] tracking-wider uppercase">
            {lang === 'my' ? 'စနစ်အင်ဂျင်နီယာ' : 'CORE ARCHITECT'}
          </span>
        </div>
      </div>

      {/* Description caption under portrait */}
      <div className="mt-4 flex items-center justify-between px-2 text-xs font-mono-tech text-[#A6AAA5]">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#C8FF00] animate-pulse" />
          <span className="font-myanmar text-[#F4F5F2]">
            {getLocalized(name, lang)} // {getLocalized(title, lang)}
          </span>
        </div>
        <span className="text-[#ff3b47] text-[10px] font-bold">
          ⚡ ACTIVE LED MATRIX
        </span>
      </div>
    </div>
  );
};
