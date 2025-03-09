import { useContext, useEffect } from "react";
import { LogInContext } from "../../contexts/LogInContext/context.tsx";

const HomePage = () => {
  const { userData, getUserData } = useContext(LogInContext);

  useEffect(() => {
    if (!userData) {
      getUserData && getUserData();
    }
  }, []);

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <main>
      <h1>Welcome to the Homepage</h1>
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Surname:</strong> {userData.surname}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Region:</strong> {userData.region}
      </p>
      <p>
        <strong>Jobs:</strong> {userData.jobs?.join(", ")}
      </p>
      <p>
        <strong>Role:</strong> {userData.role}
      </p>
    </main>
  );
};

export default HomePage;
