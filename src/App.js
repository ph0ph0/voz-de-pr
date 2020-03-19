import React from "react";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";

import { MetaTags } from "./components/Primitive/General/MetaTags";
import { Helmet } from "react-helmet";

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

const MasterHeader = () => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.vozdepuertorico.com" />
      <link
        rel="shortcut icon"
        href="./assets/General/Logo.svg"
        type="image/svg"
      />
      {/* {image && <meta property="og:image" content={image} />} */}
    </Helmet>
  );
};

function App() {
  return (
    <ApolloProvider client={clientConfig}>
      <UserProvider>
        <BrowserRouter>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <SearchProvider>
              <LanguageProvider>
                <MasterHeader />
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
