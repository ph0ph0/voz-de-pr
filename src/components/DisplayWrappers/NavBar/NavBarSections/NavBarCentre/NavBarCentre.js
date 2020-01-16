import React, { useState } from "react";
import styled from "styled-components";

import SearchBar from "../../../../Primitive/NavBar/SearchBar";

import { useSearch } from "CustomHooks/useSearch";

const Wrapper = ({ placeholder, ...props }) => {
  const { updateSearchText, updateShouldSearch, searchBarText } = useSearch();

  const submit = event => {
    window.log("Submitted search");
    event.preventDefault();
    updateShouldSearch(true);
  };

  return (
    <div {...props}>
      <form onSubmit={event => submit(event)}>
        <SearchBar
          placeholder={placeholder}
          type="text"
          value={searchBarText}
          onChange={event => updateSearchText(event.target.value)}
        />
      </form>
    </div>
  );
};

const NavBarCentre = styled(Wrapper)`
  /* background-color: red; */
  height: 72px;
  flex-grow: 10;
  flex-shrink: 5;
  flex-basis: 33.33333%;
  /* flex-shrink: 2; */
  /* width: 33.3333%; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NavBarCentre;
