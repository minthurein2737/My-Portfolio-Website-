import React, { useState, useEffect } from 'react';
import { Language } from '../types/portfolio';

interface ScrollSpyIndicatorProps {
  activeSection: string;
  lang: Language;
}

export const ScrollSpyIndicator: React.FC<ScrollSpyIndicatorProps> = ({
  activeSection,
  lang,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / scrollHeight)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', index: '01', label: lang === 'my' ? 'အကြောင်း' : 'ABOUT' },
    { id: 'skills', index: '02', label: lang === 'my' ? 'ကျွမ်းကျင်မှု' : 'SKILLS' },
    { id: 'projects', index: '03', label: lang === 'my' ? 'လက်ရာများ' : 'PROJECTS' },
    { id: 'contact', index: '04', label: lang === 'my' ? 'ဆက်သွယ်ရန်' : 'CONTACT' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Scroll Spy Navigation"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-end gap-5 pointer-events-auto"
    >
      {/* Background Vertical Guide Track with Animated Lime Progress */}
      <div className="absolute right-2 top-0 bottom-0 w-[1px] bg-[#2A2E2B]/60 -z-10">
        <div
          style={{ transform: `scaleY(${scrollProgress})`, transformOrigin: 'top center' }}
          className="w-full h-full bg-[#C8FF00] transition-transform duration-75 ease-out"
        />
      </div>

      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label={`Scroll to ${sec.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {/* Hover / Active Label */}
            <span
              className={`text-[10px] font-mono-tech tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'text-[#C8FF00] font-semibold translate-x-0 opacity-100'
                  : 'text-[#A6AAA5] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1'
              }`}
            >
              // {sec.index}. {sec.label}
            </span>

            {/* Geometric Pip / Diamond indicator */}
            <div
              className={`w-4 h-4 flex items-center justify-center transition-all duration-300 clip-badge ${
                isActive
                  ? 'bg-[#C8FF00] text-[#0B0D0E] scale-110 shadow-lg shadow-[#C8FF00]/30'
                  : 'bg-[#141719] border border-[#2A2E2B] group-hover:border-[#C8FF00]/80'
              }`}
            >
              <div
                className={`w-1 h-1 rounded-none rotate-45 transition-colors ${
                  isActive ? 'bg-[#0B0D0E]' : 'bg-[#A6AAA5] group-hover:bg-[#C8FF00]'
                }`}
              />
            </div>
          </button>
        );
      })}
    </aside>
  );
};
