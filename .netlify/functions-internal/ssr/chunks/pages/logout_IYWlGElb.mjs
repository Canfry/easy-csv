/* empty css                          */
import { e as createAstro, f as createComponent } from '../astro_mQ-QCOQn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.cookies.delete("userId");
  Astro2.cookies.delete("userEmail");
  Astro2.cookies.delete("userName");
  return Astro2.redirect("/");
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/logout.astro", void 0);

const $$file = "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
