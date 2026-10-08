import { getCollection } from 'astro:content';

/** Publikované články seřazené od nejnovějšího. Koncepty (draft) se zobrazí jen při `npm run dev`. */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
