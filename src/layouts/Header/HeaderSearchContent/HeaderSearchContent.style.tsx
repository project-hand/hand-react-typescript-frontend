import styled, { keyframes } from "styled-components";

const showContents = keyframes`
  from{
    max-height: 0px;
  }
  to{
    max-height: 300px;
  }
`;

const StyledSearchContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  bottom: 0;
  transform: translateY(100%);
  width: 100%;
  overflow: scroll;
  z-index: 2;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: white;
  padding: 20px;
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-name: ${showContents};
  animation-fill-mode: forwards;
`;

export { StyledSearchContent };