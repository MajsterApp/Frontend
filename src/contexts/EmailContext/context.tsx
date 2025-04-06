import { createContext } from "react";
import { Props, ContextType, emailContent } from "./types";
import axios from "axios";

export const EmailContext = createContext<Partial<ContextType>>({});

const EmailProvider = ({ children }: Props) => {
  const sendEmail = async ({ email, emailHtml, subject }: emailContent) => {
    const emailData = { email, emailHtml, subject };

    try {
      await axios.post("http://localhost:3000/api/v1/sendEmail", emailData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error: any) {
      throw Error(
        error.response?.data?.message || `Error sending user: ${error}`
      );
    }
  };

  return (
    <EmailContext.Provider value={{ sendEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;
