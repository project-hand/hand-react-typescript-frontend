import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

const StyledHeaderMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 100%;
`;

export { StyledHeader, StyledHeaderMain };