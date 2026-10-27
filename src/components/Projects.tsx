import React, { useState } from 'react';
import { ExternalLink, Code2, Eye, Plus, Terminal, Sparkles, Layers } from 'lucide-react';
import { Project, Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';
import { getLocalized, filterProjects } from '../utils/i18n';
import { ProjectModal } from './ProjectModal';
import { GeometricSection } from './GeometricSection';

interface ProjectsProps {
  projects: Project[];
  lang: Language;
  onOpenAddProjectModal: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  lang,
  onOpenAddProjectModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const t = UI_TRANSLATIONS.projects;

  const categories = [
    { id: 'all', label: t.filterAll[lang] },
    { id: 'webapp', label: t.filterWebapp[lang] },
    { id: 'software', label: t.filterSoftware[lang] },
  ];

  const filtered = filterProjects(projects, activeCategory);

  return (
    <GeometricSection id="projects" className="py-20 md:py-28 bg-transparent border-b border-[#2A2E2B]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col space-y-3">
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

          {/* Add / Edit Custom Project Button */}
          <button
            onClick={onOpenAddProjectModal}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 bg-[#141719] border border-[#2A2E2B] hover:border-[#C8FF00] text-xs font-mono-tech text-[#C8FF00] hover:bg-[#181D20] transition-colors clip-chamfer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{t.addCustomProject[lang]}</span>
          </button>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#2A2E2B]" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono-tech transition-all clip-chamfer ${
                activeCategory === cat.id
                  ? 'bg-[#C8FF00] text-[#0B0D0E] font-bold shadow-md shadow-[#C8FF00]/10'
                  : 'bg-[#141719] border border-[#2A2E2B] text-[#A6AAA5] hover:text-[#F4F5F2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((proj, idx) => (
            <article
              key={proj.id}
              className="bg-[#141719] border border-[#2A2E2B] hover:border-[#C8FF00]/60 transition-all clip-chamfer flex flex-col justify-between group overflow-hidden"
            >
              {/* Card Header & Mockup Graphic */}
              <div className="relative p-6 sm:p-8 bg-[#181D20]/50 border-b border-[#2A2E2B]">
                {/* Tech HUD corner */}
                <div className="absolute top-3 right-4 font-mono-tech text-[10px] text-[#A6AAA5]">
                  0{idx + 1} // SYS.PROJECT
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 bg-[#0B0D0E] border border-[#C8FF00]/30 text-[#C8FF00] text-[11px] font-mono-tech clip-badge">
                    {getLocalized(proj.categoryLabel, lang)}
                  </span>
                  {proj.featured && (
                    <span className="px-2 py-0.5 bg-[#0B0D0E] border border-[#2A2E2B] text-[#A6AAA5] text-[10px] font-mono-tech">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F4F5F2] font-display group-hover:text-[#C8FF00] transition-colors mb-3">
                  {getLocalized(proj.title, lang)}
                </h3>

                <p className="text-sm text-[#A6AAA5] font-myanmar leading-relaxed line-clamp-3">
                  {getLocalized(proj.shortDesc, lang)}
                </p>
              </div>

              {/* Card Middle: Role & Tech Badges */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#A6AAA5]">
                  <span className="text-[#C8FF00]">ROLE:</span>
                  <span className="text-[#F4F5F2] font-medium">{getLocalized(proj.role, lang)}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-[#0B0D0E] border border-[#2A2E2B] text-[11px] font-mono-tech text-[#F4F5F2] clip-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#2A2E2B]/60 mt-auto">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-2 text-xs font-mono-tech font-bold text-[#C8FF00] hover:underline pt-4"
                  aria-label={`View full details of ${getLocalized(proj.title, lang)}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.viewDetails[lang]}</span>
                </button>

                <div className="flex items-center gap-2 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0B0D0E] border border-[#2A2E2B] hover:border-[#C8FF00] text-xs font-mono-tech text-[#A6AAA5] hover:text-[#F4F5F2] transition-colors clip-chamfer"
                  >
                    <span>Inquire</span>
                    <ExternalLink className="w-3 h-3 text-[#C8FF00]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Selected Project Modal */}
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </GeometricSection>
  );
};
