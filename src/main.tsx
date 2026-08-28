import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { captureUtmParams } from "./lib/analytics";
import { hasAnalyticsConsent, subscribeToConsent } from "./lib/consent";

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
