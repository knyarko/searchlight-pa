# searchlight-pa

A static replica of [searchlightpa.net](https://www.searchlightpa.net) — the SearchLight
(K&K Analytics) marketing site — rebuilt as plain HTML/CSS/JS so it can be hosted on
GitHub Pages. The original is a Wix site; this version has no build step, no framework
and no runtime dependencies beyond two Google Fonts.

## Pages

| File | Original URL |
| --- | --- |
| `index.html` | `/` (home, incl. the `#contact` section) |
| `solutions.html` | `/copy-of-capabilities` |
| `education.html` | `/projects` |
| `about.html` | `/about` |

## Layout

```
index.html, solutions.html, education.html, about.html
assets/css/styles.css    all styling (CSS custom properties for the palette)
assets/js/main.js        mobile nav, hero slideshow, contact form handoff
assets/img/              logo, hero photos, section images, feature icons
.nojekyll                serve files as-is (don't run Jekyll)
.github/workflows/pages.yml
```

Palette and type are taken from the live site: navy `#002e5d`, deep navy `#0c3c60`,
mid blue `#39729b`, button blue `#6ea4ca`, pale blue `#d1e0eb`, teal `#3fa2c4`;
Raleway for headings, Open Sans for body text.

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy to GitHub Pages

1. Create a repository and push this directory to `main`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The included workflow publishes the repository root on every push to `main`.

The site is also happy served from **Deploy from a branch** (`main` / `/root`) if you'd
rather skip Actions — `.nojekyll` is already in place for that.

### Project vs. user site

Paths in the HTML are relative, so the site works both at
`https://<user>.github.io/<repo>/` and at a custom domain. For a custom domain, add a
`CNAME` file containing the domain at the repository root.

## Differences from the original

- **Contact form.** The Wix form posted to Wix's backend. GitHub Pages is static, so
  the form composes a `mailto:` message to `Info@mysearchlight.net` instead. Point it at
  a form service (Formspree, Basin, Netlify Forms) by giving the `<form>` an `action`
  and removing the handler in `assets/js/main.js`.
- **Log In.** Still links out to the real application at `searchlightpa.com`.

## Where the content came from

Wix serves each page's content as a JSON document. The home page's is at
`https://static.wixstatic.com/sites/f21c41_8164678a74ea2006a495ee7b6620c0fe_68.json.z`
(plain JSON despite the `.z`), and its `ImageList` holds the hero gallery — the four
slide images with their titles and descriptions, plus the gallery's own settings
(5s autoplay, 1s transition, left-aligned title and description), all of which this
replica matches. The other pages' JSON file names are listed under `pageJsonFileNames`
in the HTML of any page.

## Content ownership

Copy and images are reproduced from searchlightpa.net and remain the property of
K&K Analytics, LLC. Replace them before using this as a template for anything else.
