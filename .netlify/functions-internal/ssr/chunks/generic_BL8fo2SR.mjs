export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_sf15DgT1.mjs').then(n => n.g);

export { page };
