import { StyledFooter, StyledLink, StyledLinkWrapper, StyledNavLink, StyledTitle } from "./Footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledTitle>
        © 2022 Have A Nice Day, All Rights Reserved.
      </StyledTitle>
      <StyledLinkWrapper>
        <StyledNavLink to="/terms">
          Terms
        </StyledNavLink>
        <StyledLink href="https://bustling-hosta-7bf.notion.site/HAND-aa13110e8a4044019ad60e856070e9fa" target={"_blank"}>
          Docs
        </StyledLink>
        <StyledLink href="https://github.com/project-hand" target={"_blank"}>
          Github
        </StyledLink>
        <StyledLink href="mailto:6539305@gmail.com">
          Mail
        </StyledLink>
        <StyledLink href="https://www.instagram.com/jungmannnnn/" target={"_blank"}>
          Instagram
        </StyledLink>
      </StyledLinkWrapper>
    </StyledFooter>
  );
};

export default Footer;