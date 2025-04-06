import { createContext } from "react";
import { Props, ContextType } from "./types";
import axios from "axios";
import Cookies from "js-cookie";

export const ChangePasswordContext = createContext<Partial<ContextType>>({});

const ChangePasswordProvider = ({ children }: Props) => {
  const changePassword = async (password: string) => {
    try {
      const token = Cookies.get("UserToken");
      if (!token) return;

      await axios.post(
        "http://localhost:3000/api/v1/change-password",
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error: any) {
      throw Error(
        error.response?.data?.message || `Error sending user: ${error}`
      );
    }
  };
  return (
    <ChangePasswordContext.Provider value={{ changePassword }}>
      {children}
    </ChangePasswordContext.Provider>
  );
};

export default ChangePasswordProvider;
