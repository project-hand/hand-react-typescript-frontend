import { StyledCalBox, StyledMemBox, StyledShortTitle, StyledTitle, StyledTodBox, ThemeBox } from "./MainTheme.style";

const MainTheme = () => {
  return (
    <ThemeBox>
      <StyledCalBox></StyledCalBox>
      <StyledMemBox></StyledMemBox>
      <StyledTodBox></StyledTodBox>
      <StyledTitle></StyledTitle>
      <StyledShortTitle></StyledShortTitle>
    </ThemeBox>
  );
};

export default MainTheme;