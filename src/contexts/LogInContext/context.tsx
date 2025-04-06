import { createContext, useContext } from "react";
import { Props, ContextType, SignUp, SignIn } from "./types";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "../UserContext/context";

export const LogInContext = createContext<Partial<ContextType>>({});

const LogInProvider = ({ children }: Props) => {
  const { getUserData } = useContext(UserContext);

  const signUp = async (userData: SignUp) => {
    try {
      await axios.post("http://localhost:3000/api/v1/register", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error: any) {
      throw Error(
        error.response?.data?.message || `Error creating user: ${error}`
      );
    }
  };

  const signIn = async (userData: SignIn) => {
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

        getUserData?.();
      }
    } catch (error: any) {
      throw Error(
        error.response?.data?.message || `Error with sign in: ${error}`
      );
    }
  };

  return (
    <LogInContext.Provider value={{ signUp, signIn }}>
      {children}
    </LogInContext.Provider>
  );
};

export default LogInProvider;
