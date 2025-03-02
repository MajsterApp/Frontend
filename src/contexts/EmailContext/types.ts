export interface ContextType {
  verifyEmail: () => Promise<void>;
  sendEmail: (emailHtml: string, email: string) => void;
  message: string;
}

export type OwnProps = { children: React.ReactNode };

export type Props = OwnProps;
