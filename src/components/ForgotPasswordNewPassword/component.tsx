import "./style.scss";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { useContext, useState } from "react";
import { ChangePasswordContext } from "../../contexts/ChangePassword/context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassNewPass = () => {
  const { changePassword } = useContext(ChangePasswordContext);

  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !repeatPassword) {
      toast.error("Pola nie mogą byc puste!", {
        position: "top-left",
        autoClose: 3000,
      });
      return;
    }

    if (password != repeatPassword) {
      toast.error("Hasła muszą się zgadzać!", {
        position: "top-left",
        autoClose: 3000,
      });
      return;
    }

    if (!validatePassword(password)) {
      return;
    }

    try {
      await changePassword?.(password);

      setPassword("");
      setRepeatPassword("");

      toast.success("Pomyślnie zmieniono hasło!", {
        position: "top-left",
        autoClose: 3000,
      });

      navigate("/signin");
    } catch (error) {
      toast.error("Wystąpił problem przy zmianie hasła!", {
        position: "top-left",
        autoClose: 3000,
      });
    }
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Hasło musi zawierać co najmniej 8 znaków, wielką literę, cyfrę i znak specjalny!",
        {
          position: "top-left",
          autoClose: 3000,
        }
      );
      return false;
    }

    return true;
  };

  const changePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const changeRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible((prev) => !prev);
  };

  return (
    <main className="forgot-pass-new-pass">
      <section>
        <article>
          <header>
            <h1>UTWÓRZ NOWE HASŁO</h1>
          </header>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Utwórz nowe hasło</button>
          </form>
        </article>
      </section>
      <aside>
        <h1>MajsterApp</h1>
      </aside>
    </main>
  );
};

export default ForgotPassNewPass;
