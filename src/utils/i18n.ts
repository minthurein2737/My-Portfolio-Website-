import { Language, LocalizedString, Project } from '../types/portfolio';

/**
 * Safely retrieves localized string with graceful fallback.
 */
export function getLocalized(text: LocalizedString | undefined, lang: Language): string {
  if (!text) return '';
  if (lang === 'my') {
    return text.my || text.en || '';
  }
  return text.en || text.my || '';
}

/**
 * Filter projects by category or return all.
 */
export function filterProjects(projects: Project[], category: string): Project[] {
  if (!category || category === 'all') {
    return projects;
  }
  return projects.filter((p) => p.category === category);
}

/**
 * Form validation helper for the contact form.
 */
export function validateContactForm(name: string, email: string, message: string): {
  valid: boolean;
  errors: { name?: boolean; email?: boolean; message?: boolean };
} {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isNameValid = name.trim().length >= 2;
  const isEmailValid = emailRegex.test(email.trim());
  const isMessageValid = message.trim().length >= 5;

  return {
    valid: isNameValid && isEmailValid && isMessageValid,
    errors: {
      name: !isNameValid,
      email: !isEmailValid,
      message: !isMessageValid,
    },
  };
}

/**
 * Generates an accessible mailto link with encoded parameters.
 */
export function buildMailtoUrl(to: string, subject: string, body: string): string {
  const encodedSubject = encodeURIComponent(subject || 'Portfolio Inquiry');
  const encodedBody = encodeURIComponent(body || '');
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}
