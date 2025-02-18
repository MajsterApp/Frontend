import { createContext } from "react";
import { Props, ContextType } from "./types";
import axios from "axios";

export const LoginContext = createContext<Partial<ContextType>>({});

const LoginProvider = ({ children }: Props) => {
  return <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>;
};

export default LoginProvider;
