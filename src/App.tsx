import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CreateAccountClient from "./components/CreateAccountClient";
import CreateAccountContractor from "./components/CreateAccountContractor";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/create-account-client" element={<CreateAccountClient />} />
      <Route
        path="/create-account-contractor"
        element={<CreateAccountContractor />}
      />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
