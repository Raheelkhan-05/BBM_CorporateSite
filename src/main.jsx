import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "lenis/dist/lenis.css";
import "./index.css";
import Root from "./Root.jsx";

const el = document.getElementById("root");
const app = (
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// Production build ships pre-rendered HTML -> hydrate it. In `npm run dev` the root is empty -> normal render.
if (el.firstElementChild) hydrateRoot(el, app);
else createRoot(el).render(app);