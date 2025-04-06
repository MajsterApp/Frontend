import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import LogInProvider from "./contexts/LogInContext/context.tsx";
import EmailProvider from "./contexts/EmailContext/context.tsx";
import UserProvider from "./contexts/UserContext/context.tsx";
import ChangePasswordProvider from "./contexts/ChangePassword/context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LogInProvider>
        <EmailProvider>
          <UserProvider>
            <ChangePasswordProvider>
              <App />
            </ChangePasswordProvider>
          </UserProvider>
        </EmailProvider>
      </LogInProvider>
    </BrowserRouter>
  </StrictMode>
);
