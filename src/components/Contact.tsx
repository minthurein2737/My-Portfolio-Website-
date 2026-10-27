import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import { Language, PortfolioProfile } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';
import { validateContactForm, buildMailtoUrl } from '../utils/i18n';
import { GeometricSection } from './GeometricSection';

interface ContactProps {
  profile: PortfolioProfile;
  lang: Language;
  onCopyText: (text: string, label: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ profile, lang, onCopyText }) => {
  const t = UI_TRANSLATIONS.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData.name, formData.email, formData.message);

    if (!validation.valid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});

    // Construct formatted message
    const formattedBody = `From: ${formData.name} (${formData.email})\n\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = buildMailtoUrl(profile.emails[0], formData.subject || 'Portfolio Inquiry', formattedBody);

    // Open mail client
    window.location.href = mailtoUrl;
    setSubmittedStatus('success');
  };

  const handleCopyFormMessage = () => {
    const validation = validateContactForm(formData.name, formData.email, formData.message);
    if (!validation.valid) {
      setFormErrors(validation.errors);
      return;
    }
    const formatted = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\nMessage:\n${formData.message}`;
    onCopyText(formatted, t.copySuccess[lang]);
    setSubmittedStatus('success');
  };

  return (
    <GeometricSection id="contact" className="py-20 md:py-28 bg-transparent border-b border-[#2A2E2B]/80">
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
          <p className="text-base text-[#A6AAA5] font-myanmar max-w-2xl leading-relaxed">
            {t.description[lang]}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inboxes & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Email Inboxes */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#C8FF00]">
                {t.directEmail[lang]}
              </h3>

              <div className="space-y-3">
                {profile.emails.map((email, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#141719] border border-[#2A2E2B] hover:border-[#C8FF00]/60 transition-all clip-chamfer flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 bg-[#0B0D0E] border border-[#2A2E2B] text-[#C8FF00] shrink-0 clip-chamfer">
                        <Mail className="w-4 h-4" />
                      </div>
                      <a
                        href={`mailto:${email}`}
                        className="text-sm font-mono-tech text-[#F4F5F2] hover:text-[#C8FF00] truncate transition-colors"
                        title={`Send email to ${email}`}
                      >
                        {email}
                      </a>
                    </div>

                    <button
                      onClick={() => onCopyText(email, 'Email address copied!')}
                      className="p-2 text-[#A6AAA5] hover:text-[#C8FF00] hover:bg-[#0B0D0E] transition-colors shrink-0 clip-chamfer"
                      aria-label={`Copy email ${email}`}
                      title="Copy email"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Social & Messaging Channels */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#C8FF00]">
                {t.socialProfiles[lang]}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {profile.socials
                  .filter((s) => s.platform !== 'email')
                  .map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[#141719] border border-[#2A2E2B] hover:border-[#C8FF00]/70 transition-all clip-chamfer flex items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-[#C8FF00] rounded-none rotate-45 group-hover:scale-125 transition-transform" />
                        <div>
                          <div className="text-sm font-bold text-[#F4F5F2] font-display group-hover:text-[#C8FF00] transition-colors">
                            {social.name}
                          </div>
                          <div className="text-xs font-mono-tech text-[#A6AAA5]">
                            {social.handle}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#A6AAA5] group-hover:text-[#F4F5F2]">
                        <span className="hidden sm:inline">Connect</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#C8FF00]" />
                      </div>
                    </a>
                  ))}
              </div>
            </div>

            {/* Taunggyi Local Time & Availability Badge */}
            <div className="p-5 bg-[#141719] border border-[#2A2E2B] clip-chamfer">
              <div className="flex items-center justify-between text-xs font-mono-tech mb-2">
                <span className="text-[#A6AAA5]">BASE:</span>
                <span className="text-[#C8FF00] font-semibold">TAUNGGYI, MYANMAR</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#A6AAA5]">TIMEZONE:</span>
                <span className="text-[#F4F5F2]">MMT (UTC+6:30)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#141719] border border-[#2A2E2B] clip-chamfer relative shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#F4F5F2] font-display mb-1">
                  {t.formTitle[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6AAA5] font-myanmar">
                  {t.formSubtitle[lang]}
                </p>
              </div>

              {submittedStatus === 'success' && (
                <div className="mb-6 p-4 bg-[#C8FF00]/10 border border-[#C8FF00] text-[#F4F5F2] text-sm clip-chamfer flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">{t.sendSuccess[lang]}</p>
                    <p className="text-xs text-[#A6AAA5]">
                      If your mail application did not open automatically, click &quot;Copy Form Message&quot; to paste into your favorite mail service.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono-tech uppercase tracking-wider text-[#A6AAA5] mb-2">
                    {t.nameLabel[lang]} <span className="text-[#C8FF00]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: false });
                    }}
                    placeholder={t.namePlaceholder[lang]}
                    className={`w-full px-4 py-3 bg-[#0B0D0E] border text-[#F4F5F2] text-sm focus:outline-none transition-colors clip-chamfer ${
                      formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-[#2A2E2B] focus:border-[#C8FF00]'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono-tech">
                      <AlertCircle className="w-3 h-3" /> Please enter your name (min 2 characters).
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono-tech uppercase tracking-wider text-[#A6AAA5] mb-2">
                    {t.emailLabel[lang]} <span className="text-[#C8FF00]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: false });
                    }}
                    placeholder={t.emailPlaceholder[lang]}
                    className={`w-full px-4 py-3 bg-[#0B0D0E] border text-[#F4F5F2] text-sm focus:outline-none transition-colors clip-chamfer ${
                      formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-[#2A2E2B] focus:border-[#C8FF00]'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono-tech">
                      <AlertCircle className="w-3 h-3" /> Please provide a valid email address.
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono-tech uppercase tracking-wider text-[#A6AAA5] mb-2">
                    {t.subjectLabel[lang]}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.subjectPlaceholder[lang]}
                    className="w-full px-4 py-3 bg-[#0B0D0E] border border-[#2A2E2B] focus:border-[#C8FF00] text-[#F4F5F2] text-sm focus:outline-none transition-colors clip-chamfer"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono-tech uppercase tracking-wider text-[#A6AAA5] mb-2">
                    {t.messageLabel[lang]} <span className="text-[#C8FF00]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: false });
                    }}
                    placeholder={t.messagePlaceholder[lang]}
                    className={`w-full px-4 py-3 bg-[#0B0D0E] border text-[#F4F5F2] text-sm focus:outline-none transition-colors clip-chamfer ${
                      formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-[#2A2E2B] focus:border-[#C8FF00]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono-tech">
                      <AlertCircle className="w-3 h-3" /> Please enter a message (min 5 characters).
                    </p>
                  )}
                </div>

                {/* Form Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C8FF00] text-[#0B0D0E] font-bold text-xs uppercase tracking-wider hover:bg-[#d8ff33] transition-colors clip-chamfer shadow-lg shadow-[#C8FF00]/10"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.submitButton[lang]}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFormMessage}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#0B0D0E] border border-[#2A2E2B] hover:border-[#C8FF00] text-[#F4F5F2] hover:text-[#C8FF00] text-xs font-mono-tech transition-colors clip-chamfer"
                  >
                    <Copy className="w-4 h-4 text-[#C8FF00]" />
                    <span>{t.copyMessageButton[lang]}</span>
                  </button>
                </div>

                {/* Transparent submission note */}
                <p className="text-[11px] text-[#A6AAA5] font-myanmar pt-2">
                  {t.disclaimer[lang]}
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </GeometricSection>
  );
};
