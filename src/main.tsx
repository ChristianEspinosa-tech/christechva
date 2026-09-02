import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { captureUtmParams } from "./lib/analytics";
import { hasAnalyticsConsent, subscribeToConsent } from "./lib/consent";

// This handles the GitHub Pages 404 redirect (the ?/ path)
if (window.location.search.startsWith('?/')) {
  const cleanPath = window.location.search.slice(1) + window.location.hash;
  // Keep the basename! We build the path including the base URL.
const fullPath = import.meta.env.BASE_URL.replace(/\/$/, '') + cleanPath;
  window.history.replaceState(null, '', fullPath);
}
// ---------------------------

// Attribution is only stored once the visitor has accepted cookies.
if (hasAnalyticsConsent()) {
  captureUtmParams();
} else {
  subscribeToConsent((status) => {
    if (status === "granted") captureUtmParams();
  });
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
