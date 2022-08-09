import styled from "styled-components";
import Logo from "@/assets/images/hand-logo-56.png";

const HeaderLogo = () => {
  return (
    <StyledLogo>
      <img src={Logo} alt="Logo"></img>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HeaderLogo;