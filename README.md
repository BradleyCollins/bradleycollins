# bradleycollins

Personal site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on Netlify.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Editing content

- **Blog posts:** add a Markdown file to `src/content/blog/` with `title`, `date`, and `tags` frontmatter.
- **Projects & social links:** edit `src/data/projects.ts`. Put screenshots in `src/assets/`.
- **Colors & fonts:** theme tokens live in `src/styles/global.css`.

## Deploying

Netlify reads `netlify.toml` (build: `npm run build`, publish: `dist`).
