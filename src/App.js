import React from "react";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";

import { MetaTags } from "./components/Primitive/General/MetaTags";

import NavBar from "./components/DisplayWrappers/NavBar/NavBar";
import Routes from "./Routes/Routes";

import { ApolloProvider } from "react-apollo";
import { clientConfig } from "./clientConfig";

import { UserProvider } from "./CustomHooks/user";
import { SearchProvider } from "CustomHooks/useSearch";
import { LanguageProvider } from "CustomHooks/useLanguage";

const title = "Voz de Puerto Rico";
const description =
  "Voz de Puerto Rico is a tool created by Puerto Ricans that allows users to take action for the development of a better Puerto Rico. We provide the space giving voice to all communities in need in order to form leaders committed to being an entity of change.";

function App() {
  return (
    <ApolloProvider client={clientConfig}>
      <UserProvider>
        <BrowserRouter>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <SearchProvider>
              <LanguageProvider>
                <MetaTags
                  title={"Horse Poo"}
                  description={"A big bit of horse poo"}
                />
                <NavBar />
                <Routes />
              </LanguageProvider>
            </SearchProvider>
          </ThemeProvider>
        </BrowserRouter>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
