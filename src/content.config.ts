import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const projekty = defineCollection({
  loader: glob({ base: './src/content/projekty', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    company: z.string(),
    period: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { blog, projekty };
