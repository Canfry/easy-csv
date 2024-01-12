/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_mQ-QCOQn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './index_4fzQeFqN.mjs';
import { X as XataClient } from './_fileName__FNv7Xa1b.mjs';
import bcrypt from 'bcryptjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const errors = {};
  if (Astro2.request.method === "POST") {
    const xata = new XataClient({ apiKey: "xau_WfkZUvKI3vQS4yMUNgqmZGuKNJJUawB16" });
    const data = await Astro2.request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("repeat-password");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const userInDb = await xata.db.users.filter({ email }).getFirst();
    if (userInDb?.email === email) {
      errors.email = "User already registerd with this email";
    } else if (password !== confirmPassword) {
      errors.password = "Passwords do not match";
    } else if (!name || !email || !password || !confirmPassword) {
      errors.credentials = "Please fill in all fields";
    } else {
      const user = await xata.db.users.create({
        name,
        email,
        password: hash
      });
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grow flex flex-col items-center justify-center relative"> <h1 class="text-5xl text-slate-600 uppercase text bold">Register</h1> <p class="text-red-800 text-xl mb-4 h-5 text-center"> ${errors.credentials} </p> <form class="py-8 px-8 max-w-70% mx-auto" method="POST" action="http://localhost:4321/register"> <div class="flex flex-col items-start"> <label for="name" class="text-slate-600 text-xl"> Name:</label> <input type="text" name="name" id="name" class="border border-orange-600 mb-10 w-full rounded-md py-2 px-3 outline-3 outline-orange-600" placeholder="Enter your name" autocomplete="off"> </div> <div class="flex flex-col items-start"> <label for="email" class="text-slate-600 text-xl"> Email:</label> <input type="email" name="email" id="email" class="border border-orange-600 w-full rounded-md py-2 px-3 outline-3 outline-orange-600" placeholder="Enter your email" autocomplete="off"> <p class="text-red-800 text-xl mb-4 h-5 text-center"> ${errors.email} </p> </div> <div class="flex flex-col items-start"> <label for="password" class="text-slate-600 text-xl"> Password:</label> <input type="password" name="password" id="password" class="border border-orange-600 mb-10 w-full rounded-md py-2 px-3 outline-3 outline-orange-600" placeholder="Enter your password" autocomplete="off"> </div> <div class="flex flex-col items-start"> <label for="repeat-password" class="text-slate-600 text-xl">
Confirm password:
</label> <input type="password" name="repeat-password" id="repeat-password" class="border border-orange-600 w-full rounded-md py-2 px-3 outline-3 outline-orange-600" placeholder="Confirm your password" autocomplete="off"> <p class="text-red-800 mb-4 h-5 text-center"> ${errors.password} </p> </div> <div class="text-center my-4"> <button type="submit" class="border border-slate-600 bg-white text-orange-600 text-xl py-2 px-4 rounded-md hover:bg-orange-600 hover:border-orange-600 hover:text-white">
Register
</button> </div> <div class="text-center"> <a href="/signin"> <p>
Already have an account?${" "} <span class="text-orange-600">Sign In</span> </p> </a> </div> </form> </div> ` })}`;
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/register.astro", void 0);
const $$file = "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
