export interface UserData {
  email: string;
  name: string;
  surname: string;
  region?: string;
  jobs?: string[];
  role: string;
}

export interface ContextType {
  getUserData: () => Promise<void>;
  userData: UserData | null;
  verifyUser: () => Promise<void>;
  verifyMessage: string;
  generateToken: (email: string) => Promise<void>;
}

export type OwnProps = { children: React.ReactNode };

export type Props = OwnProps;
