import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import styled, { css, keyframes } from "styled-components";
import HeaderSearchInput from "./HeaderSearchInput";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";
import { useState } from "react";
import HearderSearchContent from "./HearderSearchContent";

const defaultSearchList = [
  {
    result: '일정 제목으로 검색'
  },
  {
    result: '메모 내용으로 검색'
  },
  {
    result: '할일 이름으로 검색'
  },
];

const HeaderSearch = ({ onToggleSearch, visible }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState(defaultSearchList);


  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchValue);
  };

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <StyledSearchContainer onSubmit={(e) => onHandleSubmit(e)} visible={visible}>
      <StyledSearchButton>
        <BiSearchAlt2 />
      </StyledSearchButton>
      <HeaderSearchInput onChangeSearch={onChangeSearch} inputValue={searchValue} />
      <StyledSearchClose>
        <AiOutlineClose onClick={onToggleSearch} />
      </StyledSearchClose>
      <HearderSearchContent searchList={searchList} />
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

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;

const StyledSearchContainer = styled.form<{ visible: boolean; }>`
  position: relative;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation-duration: 250ms;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props => props.visible && css`
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    animation-name: ${fadeOut};
  `}
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