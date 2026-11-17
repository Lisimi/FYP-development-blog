import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.coerce.date(),
    reportingMonth: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/).optional(),
    authors: z.array(z.enum(['li-shimin', 'chau-chi-chung', 'lam-man-ho'])).min(1),
    category: z.enum(['Monthly report', 'Programming', 'Art', 'Level design']),
    cover: z.string().regex(/^\/images\//),
    coverAlt: z.string().min(1),
    draft: z.boolean().default(true),
  }),
});

export const collections = { journal };
