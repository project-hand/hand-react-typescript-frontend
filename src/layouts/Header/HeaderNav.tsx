import { useLogout } from "@/utils/hooks";
import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { RiLogoutBoxRLine } from "@react-icons/all-files/ri/RiLogoutBoxRLine";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";
import { HeaderVisibleProps } from "@/types/headerStyle";

const HeaderNav = ({ onToggleSearch, visible, render }) => {
  const { logout } = useLogout();

  const onLogout = async () => {
    await logout();
  };

  return (
    <StyledHeaderNav>
      <StyledSearch visible={visible} render={render}>
        <BiSearchAlt2 onClick={onToggleSearch} />
      </StyledSearch>
      <StyledHome to="/" visible={visible} render={render}>
        <HiOutlineHome />
      </StyledHome>
      <StyledProfile to="/profile" visible={visible} render={render}>
        <FaRegUserCircle />
      </StyledProfile>
      <StyledLogOut visible={visible} render={render}>
        <RiLogoutBoxRLine onClick={() => onLogout()} />
      </StyledLogOut>
    </StyledHeaderNav>
  );
};


const slideIn = keyframes`
  from{
    transform: translateX(400px);
  }
  to{
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(400px);
  }
`;

const StyledHeaderNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

const StyledLink = styled(NavLink) <HeaderVisibleProps>`
  font-size: 2.5rem;
  color: #525252;
  &:visited{
    color: #525252;
  }

  &:hover{
    color: #000
  }
`;

const StyledNavItem = styled.button<HeaderVisibleProps>`
  font-size: 2.5rem;
  color: #525252;
  &:visited{
    color: #525252;
  }

  &:hover{
    color: #000
  }
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;  
  background-color: transparent;
`;

const StyledSearch = styled(StyledNavItem)`
  animation-timing-function: ease-out;
  ${props => props.render && props.visible && css`
    animation-duration: 350ms;
    animation-name: ${slideIn};
  `}
`;

const StyledHome = styled(StyledLink)`
  animation-timing-function: ease-out;
  ${props => props.render && props.visible && css`
    animation-duration: 450ms;
    animation-name: ${slideIn};
  `}

  ${props => !props.visible && css`
    animation-duration: 250ms;
    animation-name: ${slideOut};
  `}
`;

const StyledProfile = styled(StyledLink)`
  animation-timing-function: ease-out;
  ${props => props.render && props.visible && css`
    animation-duration: 550ms;
    animation-name: ${slideIn};
  `}

  ${props => !props.visible && css`
    animation-duration: 350ms;
    animation-name: ${slideOut};
  `}
`;

const StyledLogOut = styled(StyledNavItem)`
  animation-timing-function: ease-out;
  ${props => props.render && props.visible && css`
    animation-duration: 650ms;
    animation-name: ${slideIn};
  `}

  ${props => !props.visible && css`
    animation-duration: 450ms;
    animation-name: ${slideOut};
  `}
`;

export default HeaderNav;