import "./style.scss";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <main className="welcome-page">
      <article>
        <NavLink className="link" to="/signin">
          Zaloguj się
        </NavLink>
      </article>
    </main>
  );
};

export default WelcomePage;
