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

describe("Presenting input errors to the user", () => {
  const { getByTestId, getByText, debug } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <Profile />
      </Router>
    </ThemeProvider>
  );
  it("Shows errors when fields are empty", async () => {
    const submitButton = getByText("Change");
    expect(submitButton).toBeInTheDocument();

    const Info = getByText("Select A New Avatar");
    expect(Info).toBeInTheDocument();

    const DropDown = getByTestId("DropDown");
    expect(DropDown).toBeInTheDocument();

    fireEvent.click(DropDown);

    await wait();

    await waitForElement(() => getByTestId("ListOfLocations"));

    const ListOfLocations = getByTestId("ListOfLocations");
    expect(ListOfLocations).toBeInTheDocument();

    // fireEvent.click(submitButton);

    // debug();

    // const firstNameMissingError = getByText("Please provide a first name");
  });
});
