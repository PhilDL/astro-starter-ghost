# Astro 3 - Starter Ghost

[![Netlify Status](https://api.netlify.com/api/v1/badges/81004ccd-5c51-4294-9711-67a248143e6f/deploy-status)](https://app.netlify.com/sites/astro-starter-ghost/deploys)

A starter template to build super fast websites with [Ghost](https://ghost.org/) and [Astro](https://github.com/snowpackjs/astro). Updated for Astro 3 and using View Transitions.

**Live Demo**: [https://astro-starter-ghost.netlify.app/](https://astro-starter-ghost.netlify.app/)

## Features

### Using Astro latest versions

Currently using **astro@3.0.5***.

### Routes

The routes are the same as a standard Ghost Blog so you can migrate to Astro easily.

| Route                 | Content                                   |
| --------------------- | ----------------------------------------- |
| `/`                   | Homepage with recents/features Blog Posts |
| `/[slug]`             | Post or Page                              |
| `/author/[slug]`      | Author page with related posts            |
| `/authors`            | All the authors                           |
| `/tag[slug]`          | Tag page with related posts               |
| `/tags`               | All the tags                              |
| `/archives/[...page]` | All the posts, paginated                  |

### Ghost Casper theme and SCSS

Basic Ghost Theme converted from Handlebar version to this Astro version. CSS Classes are the same but the styles have
been scoped to their respective components. It is in the process of being fully converted to SCSS.

## Development Instructions

```
git clone https://github.com/PhilDL/astro-starter-ghost.git
cd astro-starter-ghost
yarn

# Development
yarn dev

# Production
yarn build
```

## Ghost API Key

You will need to create a new integration in your Ghost backend and note the Ghost URL and Content API Key.

Then, for local developpement rename the `.env.test` to `.env` and fill it with the Ghost URL and API Key:

```
PUBLIC_GHOST_URL=https://astro-starter.digitalpress.blog
PUBLIC_GHOST_KEY=e9b414c5d95a5456a647ff04ab
```

If you Deploy on Netlify, Vercel, etc you will have to set the same environement variables.
