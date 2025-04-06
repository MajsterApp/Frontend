import { createContext, useState } from "react";
import { Props, ContextType, UserData } from "./types";
import axios from "axios";
import Cookies from "js-cookie";

export const UserContext = createContext<Partial<ContextType>>({});

const UserProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [verifyMessage, setVerifyMessage] = useState<string>("");

  const getUserData = async () => {
    const token = Cookies.get("UserToken");
    if (!token) return;

    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/userData",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserData(response.data);
    } catch (error: any) {
      throw Error(
        error.response?.data?.message || `Error fetching user data: ${error}`
      );
    }
  };

  const verifyUser = async () => {
    try {
      const token = Cookies.get("UserToken");
      if (!token) return;

      const response = await axios.get(
        "http://localhost:3000/api/v1/verification",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setVerifyMessage(response.data.message);
    } catch (error: any) {
      throw Error(
        error.response?.data?.message ||
          `Error with user verification: ${error}`
      );
    }
  };

  const generateToken = async (email: string) => {
    try {
      const token = Cookies.get("UserToken");
      if (!token) return;

      const response = await axios.post("http://localhost:3000/api/v1/token", {
        email,
      });

      if (response.data && response.data.token) {
        Cookies.set("UserToken", response.data.token, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });
      }
    } catch (error: any) {
      throw Error(
        error.response?.data?.message || `Error with generating token: ${error}`
      );
    }
  };

  return (
    <UserContext.Provider
      value={{
        getUserData,
        userData,
        verifyUser,
        verifyMessage,
        generateToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
