import { useState, useContext } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { LogInContext } from "../../contexts/LogInContext/context";
import Select from "react-select";

const CreateAccountContractor = () => {
  const { createUser } = useContext(LogInContext);

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [jobs, setJobs] = useState<{ value: string; label: string }[]>([]);
  const [region, setRegion] = useState<{ value: string; label: string } | null>(
    null
  );
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
      !jobs ||
      !region ||
      password != repeatPassword
    ) {
      alert("Fields are empty or passwords does not match.");
      return;
    }

    const userData = {
      name,
      surname,
      email,
      password,
      jobs: jobs.map((job) => job.value),
      region: region ? region.value : "",
    };

    try {
      createUser?.(userData);

      setName("");
      setSurname("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
      setJobs([]);
      setRegion(null);

      alert("Successfully created account.");
    } catch (error) {
      alert("There was a problem with account creation.");
      console.error(error);
    }
  };

  const changePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const changeRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible((prev) => !prev);
  };

  const jobOptions = [
    { value: "remonty", label: "Remonty" },
    { value: "instalacje", label: "Instalacje" },
  ];

  const cityOptions = [
    { value: "warszawa", label: "Warszawa" },
    { value: "krakow", label: "Kraków" },
    { value: "poznan", label: "Poznań" },
    { value: "lodz", label: "Łódź" },
    { value: "szczecin", label: "Szczecin" },
    { value: "wroclaw", label: "Wrocław" },
  ];

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      fontSize: "1rem",
      fontWeight: 400,
      color: "var(--grey-font)",
      height: "2rem",
      width: "15rem",
      border: "1.5px solid #260101",
      borderRadius: "5px",
      outline: "none",
      display: "flex",
      overflow: "hidden",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        border: "1.5px solid #260101",
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      height: "2rem",
      overflow: "hidden",
      display: "flex",
      flexWrap: "nowrap",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#260101",
      color: "white",
      borderRadius: "3px",
      fontSize: "0.9rem",
      padding: "0 5px",
      height: "1.5rem",
      display: "flex",
      alignItems: "center",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "white",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      width: "15rem",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#260101" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#d3d3d3",
      },
    }),
  };

  return (
    <main className="create-account-contractor">
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
            <figure className="services">
              <p>Wykonywane usługi:</p>
              <Select
                isMulti
                options={jobOptions}
                value={jobs}
                onChange={(selectedOptions) =>
                  setJobs(selectedOptions as { value: string; label: string }[])
                }
                styles={customStyles}
                placeholder="Wybierz usługi..."
              />
            </figure>
            <figure className="city">
              <p>Miasto: </p>
              <Select
                options={cityOptions}
                value={region}
                onChange={(selectedOptions) => setRegion(selectedOptions)}
                styles={customStyles}
                placeholder="Wybierz miasto..."
              />
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

export default CreateAccountContractor;
