import React from 'react';
import { Code2, Smartphone, Cpu, Handshake, CheckCircle2 } from 'lucide-react';
import { Language, PortfolioProfile } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';
import { getLocalized } from '../utils/i18n';

interface AboutProps {
  profile: PortfolioProfile;
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ profile, lang }) => {
  const t = UI_TRANSLATIONS.about;

  const pillars = [
    {
      icon: Code2,
      title: t.principle1Title[lang],
      desc: t.principle1Desc[lang],
      tag: 'ARCHITECTURE',
    },
    {
      icon: Smartphone,
      title: t.principle2Title[lang],
      desc: t.principle2Desc[lang],
      tag: 'RESPONSIVENESS',
    },
    {
      icon: Cpu,
      title: t.principle3Title[lang],
      desc: t.principle3Desc[lang],
      tag: 'INNOVATION',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B0D0E] border-b border-[#2A2E2B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Heading */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#C8FF00] font-semibold">
              {t.sectionTag[lang]}
            </span>
            <div className="h-[1px] w-12 bg-[#2A2E2B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F5F2] font-display max-w-3xl leading-tight">
            {t.heading[lang]}
          </h2>
        </div>

        {/* Biography & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 bg-[#141719] border border-[#2A2E2B] clip-chamfer relative group">
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C8FF00]/40 group-hover:border-[#C8FF00] transition-colors" />
              
              <div className="inline-block px-3 py-1 bg-[#0B0D0E] border border-[#2A2E2B] text-xs font-mono-tech text-[#C8FF00] mb-6 clip-badge">
                {t.badgeRole[lang]}
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#F4F5F2] leading-relaxed">
                <p className="font-myanmar leading-loose text-[#F4F5F2]">
                  {getLocalized(profile.bioP1, lang)}
                </p>
                <p className="font-myanmar leading-loose text-[#A6AAA5]">
                  {getLocalized(profile.bioP2, lang)}
                </p>
              </div>

              {/* Verified Identity & Location Marker */}
              <div className="mt-8 pt-6 border-t border-[#2A2E2B] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-[#A6AAA5]">
                <div className="flex items-center gap-2">
                  <span className="text-[#C8FF00]">LOCATION:</span>
                  <span className="text-[#F4F5F2] font-medium">{getLocalized(profile.location, lang)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C8FF00]">COORDINATES:</span>
                  <span className="text-[#F4F5F2] font-medium">{profile.locationCoordinates}</span>
                </div>
              </div>
            </div>

            {/* Opportunities & Collaboration Card */}
            <div className="p-6 bg-[#141719]/60 border border-[#2A2E2B] clip-chamfer flex items-start gap-4">
              <div className="p-3 bg-[#0B0D0E] border border-[#2A2E2B] shrink-0 clip-chamfer">
                <Handshake className="w-5 h-5 text-[#C8FF00]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#F4F5F2] font-display">
                  {t.openForTitle[lang]}
                </h3>
                <p className="text-sm text-[#A6AAA5] font-myanmar leading-relaxed">
                  {t.openForText[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Pillars & Values Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#A6AAA5] mb-2">
              {t.principlesTitle[lang]}
            </h3>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#141719] border border-[#2A2E2B] hover:border-[#C8FF00]/60 transition-all clip-chamfer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-[#0B0D0E] border border-[#2A2E2B] group-hover:border-[#C8FF00] transition-colors clip-chamfer">
                      <Icon className="w-5 h-5 text-[#C8FF00]" />
                    </div>
                    <span className="text-[10px] font-mono-tech text-[#A6AAA5] px-2 py-0.5 bg-[#0B0D0E] border border-[#2A2E2B]">
                      {pillar.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#F4F5F2] mb-2 font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#A6AAA5] font-myanmar leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
