import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Card = ({ children, to }) => {
  return (
    <StyledCardContainer to={to} >
      {children}
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled(NavLink)`
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

  &:visited{
    color:black;
  }
  `;

export default Card;