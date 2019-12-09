import React from "react";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";

import NavBar from "./components/DisplayWrappers/NavBar/NavBar";
import Routes from "./Routes/Routes";

import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { clientConfig } from "./clientConfig";

import Amplify from "aws-amplify";
import awsMobile from "./aws-exports";

Amplify.configure(awsMobile);

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
