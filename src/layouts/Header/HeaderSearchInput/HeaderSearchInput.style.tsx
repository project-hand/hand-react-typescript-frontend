import styled from "styled-components";

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

export { StyledSearchInput };