import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  wait,
  getByText,
  waitForElement,
  waitForElementToBeRemoved
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Profile from "../Profile";
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme/Theme";

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

describe("When clicking on the dropdown (InlineContent component)", () => {
  it("if closed, it opens, if open, it closes", async () => {
    const { getByTestId, getByText, debug } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Profile />
        </Router>
      </ThemeProvider>
    );
    const submitButton = getByText("Change");
    expect(submitButton).toBeInTheDocument();

    const Info = getByText("Select A New Avatar");
    expect(Info).toBeInTheDocument();

    const InlineContent = getByTestId("InlineContent");
    expect(InlineContent).toBeInTheDocument();

    fireEvent.click(InlineContent);

    const ListOfLocations = getByTestId("ListOfLocations");
    expect(ListOfLocations).toBeInTheDocument();

    const selectedLocation = getByText("Adjuntas");

    fireEvent.click(selectedLocation);

    expect(ListOfLocations).not.toBeInTheDocument();
  });
});
