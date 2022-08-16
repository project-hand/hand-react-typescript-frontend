import styled from "styled-components";
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";

const CardCalendar = () => {
  return (
    <StyledCardContainer>
      <StyledCalLogo />
      <StyledCardTitle>Calendar</StyledCardTitle>
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const StyledCalLogo = styled(FcCalendar)`
  font-size: 15rem;
`;

const StyledCardTitle = styled.div`
  font-size: 3rem;
`;

const StyledSubTitle = styled.span`
  
`;

export default CardCalendar;