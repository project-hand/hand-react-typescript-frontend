import styled from "styled-components";

const Section = ({ children }) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Section;