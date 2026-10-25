import test from 'node:test';
import assert from 'node:assert/strict';
import { getLocalized, filterProjects, validateContactForm, buildMailtoUrl } from './i18n';
import { UI_TRANSLATIONS } from '../data/translations';
import { INITIAL_PROJECTS } from '../data/portfolioData';

test('getLocalized returns correct language strings', () => {
  const sample = {
    my: 'မင်္ဂလာပါ',
    en: 'Hello',
  };
  assert.equal(getLocalized(sample, 'my'), 'မင်္ဂလာပါ');
  assert.equal(getLocalized(sample, 'en'), 'Hello');
});

test('getLocalized falls back when one language is missing', () => {
  const myOnly = { my: 'မြန်မာ', en: '' };
  assert.equal(getLocalized(myOnly, 'en'), 'မြန်မာ');

  const enOnly = { my: '', en: 'English' };
  assert.equal(getLocalized(enOnly, 'my'), 'English');
});

test('UI_TRANSLATIONS contains key interface sections in both Myanmar and English', () => {
  assert.ok(UI_TRANSLATIONS.nav.letsTalk.my.length > 0);
  assert.ok(UI_TRANSLATIONS.nav.letsTalk.en.length > 0);
  assert.ok(UI_TRANSLATIONS.hero.viewWork.my.length > 0);
  assert.ok(UI_TRANSLATIONS.hero.viewWork.en.length > 0);
  assert.ok(UI_TRANSLATIONS.about.heading.my.length > 0);
  assert.ok(UI_TRANSLATIONS.about.heading.en.length > 0);
  assert.ok(UI_TRANSLATIONS.contact.formTitle.my.length > 0);
  assert.ok(UI_TRANSLATIONS.contact.formTitle.en.length > 0);
});

test('filterProjects handles categories correctly', () => {
  const allProjects = filterProjects(INITIAL_PROJECTS, 'all');
  assert.equal(allProjects.length, INITIAL_PROJECTS.length);

  const webapps = filterProjects(INITIAL_PROJECTS, 'webapp');
  assert.ok(webapps.length > 0);
  assert.ok(webapps.every((p) => p.category === 'webapp'));

  const software = filterProjects(INITIAL_PROJECTS, 'software');
  assert.ok(software.length > 0);
  assert.ok(software.every((p) => p.category === 'software'));
});

test('validateContactForm checks name, email, and message correctly', () => {
  const invalidEmpty = validateContactForm('', '', '');
  assert.equal(invalidEmpty.valid, false);
  assert.equal(invalidEmpty.errors.name, true);
  assert.equal(invalidEmpty.errors.email, true);
  assert.equal(invalidEmpty.errors.message, true);

  const invalidEmail = validateContactForm('Min Thurein', 'invalid-email', 'Hello from Taunggyi');
  assert.equal(invalidEmail.valid, false);
  assert.equal(invalidEmail.errors.email, true);
  assert.equal(invalidEmail.errors.name, false);

  const valid = validateContactForm('Min Thurein', 'minthurein2737@gmail.com', 'I would like to discuss a project with you.');
  assert.equal(valid.valid, true);
  assert.equal(valid.errors.name, false);
  assert.equal(valid.errors.email, false);
  assert.equal(valid.errors.message, false);
});

test('buildMailtoUrl constructs proper mailto URI', () => {
  const url = buildMailtoUrl('minthurein2737@gmail.com', 'Hello World', 'Line 1\nLine 2');
  assert.ok(url.startsWith('mailto:minthurein2737@gmail.com?subject=Hello%20World&body='));
});
