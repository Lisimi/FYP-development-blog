import { getCollection, type CollectionEntry } from 'astro:content';

export const authors = {
  'li-shimin': { name: 'LI Shimin', initials: 'LS', role: 'Programming', description: 'Player controls, gameplay systems and Unity integration.' },
  'chau-chi-chung': { name: 'Chau Chi Chung', initials: 'CC', role: 'Character art', description: 'Character modelling, rigging and deformation studies.' },
  'lam-man-ho': { name: 'Lam Man Ho', initials: 'LM', role: 'Team member', description: 'Part of the three-person Bamboo Vanguard project team.' },
} as const;

export type JournalEntry = CollectionEntry<'journal'>;

export function url(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export async function publishedEntries(): Promise<JournalEntry[]> {
  const entries = await getCollection('journal', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function entryPeriod(entry: JournalEntry): string {
  const date = entry.data.reportingMonth ? new Date(`${entry.data.reportingMonth}-01T00:00:00Z`) : entry.data.date;
  return new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
}

export function authorNames(entry: JournalEntry): string {
  return entry.data.authors.map((id) => authors[id].name).join(' & ');
}
