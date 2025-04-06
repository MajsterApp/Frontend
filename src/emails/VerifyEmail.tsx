import { Html, Head, Body, Container, Text } from "@react-email/components";

export default function VerifyEmail() {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Text>Dziękujemy za rejestrację w MajsterApp!</Text>
        </Container>
      </Body>
    </Html>
  );
}
