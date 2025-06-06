import { useState, useContext } from "react";
import "./style.scss";
import { IoMdLock } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { LogInContext } from "../../contexts/LogInContext/context";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const { signIn } = useContext(LogInContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Pola nie mogą byc puste!", {
        position: "top-left",
        autoClose: 3000,
      });
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      signIn?.(userData);

      const token = Cookies.get("UserToken");

      if (token) {
        navigate("/home");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Błędny email lub hasło!", {
        position: "top-left",
        autoClose: 3000,
      });
    }
  };

  const changePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <main className="sign-in">
      <section>
        <article>
          <header>
            <h1>ZALOGUJ SIĘ</h1>
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
            <figure className="input-with-icon">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <IoMdLock className="icon left" />
              {isPasswordVisible ? (
                <IoMdEyeOff
                  className="icon eye"
                  onClick={changePasswordVisibility}
                />
              ) : (
                <IoMdEye
                  className="icon eye"
                  onClick={changePasswordVisibility}
                />
              )}
            </figure>
            <figure className="links">
              <NavLink className="link" to="/createaccount/select">
                Zarejestruj się
              </NavLink>
              <NavLink className="link" to="/forgotpassword/email">
                Nie pamiętam hasła
              </NavLink>
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

export default SignIn;
