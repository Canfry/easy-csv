import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
/* import vercel from '@astrojs/vercel/serverless'; */
import react from '@astrojs/react';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), netlify()],
  output: 'server',
  adapter: netlify(),
  prefetch: false,
  vite: {
    ssr: {
      noExternal: ['react-icons']
    }
  }
});
