# Kaasyap QA Portfolio

A professional, responsive React + TypeScript + Vite + Tailwind CSS portfolio generated from the supplied resume.

## Included

- Recruiter-focused hero and quick profile
- About
- Experience timeline
- Skills grouped by testing, automation, tools and web technologies
- QA workflow
- Projects
- Achievements
- Education
- Contact section
- Dark/light theme with localStorage
- Responsive mobile navigation
- Accessible semantic structure and reduced-motion support
- Basic SEO metadata
- Resume download
- Centralized `src/data/portfolioData.ts`

## Run locally

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Then open the URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Update resume content

Edit:

```text
src/data/portfolioData.ts
```

The UI components consume this data object rather than duplicating resume content.

## Resume download

The supplied resume PDF is copied to:

```text
public/Josyula-Venkata-Sai-Kaasyap-resume.pdf
```

Replace that file if the resume is updated.

## Contact form

The form is intentionally front-end only. It confirms a demo submission but does not claim to send email. To enable delivery, connect it to a backend or service such as your preferred email/form provider.

## Deployment

### Vercel
Import the project repository. Vercel detects Vite automatically.

Build command:
```bash
npm run build
```

Output directory:
```text
dist
```

### Netlify
Build command:
```bash
npm run build
```
Publish directory:
```text
dist
```

### GitHub Pages
For GitHub Pages, configure a deployment workflow using `npm run build` and publish the `dist` directory. If deploying under a repository subpath, update the Vite `base` setting accordingly.

## Content accuracy note

The portfolio intentionally preserves the supplied resume wording where a date or education title appears unusual rather than silently changing it. In particular, the second project period is represented as `Aug 2024 – Jan 2024` because that is what the resume states.
