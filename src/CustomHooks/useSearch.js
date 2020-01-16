import React, { useState, useEffect, useMemo, useContext } from "react";

export const SearchContext = React.createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchBarText, setSearchBarText] = useState("");
  const [searchTerm, setSearchTerm] = useState(null);
  const [shouldSearch, setShouldSearch] = useState(false);

  const updateSearchText = inputtedText => {
    window.log(`Updating search text: ${inputtedText}`);
    setSearchBarText(inputtedText);
    if (inputtedText === "") {
      window.log(
        "inputted text by user was empty, setting search term to null"
      );
      setSearchTerm(null);
    } else {
      // if (!shouldSearch) {
      //   window.log(
      //     `shouldSearch was false in updateSearchText, aborting: ${shouldSearch}`
      //   );
      //   return;
      // }
      const inputText = inputtedText.toLowerCase();
      setSearchTerm(inputText);
    }
  };

  const updateShouldSearch = bool => {
    window.log(`new shouldSearch value: ${bool}`);
    if (!searchBarText) {
      window.log(`No search bar text, aborting: ${searchBarText}`);
      setShouldSearch(false);
      return;
    }
    setShouldSearch(bool);
  };

  const values = useMemo(
    () => ({
      searchBarText,
      searchTerm,
      shouldSearch,
      updateSearchText,
      updateShouldSearch
    }),
    [shouldSearch, searchBarText, searchTerm]
  );

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
