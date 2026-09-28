# Developer Portfolio Pro

A fast, accessible, single-page portfolio template by Adyoolau.
Plain HTML, CSS and JavaScript. No build step, no dependencies.

**Includes:** light and dark themes (follows the visitor's system, remembers their choice), responsive layout, skip link and visible keyboard focus, reduced-motion support, SEO and social-sharing tags, structured data, favicon, 404 page, robots.txt, sitemap and a sample résumé.

## Quick start

1. Unzip the folder.
2. Open `index.html` in your browser to preview it. No server needed.
3. Edit the text in `index.html` (see the checklist below).
4. Upload the whole folder to any static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your own server.

## What's in the folder

| Path | What it does |
| --- | --- |
| `index.html` | Page content: name, projects, experience, contact |
| `css/styles.css` | All styling. Colors are variables at the top |
| `js/main.js` | Footer year, theme switch (saved between visits), active nav link |
| `404.html` | Page shown for broken links (most hosts pick it up automatically) |
| `favicon.svg` | Browser tab icon |
| `assets/resume.pdf` | Sample résumé. Replace with yours |
| `assets/og-image.png` | 1200 x 630 image shown when the site is shared |
| `robots.txt`, `sitemap.xml` | Search engine files |

## Make it yours: checklist

Search each item across all files (`index.html` and `404.html`) and replace it.

- [ ] `Alex Morgan`: your name. It appears in the nav, the code card, the footer, the page titles and the structured data.
- [ ] `your-domain.com`: your real address. Used in the canonical link, social tags, structured data, `robots.txt` and `sitemap.xml`.
- [ ] `hello@your-domain.com`: your email (the "Email me" button and structured data).
- [ ] `your-username`: your GitHub and LinkedIn addresses. Delete the `<ul class="links">` block if you don't want them.
- [ ] `https://example.com/...`: the link for each project card. Each whole card is clickable.
- [ ] Hero text, projects, stack and experience: write your own. Keep the structure and copy a block to add more.
- [ ] `assets/resume.pdf`: replace the file with your own PDF, keeping the same name.
- [ ] `assets/og-image.png`: replace with your own 1200 x 630 image.
- [ ] `favicon.svg`: swap for your logo or initials.

## Customize the design

**Colors.** Change `--gold`, `--bg`, `--surface` and `--text` at the top of `css/styles.css`. Dark-mode values are in the second and third blocks (one follows the system setting, the other follows the manual switch, so update both). Keep `--gold-text` dark enough on the light background for readable links.

**Project images.** The cards use CSS gradients (`.t1` to `.t4`) as thumbnails. To use a screenshot, replace the `<div class="thumb t1" ...></div>` with:

```html
<img class="thumb" src="assets/project.png" alt="Describe the project" width="1200" height="450">
```

and add `width:100%;object-fit:cover` to `.thumb` in the CSS.

**Fonts.** Bricolage Grotesque and Instrument Sans load from Google Fonts, with system fonts as a fallback. To use other fonts, change the `<link>` tags in `<head>` and the `font-family` values in the CSS. To avoid contacting Google (some privacy laws make this worth considering for EU visitors), download the fonts, put the files in a `fonts/` folder and load them with `@font-face`.

**Sections.** Delete a section's `<section>` block and its link in the nav to remove it.

## Contact form (optional)

The template uses a plain email link so it works anywhere. If you want a form, services such as Formspree or Netlify Forms work with static sites. Add their `<form>` snippet inside the contact section.

## Deploying

- **Netlify or Cloudflare Pages:** drag the folder into the dashboard. `404.html` is used automatically.
- **Vercel:** import the folder as a static project.
- **GitHub Pages:** push the folder to a repository and enable Pages. Serve it from the site root so the absolute paths in `404.html` resolve.
- **Own server:** upload the folder contents to your web root.

After deploying, paste your address into a link-preview checker to confirm the social image appears.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari. Older browsers that lack `color-mix()` or `:has()` still show a complete page with slightly simpler hover and focus styling.

## License

See `LICENSE.txt`. In short: use it for your own portfolio or for a client's, no credit required. Do not resell, redistribute or share the template files.

## Support

Questions or problems: contact the seller through the marketplace where you bought this template.
