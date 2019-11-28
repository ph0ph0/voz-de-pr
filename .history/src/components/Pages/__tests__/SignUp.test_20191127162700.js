import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  wait,
  getByText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignUp from "../SignUp";
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme/Theme";

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    signUp: () => {}
  })
}));

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

describe("Presenting input errors to the user", () => {
  const { getByTestId, getByText, debug } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <SignUp />
      </Router>
    </ThemeProvider>
  );
  it("Shows errors when fields are empty", () => {
    const submitButton = getByTestId("submitButton");
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    const firstNameMissingError = getByText("Please provide a first name");
    const lastNameMissingError = getByText("Please provide a last name");
    const usernameMissingError = getByText("Please provide a username");
    const emailMissingError = getByText("Please provide a valid email");
    const locationMissingError = getByText(
      "Please select a location from the dropdown"
    );
    const passwordMissingError = getByText("Please provide a password");
    const avatarMissingError = getByText("Please select an avatar");

    expect(firstNameMissingError).toBeInTheDocument();
    expect(lastNameMissingError).toBeInTheDocument();
    expect(usernameMissingError).toBeInTheDocument();
    expect(emailMissingError).toBeInTheDocument();
    expect(locationMissingError).toBeInTheDocument();
    expect(passwordMissingError).toBeInTheDocument();
    expect(avatarMissingError).toBeInTheDocument();
  });
});
