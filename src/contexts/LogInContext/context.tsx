import { createContext, useState } from "react";
import { Props, ContextType, CreateUser, SignInUser, UserData } from "./types";
import axios from "axios";
import Cookies from "js-cookie";

export const LogInContext = createContext<Partial<ContextType>>({});

const LogInProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const createUser = async (userData: CreateUser) => {
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

        getUserData();
      }
    } catch (error: any) {
      throw Error(
        error.response?.data?.message || `Error with sign in: ${error}`
      );
    }
  };

  const getUserData = async () => {
    const token = Cookies.get("UserToken");
    if (!token) return;

    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/userData",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.data;

      if (data) {
        setUserData(data);
      }
    } catch (error: any) {
      throw Error(
        error.response?.data?.message || `Error fetching user data: ${error}`
      );
    }
  };

  return (
    <LogInContext.Provider
      value={{ createUser, signInUser, getUserData, userData }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export default LogInProvider;
