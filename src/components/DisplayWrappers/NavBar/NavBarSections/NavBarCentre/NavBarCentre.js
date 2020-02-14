import React, { useState } from "react";
import styled from "styled-components";

import SearchBar from "../../../../Primitive/NavBar/SearchBar";

import { useSearch } from "CustomHooks/useSearch";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: "Search",
  sp: "Búsqueda"
};

const Wrapper = ({ ...props }) => {
  const { updateSearchText, updateShouldSearch, searchBarText } = useSearch();

  const { language } = useLanguage();

  const submit = event => {
    window.log("Submitted search");
    event.preventDefault();
    updateShouldSearch(true);
  };

  return (
    <form onSubmit={event => submit(event)} {...props}>
      <SearchBar
        placeholder={language === "spanish" ? displayText.sp : displayText.en}
        type="text"
        value={searchBarText}
        onChange={event => updateSearchText(event.target.value)}
      />
    </form>
  );
};

const NavBarCentre = styled(Wrapper)`
  /* background-color: red; */
  height: 72px;
  flex-grow: 10;
  flex-shrink: 5;
  flex-basis: 33.33333%;
  margin-right: 15px;
  margin-left: 15px;
  /* flex-shrink: 2; */
  /* width: auto; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NavBarCentre;
