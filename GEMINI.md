# GEMINI.md - Astro Blogs Project Context

## Project Overview

This project is an **Astro-based blog** built using the official Astro blog starter template. It serves as a lightweight, SEO-friendly personal website or portfolio.

### Key Technologies

- **Framework:** [Astro](https://astro.build/) (v6.0.8+)
- **Content:** Markdown and MDX support via `@astrojs/mdx` and Astro Content Collections.
- **Styling:** Vanilla CSS with global styles in `src/styles/global.css`.
- **Integrations:**
  - `@astrojs/sitemap`: Automatic sitemap generation.
  - `@astrojs/rss`: RSS feed support.
  - `sharp`: High-performance image processing.

## Project Structure

- `src/content/blog/`: Directory for blog posts (Markdown and MDX files).
- `src/pages/`: File-based routing for the website.
  - `index.astro`: Homepage.
  - `blog/index.astro`: Blog list page.
  - `blog/[...slug].astro`: Dynamic route for individual blog posts.
- `src/layouts/`: Shared layouts, notably `BlogPost.astro` for rendering articles.
- `src/components/`: Reusable Astro components (`Header`, `Footer`, `BaseHead`, etc.).
- `src/content.config.ts`: Configuration for content collections, including frontmatter validation using Zod.
- `src/consts.ts`: Site-wide constants like `SITE_TITLE` and `SITE_DESCRIPTION`.

## Building and Running

The project uses `pnpm` as the preferred package manager.

| Action                       | Command                |
| :--------------------------- | :--------------------- |
| **Install Dependencies**     | `pnpm install`         |
| **Development Server**       | `pnpm dev`             |
| **Build for Production**     | `pnpm build`           |
| **Preview Production Build** | `pnpm preview`         |
| **Run Astro CLI**            | `pnpm astro [command]` |

## Development Conventions

- **Content Collections:** Always define new collections or update schemas in `src/content.config.ts`.
- **Styling:** Prefer updating `src/styles/global.css` or using component-scoped styles in `.astro` files.
- **Metadata:** Update site-wide metadata in `src/consts.ts`.
- **Images:** Use the `<Image />` component from `astro:assets` for optimized image handling, especially in layouts like `BlogPost.astro`.
- **Dates:** Use the `FormattedDate.astro` component to ensure consistent date rendering across the site.
