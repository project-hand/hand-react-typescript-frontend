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
  height: 76px;
  padding: 12px;
  background-color: white;
`;

export default Header;