export interface CreateUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  jobs?: string[];
  region?: string;
}

export interface SignInUser {
  email: string;
  password: string;
}

export interface UserData {
  email: string;
  name: string;
  surname: string;
  region?: string;
  jobs?: string[];
  role: string;
}

export interface ContextType {
  createUser: (userData: CreateUser) => void;
  signInUser: (userData: SignInUser) => void;
  getUserData: () => Promise<void>;
  userData: UserData | null;
}

export type OwnProps = { children: React.ReactNode };

export type Props = OwnProps;

