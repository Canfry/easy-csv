/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_mQ-QCOQn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './index_4fzQeFqN.mjs';
import { X as XataClient } from './_fileName__FNv7Xa1b.mjs';
import bcrypt from 'bcryptjs';

const $$Astro = createAstro();
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  if (Astro2.request.method === "POST") {
    const xata = new XataClient({ apiKey: "xau_WfkZUvKI3vQS4yMUNgqmZGuKNJJUawB16" });
    const data = await Astro2.request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const user = await xata.db.users.filter({ email }).getFirst();
    if (!user) ; else {
      const authenticated = bcrypt.compareSync(password, user.password);
      if (!authenticated) ; else {
        Astro2.cookies.set("userId", user.id, {
          httpOnly: true,
          secure: true
        });
        Astro2.cookies.set("userName", user.name, {
          httpOnly: true,
          secure: true
        });
        Astro2.cookies.set("userEmail", user.email, {
          httpOnly: true,
          secure: true
        });
        return Astro2.redirect("/dashboard", 302);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign In" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grow flex flex-col items-center justify-center relative h-full"> <h1 class="text-5xl text-slate-600 uppercase text bold">Sign In</h1> <form class="py-8 px-8 max-w-70% mx-auto" method="POST"> <div class="flex flex-col items-start"> <label for="email" class="text-slate-600 text-xl"> Email:</label> <input type="email" name="email" id="email" class="border border-orange-600 mb-4 w-full rounded-md py-2 px-3 outline-3 outline-orange-600" placeholder="Enter your email" autocomplete="off"> </div> <div class="flex flex-col items-start"> <label for="password" class="text-slate-600 text-xl"> Password:</label> <input type="password" name="password" id="password" class="border border-orange-600 mb-4 w-full rounded-md py-2 px-3 outline-3 outline-orange-600" placeholder="Enter your password" autocomplete="off"> </div> <div class="text-center my-4"> <button type="submit" class="border border-slate-600 bg-white text-orange-600 text-xl py-2 px-4 rounded-md hover:bg-orange-600 hover:border-orange-600 hover:text-white">
Sign In
</button> </div> <div class="text-center"> <a href="/register"> <p>
Not registered yet?${" "} <span class="text-orange-600">Register</span> </p> </a> </div> </form> </div> ` })}`;
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/signin.astro", void 0);
const $$file = "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/signin.astro";
const $$url = "/signin";

export { $$Signin as default, $$file as file, $$url as url };
