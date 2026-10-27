import React, { useState, useEffect } from 'react';
import { Menu, X, Sliders, Globe, ArrowUpRight } from 'lucide-react';
import { Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  lang: Language;
  activeSection?: string;
  onLanguageChange: (newLang: Language) => void;
  onOpenCustomizer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  activeSection = '',
  onLanguageChange,
  onOpenCustomizer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = UI_TRANSLATIONS.nav;

  // Native high-performance scroll reading progress
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

  const navLinks = [
    { id: 'about', href: '#about', label: t.about[lang] },
    { id: 'skills', href: '#skills', label: t.skills[lang] },
    { id: 'projects', href: '#projects', label: t.projects[lang] },
    { id: 'contact', href: '#contact', label: t.contact[lang] },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0B0D0E]/85 border-b border-[#2A2E2B] transition-colors">
      {/* Laser-thin Geometric Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
        <div
          style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: 'left center' }}
          className="w-full h-full bg-gradient-to-r from-[#C8FF00] via-[#C8FF00] to-[#e6ff80] shadow-sm shadow-[#C8FF00]/50 transition-transform duration-75 ease-out"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF00]"
          aria-label="Min Thurein Portfolio Home"
        >
          <div className="relative w-8 h-8 flex items-center justify-center bg-[#141719] border border-[#2A2E2B] group-hover:border-[#C8FF00] transition-colors clip-chamfer">
            <span className="font-mono-tech text-xs font-bold text-[#C8FF00]">MT</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C8FF00] rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg tracking-wider text-[#F4F5F2] group-hover:text-[#C8FF00] transition-colors">
                MIN THUREIN
              </span>
              <span className="text-[#C8FF00] font-mono-tech text-xs">//</span>
            </div>
            <span className="text-xs text-[#A6AAA5] font-myanmar -mt-0.5 tracking-normal">
              မင်းသူရိန် (Developer)
            </span>
          </div>
        </a>

        {/* Desktop Navigation with Active Scroll-Spy Highlighting */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium py-1 transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#C8FF00] font-semibold'
                    : 'text-[#A6AAA5] hover:text-[#F4F5F2]'
                } ${lang === 'my' ? 'font-myanmar' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-none rotate-45 bg-[#C8FF00] animate-pulse" />
                )}
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C8FF00] transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Language Switcher, Customizer & Let's Talk CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div
            className="flex items-center bg-[#141719] border border-[#2A2E2B] p-1 clip-chamfer"
            role="group"
            aria-label="Language selection"
          >
            <Globe className="w-3.5 h-3.5 text-[#A6AAA5] ml-2 mr-1" />
            <button
              onClick={() => onLanguageChange('my')}
              className={`px-2.5 py-1 text-xs font-medium font-myanmar transition-all ${
                lang === 'my'
                  ? 'bg-[#C8FF00] text-[#0B0D0E] font-semibold'
                  : 'text-[#A6AAA5] hover:text-[#F4F5F2]'
              }`}
              aria-pressed={lang === 'my'}
            >
              မြန်မာ
            </button>
            <span className="text-[#2A2E2B] text-xs">|</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-medium font-mono-tech transition-all ${
                lang === 'en'
                  ? 'bg-[#C8FF00] text-[#0B0D0E] font-semibold'
                  : 'text-[#A6AAA5] hover:text-[#F4F5F2]'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          {/* Quick Customizer Toggle */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141719] border border-[#2A2E2B] hover:border-[#C8FF00] text-xs text-[#A6AAA5] hover:text-[#F4F5F2] transition-colors clip-chamfer"
            title="Edit Details / Replace Photo / ပြင်ဆင်ရန်"
            aria-label="Open portfolio profile settings"
          >
            <Sliders className="w-3.5 h-3.5 text-[#C8FF00]" />
            <span className={`hidden lg:inline ${lang === 'my' ? 'font-myanmar' : 'font-mono-tech'}`}>
              {t.customize[lang]}
            </span>
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-4 py-2 bg-[#C8FF00] text-[#0B0D0E] text-xs font-bold hover:bg-[#d8ff33] transition-transform active:scale-95 clip-chamfer shadow-lg shadow-[#C8FF00]/15 ${lang === 'en' ? 'uppercase tracking-wider font-mono-tech' : 'font-myanmar'}`}
          >
            <span>{t.letsTalk[lang]}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu & Language Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={() => onLanguageChange(lang === 'my' ? 'en' : 'my')}
            className="px-2.5 py-1.5 bg-[#141719] border border-[#2A2E2B] text-[#C8FF00] text-xs font-bold clip-chamfer font-myanmar"
            aria-label="Toggle language between Myanmar and English"
          >
            {lang === 'my' ? 'EN' : 'မြန်မာ'}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#141719] border border-[#2A2E2B] text-[#F4F5F2] hover:text-[#C8FF00] focus:outline-none clip-chamfer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141719] border-b border-[#2A2E2B] px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-[#2A2E2B]/50 transition-colors flex items-center justify-between font-myanmar ${
                    isActive ? 'text-[#C8FF00]' : 'text-[#F4F5F2] hover:text-[#C8FF00]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-none rotate-45 bg-[#C8FF00]" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] clip-chamfer font-myanmar"
            >
              <Sliders className="w-4 h-4 text-[#C8FF00]" />
              <span>{t.customize[lang]} (Edit Portfolio Details)</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#C8FF00] text-[#0B0D0E] font-bold text-sm uppercase tracking-wider clip-chamfer font-myanmar"
            >
              <span>{t.letsTalk[lang]}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
