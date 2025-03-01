import { Resend } from "resend";
import { render } from "@react-email/render";
import VerifyEmail from "../../emails/VerifyEmail.tsx";

const resend = new Resend("your-api-key");

async function sendEmail() {
  const emailHtml = render(<VerifyEmail />);

  await resend.emails.send({
    from: "majsterApp@gmail.com",
    to: email,
    subject: "Welcome!",
    html: emailHtml,
  });
j
  console.log("Email sent successfully!");
}

sendEmail().catch(console.error);

