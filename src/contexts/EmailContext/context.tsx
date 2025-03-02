import { createContext, useState } from "react";
import { Props, ContextType } from "./types";
import { Resend } from "resend";
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
        "http://localhost:3000/api/v1/verification",
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

  const sendEmail = async (emailHtml: string, email: string) => {
    try {
      const resend = new Resend(process.env.EMAIL_API_KEY);

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Welcome!",
        html: emailHtml,
      });

      console.log("Email sent successfully!");
    } catch (error: any) {
      throw Error(
        error.response?.data?.message ||
          `Error sending an verify email: ${error}`
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
