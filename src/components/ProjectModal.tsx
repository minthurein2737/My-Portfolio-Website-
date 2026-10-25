import React from 'react';
import { X, ExternalLink, Code, Layers, Sparkles, UserCheck } from 'lucide-react';
import { Project, Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';
import { getLocalized } from '../utils/i18n';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  if (!project) return null;
  const t = UI_TRANSLATIONS.projects;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in"
    >
      <div
        className="relative w-full max-w-2xl bg-[#141719] border border-[#2A2E2B] clip-chamfer-lg shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#2A2E2B] pb-4 mb-6">
          <div>
            <div className="inline-block px-2.5 py-0.5 bg-[#0B0D0E] border border-[#C8FF00]/40 text-[#C8FF00] text-xs font-mono-tech mb-2 clip-badge">
              {getLocalized(project.categoryLabel, lang)}
            </div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-[#F4F5F2] font-display">
              {getLocalized(project.title, lang)}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label={t.closeModal[lang]}
            className="p-2 text-[#A6AAA5] hover:text-[#C8FF00] hover:bg-[#0B0D0E] border border-transparent hover:border-[#2A2E2B] transition-colors clip-chamfer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6">
          {/* Detailed Description */}
          <div>
            <p className="text-base text-[#F4F5F2] font-myanmar leading-loose">
              {getLocalized(project.fullDesc, lang)}
            </p>
          </div>

          {/* Role */}
          <div className="p-4 bg-[#0B0D0E] border border-[#2A2E2B] clip-chamfer flex items-center gap-3">
            <UserCheck className="w-5 h-5 text-[#C8FF00] shrink-0" />
            <div>
              <span className="text-xs font-mono-tech text-[#A6AAA5] block">{t.roleLabel[lang]}</span>
              <span className="text-sm font-semibold text-[#F4F5F2]">{getLocalized(project.role, lang)}</span>
            </div>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#A6AAA5]">
                {t.featuresLabel[lang]}
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#A6AAA5] font-myanmar">
                    <span className="text-[#C8FF00] font-mono-tech text-xs mt-0.5">▸</span>
                    <span>{getLocalized(feat, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#A6AAA5]">
              {t.techLabel[lang]}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[#0B0D0E] border border-[#2A2E2B] text-xs font-mono-tech text-[#C8FF00] clip-badge"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#2A2E2B] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono-tech text-[#A6AAA5]">
              ID: <span className="text-[#F4F5F2]">{project.id}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#A6AAA5] hover:text-[#F4F5F2] clip-chamfer transition-colors"
              >
                {t.closeModal[lang]}
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="px-4 py-2 bg-[#C8FF00] text-[#0B0D0E] font-bold text-xs uppercase tracking-wider clip-chamfer hover:bg-[#d8ff33] transition-colors"
              >
                Inquire About Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
