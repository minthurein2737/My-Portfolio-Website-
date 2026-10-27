/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, PortfolioProfile, Project } from './types/portfolio';
import { INITIAL_PROFILE, INITIAL_PROJECTS, SKILL_CATEGORIES } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomizerModal } from './components/CustomizerModal';
import { Toast } from './components/Toast';
import { ScrollSpyIndicator } from './components/ScrollSpyIndicator';
import { LedDotsBackground } from './components/LedDotsBackground';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  // Initial language must be Myanmar ('my') as requested
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('min_thurein_portfolio_lang');
      if (saved === 'en' || saved === 'my') {
        return saved;
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
    return 'my';
  });

  const [profile, setProfile] = useState<PortfolioProfile>(INITIAL_PROFILE);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [activePortraitIndex, setActivePortraitIndex] = useState<number>(0);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  // Scroll spy active section tracker
  const activeSection = useScrollSpy(['about', 'skills', 'projects', 'contact'], 180);

  // Sync document language attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('min_thurein_portfolio_lang', lang);
    } catch {
      // Ignore
    }
  }, [lang]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    showToast(newLang === 'my' ? 'ဘာသာစကားကို မြန်မာ သို့ ပြောင်းလဲထားပါသည်' : 'Switched language to English');
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastOpen(true);
  };

  const handleTogglePortrait = () => {
    setActivePortraitIndex((prev) => (prev + 1) % profile.portraits.length);
    showToast(
      lang === 'my'
        ? 'ကိုယ်ပိုင်ဓာတ်ပုံ ပြောင်းလဲပြသထားပါသည်'
        : 'Switched active portrait view'
    );
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    showToast(
      lang === 'my'
        ? `အီးမေးလ် (${email}) ကို ကူးယူပြီးပါပြီ!`
        : `Copied email (${email}) to clipboard!`
    );
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(label);
  };

  const handleAddCustomProject = (newProj: Project) => {
    setProjects((prev) => [newProj, ...prev]);
  };

  return (
    <div className={`relative min-h-screen bg-[#0B0D0E] text-[#F4F5F2] flex flex-col font-sans selection:bg-[#C8FF00] selection:text-[#0B0D0E] ${lang === 'my' ? 'font-myanmar' : ''}`}>
      {/* Full-Website Running LED Dots & Electric Sparks Background */}
      <LedDotsBackground />

      {/* Top Sticky Header with Active Section and Reading Progress */}
      <Header
        lang={lang}
        activeSection={activeSection}
        onLanguageChange={handleLanguageChange}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Floating Geometric Scroll Spy Indicator (Desktop) */}
      <ScrollSpyIndicator activeSection={activeSection} lang={lang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          profile={profile}
          lang={lang}
          activePortraitIndex={activePortraitIndex}
          onTogglePortrait={handleTogglePortrait}
          onCopyEmail={handleCopyEmail}
        />

        {/* 01. About Section */}
        <About profile={profile} lang={lang} />

        {/* 02. Skills & Technologies */}
        <Skills categories={SKILL_CATEGORIES} lang={lang} />

        {/* 03. Selected Projects */}
        <Projects
          projects={projects}
          lang={lang}
          onOpenAddProjectModal={() => setIsCustomizerOpen(true)}
        />

        {/* 04. Contact & Inquiries */}
        <Contact
          profile={profile}
          lang={lang}
          onCopyText={handleCopyText}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} lang={lang} />

      {/* Customizer / Settings Helper Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
        onAddProject={handleAddCustomProject}
        lang={lang}
        onToast={showToast}
      />

      {/* Toast Feedback */}
      <Toast
        isOpen={isToastOpen}
        message={toastMessage}
        onClose={() => setIsToastOpen(false)}
      />
    </div>
  );
}
