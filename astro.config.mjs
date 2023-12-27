import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), tunnel()],
  output: 'server',
  adapter: vercel(),
  prefetch: false,
});
