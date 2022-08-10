import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Section/Section";

const Main = () => {
  useEffect(() => {
    console.log('side effect main');

  }, []);
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
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export default Main;