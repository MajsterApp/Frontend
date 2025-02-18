import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CreateAccountClient from "./components/CreateAccountClient";
import CreateAccountContractor from "./components/CreateAccountContractor";
import SignInClient from "./components/SignInClient";
import SignInContractor from "./components/SignInContractor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/create-account-client" element={<CreateAccountClient />} />
      <Route
        path="/create-account-contractor"
        element={<CreateAccountContractor />}
      />
      <Route path="/sign-in-client" element={<SignInClient />} />
      <Route path="/sign-in-contractor" element={<SignInContractor />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
