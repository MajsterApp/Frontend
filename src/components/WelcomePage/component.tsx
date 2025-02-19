import "./style.scss";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <main className="welcome-page">
      <article>
        <NavLink className="link" to="/createaccount/client">
          Create Account Client
        </NavLink>
        <NavLink className="link" to="/createaccount/contractor">
          Create Account Contractor
        </NavLink>
        <NavLink className="link" to="/signin">
          Sign In
        </NavLink>
      </article>
    </main>
  );
};

export default WelcomePage;
