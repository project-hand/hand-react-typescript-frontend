import { StyledSearchInput } from "./HeaderSearchInput.style";

const HeaderSearchInput = ({ inputValue, onChangeSearch }) => {
  return (
    <StyledSearchInput onChange={(e) => onChangeSearch(e)} value={inputValue} autoFocus />
  );
};

export default HeaderSearchInput;