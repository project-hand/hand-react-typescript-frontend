import styled from "styled-components";

const SearchList = ({ search }) => {
  return (
    <StyledSearchList>
      {search.result}
    </StyledSearchList>
  );
};

const StyledSearchList = styled.a`
  cursor: pointer;
  padding: 5px 5px 5px 20px;
  color: #4e4e4e;
  &:visited{
    color:#4e4e4e;
  }
  &:hover{
    color: #0aadfe;
    background-color: #f0f0f0da;
  }
`;

export default SearchList;