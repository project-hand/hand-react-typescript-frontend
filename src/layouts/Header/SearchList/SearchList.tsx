import { StyledSearchList } from "./SearchList.style";

const SearchList = ({ search }) => {
  return (
    <StyledSearchList>
      {search.result}
    </StyledSearchList>
  );
};

export default SearchList;