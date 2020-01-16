import React, { useState, useEffect, useMemo, useContext } from "react";

export const SearchContext = React.createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchBarText, setSearchBarText] = useState("");
  const [searchTerm, setSearchTerm] = useState(null);
  const [shouldSearch, setShouldSearch] = useState(false);

  const updateSearchText = searchText => {
    window.log(`Updating search text: ${searchText}`);
    setSearchBarText(searchText);
    if (searchText === "") {
      setSearchTerm(null);
    } else {
      if (!shouldSearch) return;
      const inputText = searchText.toLowerCase();
      setSearchTerm(inputText);
    }
  };

  const updateShouldSearch = bool => {
    window.log(`new shouldSearch value: ${bool}`);
    setShouldSearch(bool);
  };

  const values = {
    searchBarText,
    searchTerm,
    shouldSearch,
    updateSearchText,
    updateShouldSearch
  };

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error(
      "useSearch hook must be used within a SearchProvider component"
    );
  }

  return context;
};
