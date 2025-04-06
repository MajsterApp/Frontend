import "./style.scss";
import { useContext, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/context";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const ForgotPassEmail = () => {
  const { verifyUser, generateToken } = useContext(UserContext);

  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Pola nie mogą byc puste!", {
        position: "top-left",
        autoClose: 3000,
      });
      return;
    }

    try {
      await verifyUser?.();

      await generateToken?.(email);

      const token = Cookies.get("UserToken");

      if (token) {
        navigate("/forgotpassword/newpassword");
      }
    } catch (error) {
      toast.error("Wystąpił problem przy zmianie hasła!", {
        position: "top-left",
        autoClose: 3000,
      });
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
