import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  wait,
  getByText,
  waitForElement
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
  const { getByTestId, getByText, debug } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <Profile />
      </Router>
    </ThemeProvider>
  );
  it("if it isn't open, it opens", async () => {
    const submitButton = getByText("Change");
    expect(submitButton).toBeInTheDocument();

    const Info = getByText("Select A New Avatar");
    expect(Info).toBeInTheDocument();

    const InlineContent = getByTestId("InlineContent");
    expect(InlineContent).toBeInTheDocument();

    fireEvent.click(InlineContent);

    const ListOfLocations = getByTestId("ListOfLocations");
    expect(ListOfLocations).toBeInTheDocument();
  });

  it("if it is open, it closes", async () => {
    const submitButton = getByText("Change");
    expect(submitButton).toBeInTheDocument();

    const Info = getByText("Select A New Avatar");
    expect(Info).toBeInTheDocument();

    fireEvent.click(Info);

    await wait();

    await waitForElement(() => getByTestId("ListOfLocations"));

    const ListOfLocations = getByTestId("ListOfLocations");
    expect(ListOfLocations).toBeInTheDocument();

    // fireEvent.click(submitButton);

    // debug();

    // const firstNameMissingError = getByText("Please provide a first name");
  });
});
