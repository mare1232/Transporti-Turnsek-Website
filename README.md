# Turnšek Transport

Company website for Turnšek Transport. The site content is in Slovenian (with English/German translations via `i18n.js`).

## Publishing on GitHub Pages

1. Upload all files from this folder to the root of the repository.
2. Settings → Pages → Source: Deploy from a branch, branch `main`, folder `/ (root)`.
3. The site will be available at `https://<user>.github.io/<repository>/`.

## Branching

- `main` — production branch, protected, deployed to GitHub Pages.
- `develop` — integration branch for ongoing work; open a pull request into `main` to release.

## Files

- `index.html` – main page
- `kontakt.html` – contact / inquiry page
- `support.js`, `map.js`, `land-data.js`, `i18n.js` – scripts (map, translations)
- `assets/logo-glava.png`, `assets/logo-noga.png` – logo (replaceable)
