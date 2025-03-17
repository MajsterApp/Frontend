import { createContext, useState } from "react";
import { Props, ContextType } from "./types";
import axios from "axios";
import Cookies from "js-cookie";

export const EmailContext = createContext<Partial<ContextType>>({});

const EmailProvider = ({ children }: Props) => {
  const [message, setMessage] = useState<string>("");

  const verifyEmail = async () => {
    try {
      const token = Cookies.get("UserToken");
      if (!token) return;

      const response = await axios.get(
        "https://majsterapp.onrender.com/api/v1/verification",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message);
    } catch (error: any) {
      throw Error(
        error.response?.data?.message ||
          `Error with email verification: ${error}`
      );
    }
  };

const sendEmail = async (emailHtml: string, email: string, subject: string) => {
    const emailData = {
        email,
        emailHtml,
        subject
    }
    console.log(emailData);
    try {
      await axios.post(
        "https://majsterapp.onrender.com/api/v1/sendEmail",
        emailData,
        {
          headers: {
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
    <EmailContext.Provider value={{ verifyEmail, sendEmail, message }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;
