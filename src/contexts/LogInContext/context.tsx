import { createContext } from "react";
import { Props, ContextType, CreateUser, SignInUser } from "./types";
import axios from "axios";
import Cookies from "js-cookie";

export const LogInContext = createContext<Partial<ContextType>>({});

const LogInProvider = ({ children }: Props) => {
  const createUser = async (userData: CreateUser) => {
    try {
      await axios.post("http://localhost:3000/api/v1/register", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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

      if (response.data && response.data.token) {
        Cookies.set("UserToken", response.data.token, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });
      }
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
