# marcelmastik-cz

Můj osobní web a blog. Postavený na [Astro](https://astro.build), nasazený na Vercelu.

## Jak napsat článek

1. Vytvoř soubor `src/content/blog/nazev-clanku.md` (název souboru = adresa článku).
2. Nahoru dej hlavičku:
   ```md
   ---
   title: 'Název článku'
   description: 'Krátký popis do výpisu a pro Google.'
   pubDate: 2026-10-08
   draft: false
   ---
   ```
3. Pod ni piš text v Markdownu. Commit + push → web se sám nasadí.

## Kde co upravit

| Co | Soubor |
| --- | --- |
| Jméno, e-mail, sociální sítě | `src/consts.ts` |
| Úvodní stránka | `src/pages/index.astro` |
| O mně + CV | `src/pages/o-mne.astro` |
| Projekty | `src/content/projekty/*.md` |
| Barvy a písma | `src/styles/global.css` (proměnné nahoře) |
| Fotka / CV v PDF | `public/foto.jpg`, `public/cv.pdf` |

## Lokální spuštění

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # produkční build do dist/
```
