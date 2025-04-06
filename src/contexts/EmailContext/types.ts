export interface emailContent {
  emailHtml: string;
  email: string;
  subject: string;
}

export interface ContextType {
  sendEmail: (emailContent: emailContent) => void;
}

export type OwnProps = { children: React.ReactNode };

export type Props = OwnProps;
