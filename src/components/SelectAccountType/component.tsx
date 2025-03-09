import "./style.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SelectAccountType = () => {
  const [role, setRole] = useState<string>("");

  return (
    <main className="select-account-type">
      <section>
        <article>
          <header>
            <h1>STWÓRZ KONTO</h1>
            <p>Jesteś klientem czy wykonawcą?</p>
          </header>
          <form>
            <figure className="input-with-icon">
              <input
                type="radio"
                name="role"
                value="client"
                onChange={(e) => setRole(e.target.value)}
              />
              <p>Klient</p>
            </figure>
            <figure className="input-with-icon">
              <input
                type="radio"
                name="role"
                value="contractor"
                onChange={(e) => setRole(e.target.value)}
              />
              <p>Wykonawca</p>
            </figure>
            <NavLink
              className="link"
              to={`/createaccount/${role}`}
              onClick={(e) => {
                if (!role) e.preventDefault();
              }}
            >
              Stwórz konto
            </NavLink>
          </form>
        </article>
      </section>
      <aside>
        <h1>MajsterApp</h1>
      </aside>
    </main>
  );
};

export default SelectAccountType;
