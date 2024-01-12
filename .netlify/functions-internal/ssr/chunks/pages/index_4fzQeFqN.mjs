/* empty css                          */
import 'html-escaper';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute, F as Fragment, j as renderHead, k as renderSlot } from '../astro_mQ-QCOQn.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from './generic_sf15DgT1.mjs';
/* empty css                          */
import { X as XataClient } from './_fileName__FNv7Xa1b.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const $$Astro$6 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Navbar;
  const user = Astro2.cookies.get("userName");
  return renderTemplate`${maybeRenderHead()}<nav class="text-slate-600 flex items-center justify-between bg-transparent z-40"> <div> <a href="/"> <h1 class="text-3xl">
Easy<span class="font-bold text-orange-600">CSV</span> </h1> </a> </div> <ul class="flex items-center gap-x-8 max-md:hidden"> ${user?.value ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <p class="max-md:hidden">
Hi${" "} <span class="text-slate-700 font-bold"> ${user.value.split(" ")[0]} </span> </p> <a href="/logout" class="transition ease-in-out text-xl bg-transparent text-orange-500 border border-1 hover:border-orange-600 border-slate-700 py-1 px-4 rounded-md hover:bg-orange-500 hover:text-white duration-300">
Sign Out
</a> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="/signin" class="transition ease-in-out text-xl bg-transparent text-orange-500 border border-1 hover:border-orange-600 border-slate-700 py-1 px-4 rounded-md hover:bg-orange-500 hover:text-white duration-300">
Sign In
</a> <a class="transition ease-in-out text-xl text-slate-800 font-semibold hover:text-orange-600 duration-300" href="/register">
Register
</a> ` })}`} </ul> <div class="hidden max-md:dropdown max-md:dropdown-left max-md:block z-[100]"> <div role="button" class="btn m-1 text-slate-700 bg-transparent border-none hover:text-orange-600 hover:bg-transparent"> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18v2H6v-2h12Zm3-7v2H3v-2h18Zm-3-7v2H6V4h12Z"></path></svg> </div> ${user?.value ? renderTemplate`<ul${addAttribute(0, "tabindex")} class="dropdown-content z-[150] menu p-2 text-lg shadow bg-base-100 rounded-box w-52"> <li> <a href="/logout">Sign Out</a> </li> </ul>` : renderTemplate`<ul${addAttribute(0, "tabindex")} class="dropdown-content z-[1] menu p-2 text-lg shadow shadow-orange-100 bg-base-100 rounded-box w-52"> <li> <a href="/signin">Sign In</a> </li> <li> <a href="/register">Register</a> </li> </ul>`} </div> </nav>`;
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/components/Navbar.astro", void 0);

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="max-lg:px-24 px-48 z-20 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto"> ${renderComponent($$result, "Navbar", $$Navbar, {})} </header>`;
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div class="max-lg:px-24 px-48 z-20 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto"> <p class="text-center text-slate-600">
Copyright Christophe Anfry &copy; ${today} </p> </div>`;
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Easy CSV",
    description = "A web application to visualize your CSV files",
    image = `${Astro2.site?.origin}/Image-by-pch.vector-on-Freepik.svg`
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="light"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" href="/Image-by-pch.vector-on-Freepik.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Open Grpah Meta --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:image:alt"${addAttribute(description, "content")}><!-- Twitter Meta --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><meta property="twitter:image:alt"${addAttribute(description, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="min-h-screen grid grid-rows-[auto,1fr,auto] relative"> ${renderComponent($$result, "Image", $$Image, { "src": "/white-printing.jpg", "alt": "background-image", "width": 1024, "height": 1024 / 2, "class": "absolute top-0 left-0 w-full h-full object-cover opacity-5" })} ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const user = Astro2.cookies.get("userId");
  if (user) {
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Easy CSV." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-center items-left h-full max-lg:px-24 px-48 z-20 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto"> <h1 class="text-7xl max-md:text-5xl mt-16 text-slate-600">
Welcome to Easy<sapn class="text-orange-600 font-bold">CSV</sapn> </h1> <h3 class="text-5xl max-md:text-3xl text-slate-500 font-light">
A nice and clean app to visualize your csv files.
</h3> <div class="mt-8 max-md:flex-col max-md:items-start max-md:gap-y-8 flex items-center gap-x-8"> <a href="/signin" class="transition-all ease-in-out text-2xl text-white bg-orange-600 rounded-lg py-3 px-6 hover:bg-orange-500 duration-300">
Sign In
</a> <p class="text-slate-700 text-xl">
Don't have an account yet? <a href="/register" class="text-slate-800 font-bold underline">Register</a> </p> </div> </main> ` })}`;
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/index.astro", void 0);

const $$file$1 = "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function FileList({
  files
}) {
  const [headers, setHeaders] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [fileList, setFileList] = useState(files ?? []);
  const searchRef = useRef(null);
  const myModal = useRef(null);
  const params = useParams();
  const { fileName } = params;
  async function getData(fileName2) {
    const response = await fetch(
      `http://localhost:4321/api/content/${fileName2}`,
      {
        headers: {
          "Content-Type": "application/text"
        }
      }
    );
    const data = await response.json();
    setHeaders(data.headers);
    setFileData(data.data);
  }
  useEffect(() => {
    if (!fileName)
      return;
    getData(fileName);
  }, [fileList]);
  async function deleteFile(id) {
    const res = await fetch(`http://localhost:4321/api/delete/${id}`, {
      method: "DELETE"
    });
    const data = await res.json();
    const newFiles = files.filter((file) => file.id !== data.id);
    setFileList(newFiles);
  }
  function handleChange() {
    const value = searchRef.current?.value;
    const newFiles = files.filter(
      (file) => file?.name?.includes(value)
    );
    setFileList(newFiles);
  }
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[auto,1fr] w-full z-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "py-16 px-8 bg-gray-50 shadow-md shadow-slate-300 flex flex-col gap-y-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "text-center rounded-full w-8 h-8 bg-slate-600 flex items-center justify-center mx-auto pb-1 cursor-pointer",
          onClick: () => myModal.current?.showModal(),
          children: /* @__PURE__ */ jsx("p", { className: "text-3xl text-white", children: "+" })
        }
      ),
      /* @__PURE__ */ jsx("dialog", { id: "my_modal_1", className: "modal", ref: myModal, children: /* @__PURE__ */ jsxs("div", { className: "modal-box", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Upload file!!" }),
        /* @__PURE__ */ jsx("p", { className: "py-4", children: "Press ESC key or click the button below to close" }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            className: "flex items-center gap-x-6 max-md:flex-col max-md:gap-y-6 my-4",
            method: "POST",
            action: "/api/upload",
            encType: "multipart/form-data",
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  name: "file",
                  id: "file",
                  required: true,
                  className: "file-input file-input-bordered border-orange-600 file-input-[orange-600] w-full max-w-xs my-4"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "border border-slate-600 bg-transparent text-orange-600 py-2.5 px-4 rounded-md hover:bg-orange-600 hover:border-orange-600 hover:text-white",
                  children: "Upload"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "modal-action", children: /* @__PURE__ */ jsx("form", { method: "dialog", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-4", children: /* @__PURE__ */ jsx("button", { className: "btn", children: "Cancel" }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          ref: searchRef,
          placeholder: "Search...",
          autoComplete: "off",
          className: "py-2 px-3 border border-orange-600 rounded-md w-full max-w-xs",
          onChange: handleChange
        }
      ) }),
      fileList.map((file) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center justify-center gap-x-2",
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "text-orange-600 font-bold",
                onClick: () => getData(file?.name ?? ""),
                children: file.name
              }
            ),
            /* @__PURE__ */ jsx("button", { onClick: () => deleteFile(file.id) })
          ]
        },
        file.id
      ))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-scroll w-full", children: /* @__PURE__ */ jsxs("table", { className: "table w-full", children: [
      /* @__PURE__ */ jsx("thead", { className: "text-xl", children: /* @__PURE__ */ jsx("tr", { children: headers.map((header, index) => /* @__PURE__ */ jsx("th", { children: header }, index)) }) }),
      /* @__PURE__ */ jsx("tbody", { children: fileData.map((row, index) => /* @__PURE__ */ jsx("tr", { className: "hover", children: Object.values(row).map((data, index2) => /* @__PURE__ */ jsx("td", { children: data }, index2)) }, index)) })
    ] }) })
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = Astro2.cookies.get("userId");
  if (!user) {
    return Astro2.redirect("/");
  }
  const xata = new XataClient({ apiKey: "xau_WfkZUvKI3vQS4yMUNgqmZGuKNJJUawB16" });
  const files = await xata.db.files.filter({ "user.id": user.value }).getMany();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate`${files.length === 0 ? renderTemplate`${maybeRenderHead()}<div class="max-lg:px-24 px-48 z-20 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto flex flex-col gap-y-10 items-center justify-center"> <h1 class="text-center text-3xl text-slate-700">
It seems you didn't upload any files yet.${" "} <span class="text-orange-600">Let's start!!</span> </h1> <form class="flex items-center gap-x-6 max-md:flex-col max-md:gap-y-6" method="POST" action="/api/upload" enctype="multipart/form-data"> <input type="file" name="file" id="file" required class="file-input file-input-bordered border-orange-600 file-input-[orange-600] w-full max-w-xs"> <button type="submit" class="border border-slate-600 bg-transparent text-orange-600 py-2.5 px-4 rounded-md hover:bg-orange-600 hover:border-orange-600 hover:text-white">
Upload
</button> </form> </div>` : renderTemplate`${renderComponent($$result2, "FileList", FileList, { "client:load": true, "files": files, "client:component-hydration": "load", "client:component-path": "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/components/FileList", "client:component-export": "default" })}`}` })}`;
}, "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/dashboard/index.astro", void 0);
const $$file = "/Users/christopheanfry/anfrydev/xataHackathon/easy-csv/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as a, index$1 as i };
