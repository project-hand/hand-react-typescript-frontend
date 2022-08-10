import { useState } from "react";
import HeaderSearchInput from "../HeaderSearchInput/HeaderSearchInput";
import HeaderSearchContent from "../HeaderSearchContent/HeaderSearchContent";
import { StyledSearchButton, StyledSearchClose, StyledSearchContainer } from "./HeaderSearch.style";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";

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
      <HeaderSearchContent searchList={searchList} />
    </StyledSearchContainer>
  );
};

export default HeaderSearch;