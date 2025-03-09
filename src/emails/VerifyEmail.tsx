import { Html, Head, Body, Container, Text, Button } from "@react-email/components";
import { useContext } from 'react';
import { EmailContext } from "../contexts/EmailContext/context.tsx";

export default function VerifyEmail() {
  const { link } = useContext(EmailContext);

  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', maxWidth: '600px', margin: '0 auto' }}>
          <Text style={{ fontSize: '18px', color: '#333' }}>Witaj,</Text>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            Dziękujemy za zapisanie się do naszej usługi! Aby zweryfikować swój adres e-mail, kliknij poniższy przycisk.
          </Text>

          <Button
            href={link}
            style={{
              backgroundColor: '#4CAF50',
              color: '#ffffff',
              padding: '12px 20px',
              fontSize: '16px',
              textDecoration: 'none',
              borderRadius: '4px',
              display: 'inline-block',
              marginTop: '20px',
            }}
          >
            Zweryfikuj swój e-mail
          </Button>

          <Text style={{ fontSize: '14px', color: '#777', marginTop: '20px' }}>
            Jeśli nie oczekiwałeś tego e-maila, zignoruj tę wiadomość.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

