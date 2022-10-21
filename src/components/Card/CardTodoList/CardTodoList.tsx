import styled from "styled-components";
import { FcTodoList } from "@react-icons/all-files/fc/FcTodoList";

const CardTodoList = () => {
  return (
    <StyledCardContainer>
      <StyledCalLogo />
      <StyledCardTitle>Todo-List</StyledCardTitle>
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

const StyledCalLogo = styled(FcTodoList)`
  font-size: 15rem;
`;

const StyledCardTitle = styled.div`
  font-size: 3rem;
`;

export default CardTodoList;