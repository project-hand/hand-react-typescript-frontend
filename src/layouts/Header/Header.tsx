import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";

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
        <StyledHeaderMain visible={localVisible} render={renderVisible}>
          <HeaderLogo />
          <HeaderNav onToggleSearch={onToggleSearch} />
        </StyledHeaderMain>
      }
    </StyledHeader>
  );
};

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

const StyledHeaderMain = styled.div<{ visible: boolean; render: boolean; }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 100%;

  animation-duration: 250ms;
  animation-timing-function: ease-out;
  
  ${props => props.render && props.visible && css`
    animation-name: ${fadeIn};
  `}

  ${props => !props.visible && css`
    animation-name: ${fadeOut};
  `}
  
`;

export default Header;