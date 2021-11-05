# Astro - Starter Ghost

[![Netlify Status](https://api.netlify.com/api/v1/badges/81004ccd-5c51-4294-9711-67a248143e6f/deploy-status)](https://app.netlify.com/sites/astro-starter-ghost/deploys)

A starter template to build super fast websites with [Ghost](https://ghost.org/) and [Astro](https://github.com/snowpackjs/astro)

**Live Demo**: [https://astro-starter-ghost.netlify.app/](https://astro-starter-ghost.netlify.app/)

## Features

Astro Next compatible: Currently using **astro@0.21.0-next.1***

- Pages / Posts
- Tag
- Author
- Archives page (all posts paginated)
- Tags page (all tags)
- Authors page (all authors)

## Deployment

Rename the `.env.test` to `.env` and fill it with the Ghost URL and API Key:

```
VITE_GHOST_URL=https://astro-starter.codingdodo.com
VITE_GHOST_KEY=831b7314fa8ce1807e0b98dc34
```

## Development Instructions

`yarn install` and then `yarn dev` for local development.
