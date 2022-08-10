import { useState } from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const [searchState, setSearchState] = useState(false);

  const onToggleSearch = () => {
    setSearchState(prev => !prev);
  };

  return (
    <StyledHeader>
      {searchState ?
        <HeaderSearch onToggleSearch={onToggleSearch} /> :
        <StyledHeaderMain>
          <HeaderLogo />
          <HeaderNav onToggleSearch={onToggleSearch} />
        </StyledHeaderMain>
      }
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

const StyledHeaderMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 100%;
`;

export default Header;