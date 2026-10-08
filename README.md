# Cling Info Tech Website

A redesign of the Cling Info Tech company website, built with React and Vite. Focuses on clean typography, responsive layouts, and restrained native CSS animations.

## Getting Started

Make sure you have Node.js installed (v18 or higher recommended).

### Install dependencies

```bash
npm install
```

### Run local dev server

```bash
npm run dev
```

The application runs locally at `http://localhost:5173`.

### Production build

```bash
npm run build
```

The compiled assets will be generated in the `dist` folder.

## Project Structure

- `src/components/` - Page sections and UI components (Hero, Services, FeaturedWork, etc.)
- `src/data/` - Static site content and project metadata (`siteData.js`)
- `src/hooks/` - Custom utility hooks (`useScrollReveal.js`)
- `src/App.css` - Component layouts and animation styles
- `src/index.css` - Design tokens, typography, and base styles
- `public/` - Static assets including images, videos, and logos
