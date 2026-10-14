# Contributing

First off, thanks for taking the time to contribute. :+1:

This guide uses [Astro and Starlight](https://starlight.astro.build/) to build the website, [Skyra's Discord components](https://discord-components.js.org/) for message previews, and [`pre-commit`](https://pre-commit.com/) for formatting Markdown and Python examples.

To get started with contributing to this guide, follow these steps:

1. Clone the repository and enter its root directory (`cd guide`).
2. Install Node.js 22.12 or higher (CI uses Node.js 24) and pnpm 10.29.3, then run `pnpm install`.
3. Run the website locally or build it for production.
    - Use `pnpm dev` for an automatically reloading development server.
    - Use `pnpm check` to check Astro components and configuration.
    - Use `pnpm build` to generate the static site and local search index in `dist/`, then `pnpm preview` to serve it. Search is available in the production preview.
4. Run `pre-commit`.
    - If you want to install the pre-commit hooks to automatically run before every commit, use `pre-commit install`
    - Otherwise, use `pre-commit run --all-files` to run all checks once.

> [!NOTE]
> Before contributing new content, please consider checking if there is already an issue about the topic. If not, it would be advisable to create one first, in case you start working on something that may not end up being accepted.

## Content and components

Articles live in `src/content/docs/`. Every article requires a `title` in its frontmatter. Existing routes are preserved with `slug` overrides; the introduction is `index.mdx`. Configure sidebar order in `astro.config.mjs`.

Use Starlight's `Tabs`, `TabItem`, and callouts (`:::note[Title]`, `:::tip`, `:::caution`, or `:::danger`). Import components explicitly in MDX. For images imported from a local file, use `src={image.src}` on an `<img>` element.

`DocsLink`, `ResultingCode`, and `WorkInProgress` are Astro components in `src/components/`. Discord examples live in `src/components/examples/` as React components. Import a preview into MDX and render it with `client:only="react"`; Skyra's web components need a browser. The shared `DiscordPreview.jsx` adapter preserves the guide's profiles, embed colors, footer timestamps, and inline fields, and follows Starlight's theme selector.

Public assets live in `public/`. The nested `public/` directory preserves existing `/public/...` asset URLs. Keep `CNAME` and `.nojekyll` for GitHub Pages. The workflow builds with pnpm and publishes `dist` to the existing `gh-pages` branch.
