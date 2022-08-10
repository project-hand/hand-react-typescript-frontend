import Logo from "@/assets/images/hand-logo-56.png";
import { StyledLogo, StyledLogoImg, StyledTitle } from "./HeaderLogo.style";

const HeaderLogo = ({ visible, render }) => {
  return (
    <StyledLogo to="/">
      <StyledLogoImg src={Logo} alt="HAND Logo" visible={visible} render={render} />
      <StyledTitle visible={visible} render={render}>HAND</StyledTitle>
    </StyledLogo>
  );
};


export default HeaderLogo;