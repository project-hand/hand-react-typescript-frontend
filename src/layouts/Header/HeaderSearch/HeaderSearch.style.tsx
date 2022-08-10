import { SearchVisibleProps } from "@/types/headerStyle";
import styled, { css, keyframes } from "styled-components";

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

const StyledSearchContainer = styled.form<SearchVisibleProps>`
  position: relative;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation-duration: 250ms;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props => props.visible && css`
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    animation-name: ${fadeOut};
  `}
`;

const StyledSearchClose = styled.button`
  font-size: 2rem;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;  
  background-color: transparent;
  color: #525252;
  &:hover{
    color: #000
  }
`;

const StyledSearchButton = styled.button`
  font-size: 2rem;
  color: #525252;
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
`;

export { StyledSearchButton, StyledSearchClose, StyledSearchContainer };