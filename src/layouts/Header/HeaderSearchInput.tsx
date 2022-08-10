import styled from "styled-components";

const HeaderSearchInput = ({ inputValue, onChangeSearch }) => {
  return (
    <StyledSearchInput onChange={(e) => onChangeSearch(e)} value={inputValue} autoFocus />
  );
};

const StyledSearchInput = styled.input.attrs({
  placeholder: "Search contents.."
})`
  width: 100%;
  font-size: 1.8rem;
  border: none;  
  &:focus{
    outline: none;
  }

  
`;

export default HeaderSearchInput;