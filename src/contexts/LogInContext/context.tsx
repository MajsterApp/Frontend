import { createContext } from "react";
import { Props, ContextType, CreateUser, SignInUser } from "./types";
import axios from "axios";

export const LogInContext = createContext<Partial<ContextType>>({});

const LogInProvider = ({ children }: Props) => {
  const createUser = async (userData: CreateUser) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
    }
  };

  const signInUser = async (userData: SignInUser) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <LogInContext.Provider value={{ createUser, signInUser }}>
      {children}
    </LogInContext.Provider>
  );
};

export default LogInProvider;
