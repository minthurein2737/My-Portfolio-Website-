import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Copy,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { Language, PortfolioProfile } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';
import { getLocalized } from '../utils/i18n';

interface HeroProps {
  profile: PortfolioProfile;
  lang: Language;
  activePortraitIndex: number;
  onTogglePortrait: () => void;
  onCopyEmail: (email: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  lang,
  activePortraitIndex,
  onTogglePortrait,
  onCopyEmail,
}) => {
  const t = UI_TRANSLATIONS.hero;
  const currentPortrait = profile.portraits[activePortraitIndex] || profile.portraits[0];
  const primaryEmail = profile.emails[0];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 md:py-20 overflow-hidden border-b border-[#2A2E2B]">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8FF00]/5 blur-[140px] pointer-events-none rounded-full" />
      
      {/* Fine Geometric Axis Markings */}
      <div className="absolute top-8 left-8 hidden lg:flex items-center gap-2 text-[10px] font-mono-tech text-[#A6AAA5]/60 tracking-widest uppercase">
        <span className="text-[#C8FF00]">SYS.LOC</span> // TAUNGGYI [{profile.locationCoordinates}]
      </div>
      <div className="absolute top-8 right-8 hidden lg:flex items-center gap-2 text-[10px] font-mono-tech text-[#A6AAA5]/60 tracking-widest uppercase">
        <span className="text-[#C8FF00]">FRAME</span> // POLYGON_HEX_v2.4
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Availability & Location Status Pill */}
            <div className="inline-flex items-center gap-3 self-start px-3.5 py-1.5 bg-[#141719] border border-[#2A2E2B] clip-badge">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C8FF00]" />
              </span>
              <span className={`text-xs text-[#F4F5F2] ${lang === 'en' ? 'font-mono-tech tracking-wider uppercase' : 'font-myanmar tracking-normal'}`}>
                {t.statusAvailable[lang]}
              </span>
            </div>

            {/* Role Header */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#C8FF00]" />
              <p className={`text-sm text-[#C8FF00] font-semibold ${lang === 'en' ? 'font-mono-tech uppercase tracking-widest' : 'font-myanmar'}`}>
                {getLocalized(profile.title, lang)}
              </p>
            </div>

            {/* Oversized High-Contrast Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F5F2] leading-[1.25]">
              <span className="block font-display">
                {lang === 'my'
                  ? 'အကျိုးပြု ဒစ်ဂျစ်တယ် အတွေ့အကြုံများနှင့်'
                  : 'CRAFTING IMPACTFUL'}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F4F5F2] via-[#F4F5F2] to-[#C8FF00] mt-1 font-display">
                {lang === 'my'
                  ? 'ခေတ်မီ ဝဘ်ဆော့ဖ်ဝဲလ်များကို ဖန်တီးပါသည်'
                  : 'DIGITAL EXPERIENCES & WEB SOFTWARE.'}
              </span>
            </h1>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-[#A6AAA5] max-w-2xl font-normal leading-relaxed font-myanmar">
              {getLocalized(profile.tagline, lang)}
            </p>

            {/* Geographic & Specialty Meta Line */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#A6AAA5] pt-1">
              <div className="flex items-center gap-1.5 bg-[#141719] px-3 py-1.5 border border-[#2A2E2B] clip-chamfer">
                <MapPin className="w-3.5 h-3.5 text-[#C8FF00]" />
                <span className="font-myanmar">{getLocalized(profile.location, lang)}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#141719] px-3 py-1.5 border border-[#2A2E2B] clip-chamfer">
                <Terminal className="w-3.5 h-3.5 text-[#C8FF00]" />
                <span className="font-myanmar">{t.experienceBadge[lang]}</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Primary CTA */}
              <a
                href="#projects"
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C8FF00] text-[#0B0D0E] font-bold text-sm hover:bg-[#d8ff33] transition-all transform active:scale-95 clip-chamfer shadow-lg shadow-[#C8FF00]/15 ${lang === 'en' ? 'uppercase tracking-wider' : 'font-myanmar'}`}
              >
                <span>{t.viewWork[lang]}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#141719] border border-[#2A2E2B] hover:border-[#C8FF00] text-[#F4F5F2] hover:text-[#C8FF00] font-semibold text-sm transition-all clip-chamfer"
              >
                <span className="font-myanmar">{t.contactMe[lang]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Quick Copy Email Action */}
              <button
                onClick={() => onCopyEmail(primaryEmail)}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#141719]/60 border border-[#2A2E2B] hover:border-[#C8FF00] text-xs font-mono-tech text-[#A6AAA5] hover:text-[#F4F5F2] transition-colors clip-chamfer"
                title="Click to copy email address"
                aria-label={`Copy email address ${primaryEmail}`}
              >
                <Copy className="w-3.5 h-3.5 text-[#C8FF00]" />
                <span className="hidden sm:inline font-mono-tech">{primaryEmail}</span>
                <span className="sm:hidden font-myanmar">{t.copyEmail[lang]}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Rectangular Box Framed Portrait (လေးထောင့်ကွက်) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] p-3">
              
              {/* Outer Cybernetic Rectangular Frame & Corner Brackets */}
              <div className="absolute inset-0 border border-[#2A2E2B] bg-[#141719]/40 pointer-events-none" />
              
              {/* High-Tech Corner Ticks */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#C8FF00]" />
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#C8FF00]" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#C8FF00]" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#C8FF00]" />

              {/* Central Rectangular Frame Container (လေးထောင့်ကွက်) */}
              <div className="relative w-full h-full bg-[#141719] border-2 border-[#2A2E2B] group-hover:border-[#C8FF00]/60 transition-colors overflow-hidden shadow-2xl shadow-black/80 group">
                
                {/* Fallback pattern in case image is loading */}
                <div className="absolute inset-0 bg-[#141719] flex items-center justify-center text-[#A6AAA5] font-mono-tech text-xs">
                  <div className="text-center p-4">
                    <Sparkles className="w-8 h-8 text-[#C8FF00] mx-auto mb-2 opacity-50 animate-pulse" />
                    <span>MIN THUREIN // PORTRAIT</span>
                  </div>
                </div>

                {/* Actual Portrait Image (Photo 2) */}
                <img
                  src={currentPortrait.url}
                  alt={getLocalized(currentPortrait.alt, lang)}
                  className="relative z-10 w-full h-full object-cover object-center filter contrast-105 saturate-[0.95] group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />

                {/* Subtle dark-gradient overlay at base for contrast */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B0D0E]/60 via-transparent to-transparent pointer-events-none" />

                {/* Cyber HUD subtle grid lines */}
                <div className="absolute inset-0 z-20 bg-grid-pattern opacity-25 pointer-events-none" />
              </div>
            </div>

            {/* Portrait Meta Tag */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#141719] border border-[#2A2E2B] clip-chamfer text-xs text-[#F4F5F2]">
                <div className="w-1.5 h-1.5 bg-[#C8FF00] rounded-full animate-pulse" />
                <span className="font-semibold font-myanmar">{getLocalized(profile.name, lang)}</span>
                <span className="text-[#A6AAA5] font-mono-tech text-[10px]">
                  // {getLocalized(profile.title, lang)}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
