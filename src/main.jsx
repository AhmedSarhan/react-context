import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./providers/app-provider.jsx";
import { ErrorBoundary } from "./layouts/error-boundary.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        {/* <AppProvider> */}
        <App />
        {/* </AppProvider> */}
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
