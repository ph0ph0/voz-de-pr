import styled from "styled-components";

const SearchBar = styled.input`
  height: 40px;
  width: 100%;

  padding-left: 20px;
  /* margin-right: 10px; */

  border: 1px solid #f6f7f8;
  border-radius: 2px;
  background-color: #f6f7f8;

  font-size: 14px;

  :focus {
    outline: 0;
  }
`;

export default SearchBar;
