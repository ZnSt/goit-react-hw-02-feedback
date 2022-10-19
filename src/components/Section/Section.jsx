import { Container } from "./Section.module";

export const Section = ({ title, children }) => {
  return (
    <Container>
      {title} {children}
    </Container>
  );
};
