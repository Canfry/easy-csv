import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_-1eE4T7M.mjs';

const _page0  = () => import('./chunks/generic_BL8fo2SR.mjs');
const _page1  = () => import('./chunks/index_jeRZRJ0k.mjs');
const _page2  = () => import('./chunks/index_NZvV0_7t.mjs');
const _page3  = () => import('./chunks/register_09UvgjPb.mjs');
const _page4  = () => import('./chunks/logout_9SrApVWf.mjs');
const _page5  = () => import('./chunks/signin_F3m7J-uK.mjs');
const _page6  = () => import('./chunks/_fileName__sNSy3feo.mjs');
const _page7  = () => import('./chunks/_id__9ASjW-z3.mjs');
const _page8  = () => import('./chunks/upload_3dpcT6Db.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/dashboard/index.astro", _page2],["src/pages/register.astro", _page3],["src/pages/logout.astro", _page4],["src/pages/signin.astro", _page5],["src/pages/api/content/[fileName].ts", _page6],["src/pages/api/delete/[id].ts", _page7],["src/pages/api/upload.ts", _page8]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
