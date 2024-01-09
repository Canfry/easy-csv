import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), netlify()],
  output: 'server',
  adapter: vercel(),
  prefetch: false,
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
});
