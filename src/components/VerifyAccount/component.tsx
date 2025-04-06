import "./style.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/context";

const VerifyAccount = () => {
  const { verifyMessage } = useContext(UserContext);

  return (
    <main className="verify-account">
      <section>
        <h1>{verifyMessage}</h1>
      </section>
    </main>
  );
};

export default VerifyAccount;
