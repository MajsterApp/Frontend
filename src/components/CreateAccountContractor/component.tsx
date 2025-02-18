import { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const CreateAccountContractor = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] =
    useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const changePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const changeRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible((prev) => !prev);
  };

  return (
    <main className="create-account-contractor">
      <section>
        <header>
          <h1>STWÓRZ KONTO</h1>
          <p>
            Masz już konto?{" "}
            <NavLink className="link" to="/sign-in">
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
          <figure className="services">
            <p>Wykonywane usługi:</p>
            <select>
              <option value="">Wybierz usługę</option>
              <option value="remonty">Remonty</option>
              <option value="instalacje">Instalacje</option>
            </select>
          </figure>
          <figure className="city">
            <p>Rejon działania</p>
            <figure>
              <p>Miasto: </p>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </figure>
          </figure>
          <button type="submit">Stwórz konto</button>
        </form>
      </section>
      <aside>
        <h1>MajsterApp</h1>
      </aside>
    </main>
  );
};

export default CreateAccountContractor;
