# Eina Loux Ruiz — Portfolio

React + Vite. Font: Instrument Serif.

## Run it locally

```bash
npm install
npm run dev
```

Open the link it prints (usually http://localhost:5173).

## Add your photo

See the comment at the top of `src/pages/Home.jsx` — drop your photo in `src/assets/`, uncomment one import, change one line.

## Deploy to GitHub Pages

1. Create a GitHub repo and push this folder to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push (or re-run the "Deploy to GitHub Pages" workflow in the **Actions** tab).

Your site will be at `https://<your-username>.github.io/<repo-name>/`.
No config changes needed — paths are relative and the pages use hash URLs
(`/#/about`, `/#/projects`, `/#/contact`) so refreshing never 404s.

Tip: name the repo `<your-username>.github.io` to get the shorter URL
`https://<your-username>.github.io/`.

## Where things are

| File | What it does |
| --- | --- |
| `src/theme.js` | Colors + which circle opens which page |
| `src/pages/Home.jsx` | Landing page |
| `src/pages/BlankPage.jsx` | About / Projects / Contact (blank for now) |
| `src/components/BrowserBar.jsx` | The top bar with the circles |
| `src/App.jsx` | Routes + the color-fill page transition |
| `src/styles.css` | All styles and animations |
