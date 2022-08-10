import { HeaderVisibleProps } from "@/types/headerStyle";
import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
from{
  transform: translateX(-400px);
}
to{
  transform: translateX(0);
}
`;

const fadeOut = keyframes`
from{
  transform: translateX(0);
}
to{
  transform: translateX(-400px);
}
`;

const StyledLogo = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;

&:visited{
  color: black;
}
`;

const StyledLogoImg = styled.img<HeaderVisibleProps>`
width: 36px;
height: auto;
animation-timing-function: ease-out;
${props => props.render && props.visible && css`
  animation-duration: 650ms;
  animation-name: ${fadeIn};
`}

${props => !props.visible && css`
  animation-duration: 450ms;
  animation-name: ${fadeOut};
`}
`;

const StyledTitle = styled.span<HeaderVisibleProps>`
font-size: 2.6rem;
font-weight: 500;
animation-timing-function: ease-out;

${props => props.render && props.visible && css`
  animation-duration: 450ms;
  animation-name: ${fadeIn};
`}

${props => !props.visible && css`
  animation-duration: 650ms;
  animation-name: ${fadeOut};
`}
`;

export { StyledLogo, StyledLogoImg, StyledTitle };