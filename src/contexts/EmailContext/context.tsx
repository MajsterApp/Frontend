import { createContext, useState } from "react";
import { Props, ContextType } from "./types";
import axios from "axios";
import Cookies from "js-cookie";
import VerifyEmail from "../../emails/VerifyEmail";
import { render } from "@react-email/render";

export const EmailContext = createContext<Partial<ContextType>>({});

const EmailProvider = ({ children }: Props) => {
  const [message, setMessage] = useState<string>("");
    const [link, setLink] = useState<string>("");
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
      console.error("Email verification error:", error);
      setMessage(error.response?.data?.message || "Verification failed.");
    }
  };

  const sendEmail = async ( email: string, subject: string) => {

      try
    {
        const emailHtml = render(<VerifyEmail/>)

      const response = await axios.post(
        "https://majsterapp.onrender.com/api/v1/sendEmail",
        {
          email,
          subject: subject,
          html: emailHtml,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setMessage(response.data.message);
    } catch (error: any) {
      console.error("Email sending error:", error);
      setMessage(error.response?.data?.message || "Email sending failed.");
    }
  };

const getToken = async (email: string) => {
  try {
    const response = await axios.post(
      "https://majsterapp.onrender.com/api/v1/token",
      { email },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const token = response.data.token;

    const link = `http://majsterapp.netlify.app/forgotpassword/newpassword?token=${token}`;

    setLink(link);

    setMessage("Token received successfully.");

    return token;
  } catch (error: any) {
    console.error("Token request error:", error);
    setMessage(error.response?.data?.message || "Token request failed.");
  }
};

  return (
    <EmailContext.Provider value={{ verifyEmail, sendEmail, getToken, message, link }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;

