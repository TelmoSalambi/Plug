import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./App";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const basename = basePath || "/";
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento #root não encontrado.");
}

// Preserve bookmarks created by the former HashRouter routes.
let canHydrate = rootElement.hasChildNodes();
if (window.location.hash.startsWith("#/")) {
  window.history.replaceState(null, "", `${basePath}${window.location.hash.slice(1)}`);
  // The old hash URL serves the home HTML shell, so let the router render its new route.
  canHydrate = false;
}

const app = (
  <StrictMode>
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

if (canHydrate) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
