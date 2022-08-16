import styled from "styled-components";
import { FcIdea } from "@react-icons/all-files/fc/FcIdea";

const CardMemo = () => {
  return (
    <StyledCardContainer>
      <StyledCalLogo />
      <StyledCardTitle>Memo</StyledCardTitle>
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

const StyledCalLogo = styled(FcIdea)`
  font-size: 15rem;
`;

const StyledCardTitle = styled.div`
  font-size: 3rem;
`;

export default CardMemo;