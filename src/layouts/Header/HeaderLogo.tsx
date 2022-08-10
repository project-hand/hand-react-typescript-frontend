import styled from "styled-components";
import Logo from "@/assets/images/hand-logo-56.png";
import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <StyledLogo to="/">
      <StyledLogoImg src={Logo} alt="HAND Logo" />
      <StyledTitle>HAND</StyledTitle>
    </StyledLogo>
  );
};

const StyledLogo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  &:visited{
    color: black;
  }
`;

const StyledLogoImg = styled.img`
  width: 40px;
  height: auto;
`;

const StyledTitle = styled.span`
  font-size: 2.8rem;
  font-weight: 500;
`;

export default HeaderLogo;