export interface ContextType {
  changePassword: (password: string) => void;
}

export type OwnProps = { children: React.ReactNode };

export type Props = OwnProps;
