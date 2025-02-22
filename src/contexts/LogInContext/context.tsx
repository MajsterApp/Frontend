import { createContext, useState } from "react";
import { Props, ContextType, CreateUser, SignInUser, UserData } from "./types";
import axios from "axios";
import Cookies from "js-cookie";

export const LogInContext = createContext<Partial<ContextType>>({});

const LogInProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const createUser = async (userData: CreateUser) => {
    try {
      await axios.post("https://majsterapp.onrender.com/api/v1/register", userData, {
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
        "https://majsterapp.onrender.com/api/v1/login",
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
      console.error(error);
    }
  };

 const getUserData = async () => {
  const token = Cookies.get("UserToken");
  if (!token) return;

  try {
    const response = await fetch("https://majsterapp.onrender.com/api/v1/userData", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("User data received:", data); // Debugging

    if (data) {
      setUserData(data); // Ensure state updates
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

return (
    <LogInContext.Provider value={{ createUser, signInUser, getUserData, userData }}>
      {children}
    </LogInContext.Provider>
  );
};

export default LogInProvider;

