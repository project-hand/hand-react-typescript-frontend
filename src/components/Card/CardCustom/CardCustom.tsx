import styled from "styled-components";
import { FcApprove } from "@react-icons/all-files/fc/FcApprove";

const CardCustom = () => {
  return (
    <StyledCardContainer>
      <StyledCalLogo />
      <StyledCardTitle>Custom</StyledCardTitle>
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

const StyledCalLogo = styled(FcApprove)`
  font-size: 15rem;
`;

const StyledCardTitle = styled.div`
  font-size: 3rem;
`;

export default CardCustom;