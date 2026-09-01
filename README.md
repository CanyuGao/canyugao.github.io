# Canyu Gao Academic Website

A complete, responsive static website designed for GitHub Pages. The site is intentionally framework-free: all pages and interactions run from the included HTML, CSS, and JavaScript files.

## Publish with GitHub Pages

1. Create a new GitHub repository and upload every file in this folder.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.

GitHub will provide the public URL after the first deployment.

## Change the portrait

The current homepage portrait is stored at `assets/profile.jpg`. Replace that file with another JPG using the same filename to update the image without changing the page code. Square or 4:3 images work best.

## Social preview

`assets/og.png` is ready to use. After the final GitHub Pages URL is known, add this line inside the `<head>` in `index.html`, replacing the example URL with the real one:

```html
<meta property="og:image" content="https://USERNAME.github.io/REPOSITORY/assets/og.png" />
```

## Update content

- Academic content and links: `index.html`
- Colors, typography, layout, and responsive behavior: `styles.css`
- Mobile navigation and active-section behavior: `script.js`
- Downloadable CV: `assets/CV_Canyu_Gao.pdf`

The website uses no analytics, trackers, forms, or third-party scripts.
