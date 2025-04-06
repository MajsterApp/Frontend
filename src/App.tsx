import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CreateAccountClient from "./components/CreateAccountClient";
import CreateAccountContractor from "./components/CreateAccountContractor";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import VerifyAccount from "./components/VerifyAccount";
import SelectAccountType from "./components/SelectAccountType";
import ForgotPasswordEmail from "./components/ForgotPasswordEmail";
import ForgotPasswordNewPassword from "./components/ForgotPasswordNewPassword";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/createaccount/client" element={<CreateAccountClient />} />
        <Route
          path="/createaccount/contractor"
          element={<CreateAccountContractor />}
        />
        <Route path="/createaccount/select" element={<SelectAccountType />} />
        <Route path="/forgotpassword/email" element={<ForgotPasswordEmail />} />
        <Route
          path="/forgotpassword/newpassword"
          element={<ForgotPasswordNewPassword />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verifyaccount" element={<VerifyAccount />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
