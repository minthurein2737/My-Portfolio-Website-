import React, { useState } from 'react';
import {
  X,
  Sliders,
  Image,
  Copy,
  Plus,
  CheckCircle2,
  BookOpen,
  Code2,
  Sparkles,
} from 'lucide-react';
import { PortfolioProfile, Project, Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  onUpdateProfile: (updated: PortfolioProfile) => void;
  onAddProject: (newProj: Project) => void;
  lang: Language;
  onToast: (msg: string) => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onAddProject,
  lang,
  onToast,
}) => {
  if (!isOpen) return null;
  const t = UI_TRANSLATIONS.customizer;

  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'guide'>('profile');
  const [customPhotoUrl, setCustomPhotoUrl] = useState('');

  // Editable fields
  const [nameEn, setNameEn] = useState(profile.name.en);
  const [nameMy, setNameMy] = useState(profile.name.my);
  const [titleEn, setTitleEn] = useState(profile.title.en);
  const [titleMy, setTitleMy] = useState(profile.title.my);
  const [email1, setEmail1] = useState(profile.emails[0] || '');
  const [email2, setEmail2] = useState(profile.emails[1] || '');

  // Add project form
  const [projTitle, setProjTitle] = useState('');
  const [projCategory, setProjCategory] = useState<'webapp' | 'software' | 'client'>('webapp');
  const [projDesc, setProjDesc] = useState('');
  const [projTech, setProjTech] = useState('React, TypeScript, Tailwind CSS');

  const handleApplyCustomPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPhotoUrl.trim()) return;

    const newPortraits = [
      {
        id: `custom-${Date.now()}`,
        name: { my: 'စိတ်ကြိုက် ဓာတ်ပုံ', en: 'Custom Uploaded Photo' },
        url: customPhotoUrl.trim(),
        alt: { my: 'မင်းသူရိန်၏ ကိုယ်ပိုင်ဓာတ်ပုံ', en: 'Portrait photo of Min Thurein' },
      },
      ...profile.portraits,
    ];

    onUpdateProfile({
      ...profile,
      portraits: newPortraits,
    });
    setCustomPhotoUrl('');
    onToast('New portrait photo applied successfully!');
  };

  const handleSaveProfileDetails = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      ...profile,
      name: { my: nameMy, en: nameEn },
      title: { my: titleMy, en: titleEn },
      emails: [email1, email2].filter(Boolean),
    });
    onToast('Profile details updated live!');
  };

  const handleAddNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projTitle.trim()) return;

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: { my: projTitle, en: projTitle },
      category: projCategory,
      categoryLabel: {
        my: projCategory === 'webapp' ? 'ဝဘ်ဆော့ဖ်ဝဲလ်' : 'ဆော့ဖ်ဝဲလ် ကိရိယာ',
        en: projCategory === 'webapp' ? 'Web App' : 'Software Tool',
      },
      shortDesc: {
        my: projDesc || 'အသစ်ထည့်သွင်းထားသော စိတ်ကြိုက် ပရောဂျက် ဖြစ်ပါသည်။',
        en: projDesc || 'A newly created custom showcase project entry.',
      },
      fullDesc: {
        my: projDesc || 'အသစ်ထည့်သွင်းထားသော စိတ်ကြိုက် ပရောဂျက် ဖြစ်ပါသည်။',
        en: projDesc || 'A newly created custom showcase project entry.',
      },
      role: {
        my: 'Lead Developer',
        en: 'Lead Developer',
      },
      techStack: projTech.split(',').map((s) => s.trim()).filter(Boolean),
      features: [
        {
          my: 'အသုံးပြုသူစိတ်ကြိုက် စွမ်းဆောင်ချက်များ',
          en: 'Custom tailored features and client integrations',
        },
      ],
      featured: true,
    };

    onAddProject(newProject);
    setProjTitle('');
    setProjDesc('');
    onToast('Custom project added to your portfolio!');
  };

  const handleExportJson = () => {
    const jsonString = JSON.stringify(profile, null, 2);
    navigator.clipboard.writeText(jsonString);
    onToast(t.configCopied[lang]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in"
    >
      <div
        className="relative w-full max-w-3xl bg-[#141719] border border-[#2A2E2B] clip-chamfer-lg shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#2A2E2B] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#0B0D0E] border border-[#C8FF00] clip-chamfer">
              <Sliders className="w-5 h-5 text-[#C8FF00]" />
            </div>
            <div>
              <h3 id="customizer-modal-title" className="text-xl sm:text-2xl font-bold text-[#F4F5F2] font-display">
                {t.title[lang]}
              </h3>
              <p className="text-xs text-[#A6AAA5] font-myanmar">
                {t.subtitle[lang]}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close customizer"
            className="p-2 text-[#A6AAA5] hover:text-[#C8FF00] hover:bg-[#0B0D0E] transition-colors clip-chamfer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#2A2E2B] mb-6 gap-2" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 text-xs font-mono-tech transition-colors ${
              activeTab === 'profile'
                ? 'border-b-2 border-[#C8FF00] text-[#C8FF00] font-bold'
                : 'text-[#A6AAA5] hover:text-[#F4F5F2]'
            }`}
          >
            1. Profile & Photos
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'projects'}
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 text-xs font-mono-tech transition-colors ${
              activeTab === 'projects'
                ? 'border-b-2 border-[#C8FF00] text-[#C8FF00] font-bold'
                : 'text-[#A6AAA5] hover:text-[#F4F5F2]'
            }`}
          >
            2. Add Custom Project
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'guide'}
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 text-xs font-mono-tech transition-colors ${
              activeTab === 'guide'
                ? 'border-b-2 border-[#C8FF00] text-[#C8FF00] font-bold'
                : 'text-[#A6AAA5] hover:text-[#F4F5F2]'
            }`}
          >
            3. Guide & Publishing
          </button>
        </div>

        {/* Tab 1: Profile & Photos */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Portrait Image Swapping */}
            <div className="p-4 bg-[#0B0D0E] border border-[#2A2E2B] clip-chamfer space-y-4">
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#C8FF00] flex items-center gap-2">
                <Image className="w-4 h-4" />
                <span>{t.customPhotoUrl[lang]}</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {profile.portraits.map((p, idx) => (
                  <div
                    key={p.id}
                    className="relative border border-[#2A2E2B] p-1 bg-[#141719] clip-chamfer"
                  >
                    <img
                      src={p.url}
                      alt={p.name.en}
                      className="w-full h-24 object-cover border border-[#2A2E2B]"
                    />
                    <span className="block text-[10px] font-mono-tech text-center text-[#A6AAA5] mt-1 truncate">
                      {p.name.en}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleApplyCustomPhoto} className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/my-new-photo.jpg"
                  value={customPhotoUrl}
                  onChange={(e) => setCustomPhotoUrl(e.target.value)}
                  className="flex-1 px-3 py-2 bg-[#141719] border border-[#2A2E2B] text-xs font-mono-tech text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C8FF00] text-[#0B0D0E] font-bold text-xs uppercase clip-chamfer hover:bg-[#d8ff33]"
                >
                  {t.applyPhoto[lang]}
                </button>
              </form>
            </div>

            {/* Profile Info Form */}
            <form onSubmit={handleSaveProfileDetails} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                    Name (Myanmar)
                  </label>
                  <input
                    type="text"
                    value={nameMy}
                    onChange={(e) => setNameMy(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                    Name (English)
                  </label>
                  <input
                    type="text"
                    value={nameEn}
                    onChange={(e) => setNameEn(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                    Role / Title (Myanmar)
                  </label>
                  <input
                    type="text"
                    value={titleMy}
                    onChange={(e) => setTitleMy(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                    Role / Title (English)
                  </label>
                  <input
                    type="text"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                    Primary Email
                  </label>
                  <input
                    type="email"
                    value={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                    Secondary Email
                  </label>
                  <input
                    type="email"
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="flex items-center gap-1.5 px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-xs font-mono-tech text-[#A6AAA5] hover:text-[#C8FF00] clip-chamfer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.exportConfig[lang]}</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#C8FF00] text-[#0B0D0E] font-bold text-xs uppercase clip-chamfer hover:bg-[#d8ff33]"
                >
                  {t.saveChanges[lang]}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 2: Add Custom Project */}
        {activeTab === 'projects' && (
          <form onSubmit={handleAddNewProject} className="space-y-4">
            <div>
              <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                Project Title (ပရောဂျက်အမည်)
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Inle Lake E-Commerce / အင်းလေး အွန်လိုင်းစနစ်"
                value={projTitle}
                onChange={(e) => setProjTitle(e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                  Category (အမျိုးအစား)
                </label>
                <select
                  value={projCategory}
                  onChange={(e) => setProjCategory(e.target.value as any)}
                  className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
                >
                  <option value="webapp">Web Application (ဝဘ်ဆော့ဖ်ဝဲလ်)</option>
                  <option value="software">Software & Tools (ဆော့ဖ်ဝဲလ် ကိရိယာ)</option>
                  <option value="client">Client Solution (စီးပွားရေးစနစ်)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                  Tech Stack (ကော်မာ ခြား၍ ရေးပါ)
                </label>
                <input
                  type="text"
                  value={projTech}
                  onChange={(e) => setProjTech(e.target.value)}
                  placeholder="React, TypeScript, Tailwind CSS"
                  className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-tech text-[#A6AAA5] mb-1">
                Short Description (ဖော်ပြချက် အကျဉ်း)
              </label>
              <textarea
                rows={3}
                value={projDesc}
                onChange={(e) => setProjDesc(e.target.value)}
                placeholder="Describe what the system does and key user benefits..."
                className="w-full px-3 py-2 bg-[#0B0D0E] border border-[#2A2E2B] text-sm text-[#F4F5F2] focus:border-[#C8FF00] focus:outline-none clip-chamfer"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C8FF00] text-[#0B0D0E] font-bold text-xs uppercase clip-chamfer hover:bg-[#d8ff33]"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project to Portfolio</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 3: Guide & Publishing */}
        {activeTab === 'guide' && (
          <div className="space-y-4 text-xs font-mono-tech text-[#A6AAA5] leading-relaxed">
            <div className="p-4 bg-[#0B0D0E] border border-[#2A2E2B] clip-chamfer space-y-2">
              <h4 className="text-sm font-bold text-[#F4F5F2] font-display flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C8FF00]" />
                <span>How to Replace Photos & Edit Details</span>
              </h4>
              <p>
                1. <strong className="text-[#F4F5F2]">Portrait Photos:</strong> Your two photos are already embedded in <code className="text-[#C8FF00]">src/data/portfolioData.ts</code>. You can switch between them using the &quot;Toggle Portrait View&quot; button in the hero section or customize the URLs above.
              </p>
              <p>
                2. <strong className="text-[#F4F5F2]">Bilingual Content:</strong> All strings are stored in <code className="text-[#C8FF00]">src/data/translations.ts</code> with paired Myanmar and English objects. You can modify any text naturally.
              </p>
              <p>
                3. <strong className="text-[#F4F5F2]">Contact Channels:</strong> Your actual links (Facebook, TikTok @min.thurein447, Telegram @Zxenm2007, Emails) are wired up.
              </p>
              <p>
                4. <strong className="text-[#F4F5F2]">Deployment:</strong> The website is built with Vite and React 19. Run <code className="text-[#C8FF00]">npm run build</code> to produce production static files.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
