import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CreateAccountClient from "./components/CreateAccountClient";
import CreateAccountContractor from "./components/CreateAccountContractor";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import VerifyAccount from "./components/VerifyAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/createaccount/client" element={<CreateAccountClient />} />
      <Route
        path="/createaccount/contractor"
        element={<CreateAccountContractor />}
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="verifyaccount" element={<VerifyAccount />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
