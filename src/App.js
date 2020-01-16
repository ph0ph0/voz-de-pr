import React from "react";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";

import NavBar from "./components/DisplayWrappers/NavBar/NavBar";
import Routes from "./Routes/Routes";

import { ApolloProvider } from "react-apollo";
import { clientConfig } from "./clientConfig";

import { UserProvider } from "./CustomHooks/user";
import { SearchProvider } from "CustomHooks/useSearch";

function App() {
  return (
    <ApolloProvider client={clientConfig}>
      <UserProvider>
        <BrowserRouter>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <SearchProvider>
              <NavBar />
              <Routes />
            </SearchProvider>
          </ThemeProvider>
        </BrowserRouter>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
