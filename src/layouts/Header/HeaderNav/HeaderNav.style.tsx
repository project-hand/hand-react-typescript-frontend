import { HeaderVisibleProps } from "@/types/headerStyle";
import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

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

const StyledHome = styled(StyledNavItem)`
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

export { StyledHeaderNav, StyledHome, StyledLogOut, StyledProfile, StyledSearch };