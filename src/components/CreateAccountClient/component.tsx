import { useState, useContext } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { LogInContext } from "../../contexts/LogInContext/context";

const CreateAccountClient = () => {
  const { createUser } = useContext(LogInContext);

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] =
    useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name ||
      !surname ||
      !email ||
      !password ||
      !repeatPassword ||
      password != repeatPassword
    ) {
      alert("Fields are empty or passwords does not match.");
      return;
    }

    const isStrongPassword = (password: string) => password.length >= 8;

    if (!isStrongPassword(password)) {
      alert("Hasło musi mieć co najmniej 8 znaków.");
      return;
    }

    const userData = {
      name,
      surname,
      email,
      password,
    };

    try {
      createUser?.(userData);

      setName("");
      setSurname("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const changePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const changeRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible((prev) => !prev);
  };

  return (
    <main className="create-account-client">
      <section>
        <article>
          <header>
            <h1>STWÓRZ KONTO</h1>
            <p>
              Masz już konto?{" "}
              <NavLink className="link" to="/signin">
                Zaloguj się
              </NavLink>
            </p>
          </header>
          <form onSubmit={handleSubmit}>
            <figure className="full-name">
              <input
                type="text"
                placeholder="Imię"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nazwisko"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </figure>
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
            <figure className="input-with-icon">
              <input
                type={isRepeatPasswordVisible ? "text" : "password"}
                placeholder="Powtórz hasło"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <IoMdLock className="icon left" />
              {isRepeatPasswordVisible ? (
                <IoMdEyeOff
                  className="icon eye"
                  onClick={changeRepeatPasswordVisibility}
                />
              ) : (
                <IoMdEye
                  className="icon eye"
                  onClick={changeRepeatPasswordVisibility}
                />
              )}
            </figure>
            <button type="submit">Stwórz konto</button>
          </form>
        </article>
      </section>
      <aside>
        <h1>MajsterApp</h1>
      </aside>
    </main>
  );
};

export default CreateAccountClient;
