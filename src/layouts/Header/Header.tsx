import { useState } from "react";
import { StyledHeader, StyledHeaderMain } from "./Header.style";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

const Header = () => {
  const [searchState, setSearchState] = useState(false);
  const [renderVisible, setRenderVisible] = useState(false);
  const [localVisible, setLocalVisible] = useState(true);

  const onToggleSearch = () => {
    setRenderVisible(true);
    setLocalVisible(prev => !prev);
    setTimeout(() => setSearchState(prev => !prev), 250);
  };

  return (
    <StyledHeader>
      {searchState ?
        <HeaderSearch onToggleSearch={onToggleSearch} visible={localVisible} /> :
        <StyledHeaderMain >
          <HeaderLogo visible={localVisible} render={renderVisible} />
          <HeaderNav visible={localVisible} render={renderVisible} onToggleSearch={onToggleSearch} />
        </StyledHeaderMain>
      }
    </StyledHeader>
  );
};

export default Header;