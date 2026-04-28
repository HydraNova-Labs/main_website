# Atlas Bioindustries Website

Static marketing website for [Atlas Bioindustries](https://atlasbioindustries.com) — a precision tissue culture company producing disease-free, genetically stable plants at industrial scale.

Built with React, TypeScript, Vite, and Tailwind CSS. Supports light and dark modes with scroll-triggered animations.

## Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** DM Sans + Instrument Serif

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Deployment

### Netlify / Vercel

Connect the GitHub repo and it will auto-deploy on push. Configuration is in `netlify.toml`.

### Docker

A multi-stage Dockerfile builds the site and serves it via nginx on port `8420`.

```bash
# Build and run locally
docker build -t atlas-bioindustries-website .
docker run -p 8420:8420 atlas-bioindustries-website

# Or pull the pre-built image from GHCR
docker compose up -d
```

The GitHub Actions workflow automatically builds and pushes the Docker image to `ghcr.io/abuettner93/atlas_bioindustries_website` on every push to `main`.
