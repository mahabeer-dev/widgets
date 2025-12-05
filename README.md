# M-widgets

Beautiful, accessible React widgets and full-page sections — showcased with a modern Next.js site.

## Quick Start

- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build for production: `npm run build`
- Start production build: `npm run start`

## Tech Stack

- Next.js App Router, React, TypeScript
- Tailwind CSS and Radix UI primitives
- Three.js via `@react-three/fiber` and `@react-three/drei` (3D logo and sections)
- Vercel Analytics

## SEO

- Rich metadata in `app/layout.tsx` (Open Graph, Twitter, robots)
- Auto-generated `robots.txt` (`app/robots.ts`) and `sitemap.xml` (`app/sitemap.ts`)
- JSON-LD structured data on Home (`app/page.tsx`)
- Remember to set `NEXT_PUBLIC_SITE_URL` in your environment for canonical URLs

## Project Structure

```
react-widget-library/
├── app/                    # Next.js routes (App Router)
│   ├── components/         # Component docs pages
│   ├── sections/           # Section demos and pages
│   ├── layout.tsx          # Global layout and metadata
│   ├── page.tsx            # Home
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/             # Shared UI (CodePreview, layouts, 3D logo, etc.)
├── hooks/                  # Reusable hooks
├── lib/                    # Utilities
├── public/                 # Static assets and icons
├── styles/                 # Global styles
├── package.json            # Scripts and dependencies
├── tsconfig.json           # TypeScript config
└── next.config.mjs         # Next.js config
```

## Routes

- Home: `/`
- Components index: `/components`
- Sections index: `/sections`
- Sections: `/sections/hero-3d`, `/sections/hero-gradient`, `/sections/hero-particles`, `/sections/features-bento`, `/sections/pricing`, `/sections/testimonials`, `/sections/team`, `/sections/cta`

## Customization

- Brand name appears in headers (e.g., `app/page.tsx`, `app/sections/page.tsx`) — update the text "M-widgets"
- 3D Logo component: `components/logo-3d.tsx`
  - Colors and materials: edit `GradientTexture` and `meshStandardMaterial`
  - Motion: adjust `Float` and `useFrame` logic

## Environment

- `NEXT_PUBLIC_SITE_URL` (recommended): e.g., `https://your-domain.com`

## Deployment

- Vercel: import repo, set `NEXT_PUBLIC_SITE_URL`, and deploy
- Any Node host: build with `npm run build`, then `npm run start`

## License

MIT
