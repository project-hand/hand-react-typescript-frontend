import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Section/Section";

const Main = ({ children }) => {
  return (
    <StyledMainContainer>
      <Header />
      <Section>
        {children}
      </Section>
      <Footer />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export default Main;