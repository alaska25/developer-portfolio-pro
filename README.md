# Developer Portfolio Pro

A fast, accessible, single-page portfolio template by Adyoolau.
Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Quick start

1. Unzip the folder.
2. Open `index.html` in your browser to preview it.
3. Edit the text in `index.html` and upload the folder to any static host
   (Vercel, Netlify, GitHub Pages, or your own server).

## Files

- `index.html`     page content (name, projects, experience, contact)
- `css/styles.css` all styling, with colors defined as variables at the top
- `js/main.js`     footer year and light/dark theme switch

## Customize

- **Your details:** replace "Alex Morgan", the sample projects and the
  experience entries in `index.html`.
- **Colors:** change `--gold`, `--bg`, `--surface` and `--text` in
  `css/styles.css`. Dark-mode values are in the second and third blocks.
- **Project images:** the cards use CSS gradients as thumbnails. To use a
  screenshot, replace `<div class="thumb t1" ...></div>` with
  `<img class="thumb" src="images/project.png" alt="Describe the project">`
  and add `width:100%;object-fit:cover` to `.thumb` in the CSS.
- **Contact email:** update the `mailto:` link near the bottom of `index.html`.
- **Fonts:** Bricolage Grotesque and Instrument Sans load from Google Fonts.
  Change or remove the `<link>` tags in `<head>` if you prefer other fonts.

## License

Use it for your own portfolio or client work. Do not resell or redistribute
the template files themselves.
