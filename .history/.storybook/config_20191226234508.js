import { configure } from "@storybook/react";
import requireContext from "require-context.macro";

import "../src/theme/globalStyle";

// For Console add on to storybook, allows you to see the console output
import "@storybook/addon-console";

import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// For JSX (to view the rendered JSX)

import { jsxDecorator } from "storybook-addon-jsx";

addDecorator(jsxDecorator);

//For the themes addon so that we can use styled-components themes

import { ThemeProvider } from "styled-components";
import React from "react";
import theme from "../src/theme/Theme";

// addDecorator((story) =>(
//   <ThemeProvider theme = {theme}>
//     {story()}
//   </ThemeProvider>
// ))

// For react router, saves having to add it to every story that uses the browser
import { BrowserRouter } from "react-router-dom";

addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>);

//For Viewport addon to storybook
import { addParameters } from "@storybook/react";

const ViewPorts = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "480px",
      height: "667px"
    }
  },
  1024: {
    name: "1024 - 3%",
    styles: {
      width: "1024px",
      height: "768px"
    }
  },
  1280: {
    name: "1280 - 11%",
    styles: {
      width: "1280px",
      height: "800px"
    }
  },
  1360: {
    name: "1360 - 2%",
    styles: {
      width: "1360px",
      height: "768px"
    }
  },
  1360: {
    name: "1366 - 35%",
    styles: {
      width: "1366px",
      height: "768px"
    }
  },
  1440: {
    name: "1440 - 6%",
    styles: {
      width: "1440px",
      height: "900px"
    }
  },
  1600: {
    name: "1600 - 6%",
    styles: {
      width: "1600px",
      height: "900px"
    }
  },
  1680: {
    name: "1680 - 3%",
    styles: {
      width: "1680px",
      height: "1050px"
    }
  },
  1920: {
    name: "1920 - 20%",
    styles: {
      width: "1920px",
      height: "1080px"
    }
  },
  2560: {
    name: "2560 - 1%",
    styles: {
      width: "2560px",
      height: "1440px"
    }
  },
  2880: {
    name: "2880 - MB Pro",
    styles: {
      width: "2880px",
      height: "1800px"
    }
  }
};

addParameters({
  viewport: {
    viewports: ViewPorts
  }
});

const req = requireContext("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
