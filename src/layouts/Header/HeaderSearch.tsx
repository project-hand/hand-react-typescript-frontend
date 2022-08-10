import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import styled, { keyframes } from "styled-components";
import HeaderSearchInput from "./HeaderSearchInput";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";

const HeaderSearch = ({ onToggleSearch }) => {
  return (
    <StyledSearchContainer>
      <StyledSearchButton>
        <BiSearchAlt2 />
      </StyledSearchButton>
      <HeaderSearchInput />
      <StyledSearchClose>
        <AiOutlineClose onClick={onToggleSearch} />
      </StyledSearchClose>
    </StyledSearchContainer>
  );
};

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const StyledSearchContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation-duration: 250ms;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const StyledSearchClose = styled.button`
  font-size: 2rem;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;  
  background-color: transparent;
  color: #525252;
  &:hover{
    color: #000
  }
`;

const StyledSearchButton = styled.button`
  font-size: 2rem;
  color: #525252;
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
`;

export default HeaderSearch;