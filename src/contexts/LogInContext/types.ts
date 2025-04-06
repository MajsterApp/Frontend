export interface SignUp {
  name: string;
  surname: string;
  email: string;
  password: string;
  jobs?: string[];
  region?: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface ContextType {
  signUp: (userData: SignUp) => void;
  signIn: (userData: SignIn) => void;
}

export type OwnProps = { children: React.ReactNode };

export type Props = OwnProps;
