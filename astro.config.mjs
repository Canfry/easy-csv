import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
// import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), vercel()],
  output: 'server',
  adapter: vercel(),
  prefetch: false,
  ssr: {
    noExternal: ['react-icons'],
  },
});
