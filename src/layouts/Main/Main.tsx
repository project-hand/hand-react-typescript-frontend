import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Section/Section";

const Main = () => {
  return (
    <StyledMainContainer>
      <Header />
      <Section>
        <Outlet />
      </Section>
      <Footer />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction:column;
`;

export default Main;