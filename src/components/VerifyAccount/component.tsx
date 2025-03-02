import "./style.scss";
import { useContext } from "react";
import { EmailContext } from "../../contexts/EmailContext/context";

const VerifyAccount = () => {
  const { message } = useContext(EmailContext);

  return (
    <main className="verify-account">
      <section>
        <h1>{message}</h1>
      </section>
    </main>
  );
};

export default VerifyAccount;
