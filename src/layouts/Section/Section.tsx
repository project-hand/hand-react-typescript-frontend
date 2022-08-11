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
`;

export default Section;