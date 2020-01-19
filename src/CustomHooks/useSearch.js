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
      //MAKE THE input text lowercase when we have added the search property to the Subject
      //const inputText = inputtedText.toLowercase()
      const inputText = inputtedText;
      setSearchTerm(inputText);
    }
  };

  const updateShouldSearch = bool => {
    window.log(`new shouldSearch value: ${bool}`);
    setShouldSearch(bool);
  };

  const values = useMemo(
    () => ({
      updateSearchText,
      searchBarText,
      searchTerm,
      shouldSearch,
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
