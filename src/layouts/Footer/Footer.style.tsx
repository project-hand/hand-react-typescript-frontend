import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.div`
width: 100%;
height: 46px;
font-size: 1.6rem;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const StyledLinkWrapper = styled.div`
display: flex;
align-items: center;
width: 30%;
justify-content: space-around;
`;

const StyledTitle = styled.span`
font-weight: 400;
`;

const StyledNavLink = styled(NavLink)`
color: #15b1ff;
cursor: pointer;
&:visited{
  color: #15b1ff
}

&:hover{
  color: #525252;
}
`;

const StyledLink = styled.a`
color: #15b1ff;
cursor: pointer;
&:visited{
  color: #15b1ff
}

&:hover{
  color: #525252;
}
`;

export { StyledFooter, StyledLink, StyledNavLink, StyledLinkWrapper, StyledTitle };