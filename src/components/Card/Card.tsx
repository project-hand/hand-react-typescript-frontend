import styled from "styled-components";

const Card = ({ children, handleMode }) => {
  return (
    <StyledCardContainer onClick={handleMode}>
      {children}
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.div`
  width: 275px;
  height: 350px;
  background-color: #eee;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: scale(1.1, 1.1);
  }
  `;

export default Card;