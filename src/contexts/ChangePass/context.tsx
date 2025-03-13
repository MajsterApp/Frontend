import { createContext } from "react";
import { Props, ContextType } from "./types";
import axios from "axios";
import Cookies from "js-cookie";

export const ChangePassContext = createContext<Partial<ContextType>>({});

const ChangePassProvider = ({ children }: Props) => {
  const sendEmail = async () => {
    try {
      const token = Cookies.get("UserToken");
      if (!token) return;

      await axios.get("https://majsterapp.onrender.com/api/v1/verification", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: any) {
      throw Error(
        error.response?.data?.message ||
          `Error with email verification: ${error}`
      );
    }
  };

  return (
    <ChangePassContext.Provider value={{ sendEmail }}>
      {children}
    </ChangePassContext.Provider>
  );
};

export default ChangePassProvider;
