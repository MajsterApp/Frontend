import "./style.scss";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ForgotPassEmail = () => {
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/forgotpassword/newpassword");
  };

  return (
    <main className="forgot-pass-email">
      <section>
        <article>
          <header>
            <h1>ZRESETUJ HASŁO</h1>
          </header>
          <form onSubmit={handleSubmit}>
            <figure className="input-with-icon">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <IoMdMail className="icon left" />
            </figure>
            <button type="submit">Zaloguj się</button>
          </form>
        </article>
      </section>
      <aside>
        <h1>MajsterApp</h1>
      </aside>
    </main>
  );
};

export default ForgotPassEmail;
