import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import LogInProvider from "./contexts/LogInContext/context.tsx";
import EmailProvider from "./contexts/EmailContext/context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LogInProvider>
        <EmailProvider>
          <App />
        </EmailProvider>
      </LogInProvider>
    </BrowserRouter>
  </StrictMode>
);
