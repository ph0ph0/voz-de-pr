import React from "react";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";

import NavBar from "./components/DisplayWrappers/NavBar/NavBar";
import Routes from "./Routes/Routes";

import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { ApolloProvider } from "react-apollo";
import { clientConfig } from "./clientConfig";

function App() {
  return (
    <ApolloProvider client={clientConfig}>
      <ApolloHooksProvider client={clientConfig}>
        <BrowserRouter>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <NavBar />
            <Routes />
          </ThemeProvider>
        </BrowserRouter>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
