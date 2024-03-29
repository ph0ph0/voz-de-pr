//This is used to add the same style to every component ie so they all have the same font etc

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
    font-family: Avenir Book;
    margin: 0px;
    padding: 0px;
    }

    body  {
        margin-top: 0px;
    }

    .content {
    margin-top: 100px;
    }

    .App {
    font-family: Avenir;
    text-align: center;
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
`;

export default GlobalStyle;
