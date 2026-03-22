# Payload Cloudflare Template

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://github.com/michxymi/with-cloudflare-d1/tree/main)

An opinionated version of Payload's original [Cloudflare template](https://github.com/payloadcms/payload/tree/main/templates/with-cloudflare-d1). Quality of life changes:

- [Tailwind](https://tailwindcss.com/) V4 styles for both the admin panel and the frontend
- Able to deploy with free Cloudflare account due to ```minify``` option in wrangler
- Using [Biome](https://biomejs.dev/) with the [Ultracite](https://www.ultracite.ai/) preset instead of ESLint and Prettier, updated ```.vscode``` settings.
- Thin out original AGENTS.md and add ```.skills``` files for Payload and NextJS.

Review the original [README](https://github.com/payloadcms/payload/tree/main/templates/with-cloudflare-d1#readme) to get started