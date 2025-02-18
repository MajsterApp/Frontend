import "./style.scss";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <main className="welcome-page">
      <article>
        <NavLink className="link" to="/create-account-client">
          Create Account Client
        </NavLink>
        <NavLink className="link" to="/create-account-contractor">
          Create Account Contractor
        </NavLink>
        <NavLink className="link" to="/sign-in">
          Sign In
        </NavLink>
      </article>
    </main>
  );
};

export default WelcomePage;
