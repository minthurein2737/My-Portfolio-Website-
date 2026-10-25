import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { Language, PortfolioProfile } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';
import { getLocalized } from '../utils/i18n';

interface FooterProps {
  profile: PortfolioProfile;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ profile, lang }) => {
  const t = UI_TRANSLATIONS.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0D0E] border-t border-[#2A2E2B] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2A2E2B]">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#141719] border border-[#C8FF00] flex items-center justify-center clip-chamfer">
              <span className="font-mono-tech text-[10px] font-bold text-[#C8FF00]">M</span>
            </div>
            <div>
              <span className="font-display font-bold text-base text-[#F4F5F2] tracking-wider">
                MIN THUREIN
              </span>
              <span className="text-xs text-[#A6AAA5] font-mono-tech ml-2">
                // {getLocalized(profile.title, lang)}
              </span>
            </div>
          </div>

          {/* Social Links Fast List */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono-tech text-[#A6AAA5]">
            {profile.socials
              .filter((s) => s.platform !== 'email')
              .map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8FF00] transition-colors"
                >
                  {s.name}
                </a>
              ))}
            <a
              href={`mailto:${profile.emails[0]}`}
              className="hover:text-[#C8FF00] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#141719] border border-[#2A2E2B] hover:border-[#C8FF00] text-xs font-mono-tech text-[#A6AAA5] hover:text-[#F4F5F2] transition-colors clip-chamfer"
            aria-label={t.backToTop[lang]}
          >
            <span>{t.backToTop[lang]}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C8FF00]" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#A6AAA5]">
          <p className="font-myanmar text-center sm:text-left">
            {t.copyright[lang]}
          </p>
          <div className="flex items-center gap-1.5 font-myanmar">
            <span>{t.builtWith[lang]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
