import "./style.scss";
import { useContext, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { EmailContext } from "../context/EmailContext";

const ForgotPassEmail = () => {
  const { getToken, sendEmail } = useContext(EmailContext);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const token = await getToken(email);

      if (token && sendEmail) {
        await sendEmail( email, "Prośba o zmiane hasła");
      }
    } catch (error) {
      console.error("Error during email and token request", error);
    }
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

