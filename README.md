# rpadam.github.io

Personal website for Raphael Adam.

## Tech stack
- Vite for local development and production build
- Static multi-page HTML/CSS/JS
- GitHub Pages deployment through GitHub Actions

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start local server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build and preview
```bash
npm run build
npm run preview
```

## Site structure
- `/index.html` Home
- `/experience/index.html` Experience + education
- `/contact/index.html` Contact details
- `/projects/index.html` Projects hub
- `/projects/*.html` Individual project pages, including Path Shift TD

## Deployment
The repository includes `.github/workflows/deploy-pages.yml` to build with Vite and deploy to GitHub Pages on push to `master`.
