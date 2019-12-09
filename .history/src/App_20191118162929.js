import React, { Fragment } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsMobile from "./aws-exports";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";

import NavBar from "./components/DisplayWrappers/NavBar/NavBar";
import Routes from "./Routes/Routes";

import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import clientConfig from "./clientConfig";

Amplify.configure({
  Auth: {
    region: awsMobile.aws_appsync_region,
    userPoolId: awsMobile.aws_user_pools_id,
    identityPoolId: awsMobile.aws_cognito_identity_pool_id,
    userPoolWebClientId: awsMobile.aws_user_pools_web_client_id
  }
});

function App() {
  return (
    <ApolloHooksProvider>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <NavBar />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloHooksProvider>
  );
}

export default App;
