import SearchList from "../SearchList/SearchList";
import { StyledSearchContent } from "./HeaderSearchContent.style";

const HeaderSearchContent = ({ searchList }) => {
  return (
    <StyledSearchContent>
      {searchList.map((search, index) => {
        return (
          <SearchList key={index} search={search} />
        );
      })}
    </StyledSearchContent>
  );
};

export default HeaderSearchContent;