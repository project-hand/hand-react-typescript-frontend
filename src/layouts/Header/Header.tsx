import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <HeaderNav />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 86px;
  padding: 0 50px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

export default Header;