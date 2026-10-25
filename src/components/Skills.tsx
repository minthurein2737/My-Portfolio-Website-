import React from 'react';
import { Layers, Terminal, Wrench, ShieldCheck, Check } from 'lucide-react';
import { Language, SkillCategory } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';
import { getLocalized } from '../utils/i18n';

interface SkillsProps {
  categories: SkillCategory[];
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ categories, lang }) => {
  const t = UI_TRANSLATIONS.skills;

  const categoryIcons = [Layers, Terminal, Wrench, ShieldCheck];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0B0D0E] border-b border-[#2A2E2B] relative">
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
          <p className="text-base text-[#A6AAA5] font-myanmar max-w-2xl">
            {t.subheading[lang]}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={cat.id}
                className="p-8 bg-[#141719] border border-[#2A2E2B] hover:border-[#C8FF00]/50 transition-all clip-chamfer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#0B0D0E] border border-[#2A2E2B] group-hover:border-[#C8FF00] transition-colors clip-chamfer">
                      <Icon className="w-5 h-5 text-[#C8FF00]" />
                    </div>
                    <span className="text-[10px] font-mono-tech text-[#A6AAA5] px-2.5 py-1 bg-[#0B0D0E] border border-[#2A2E2B]">
                      CAT.0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F4F5F2] font-display mb-2">
                    {getLocalized(cat.title, lang)}
                  </h3>
                  <p className="text-sm text-[#A6AAA5] font-myanmar mb-6 leading-relaxed">
                    {getLocalized(cat.description, lang)}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2A2E2B]">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech clip-badge transition-colors ${
                        skill.highlight
                          ? 'bg-[#0B0D0E] text-[#F4F5F2] border border-[#C8FF00]/50 hover:border-[#C8FF00]'
                          : 'bg-[#0B0D0E]/60 text-[#A6AAA5] border border-[#2A2E2B] hover:text-[#F4F5F2]'
                      }`}
                    >
                      {skill.highlight && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
