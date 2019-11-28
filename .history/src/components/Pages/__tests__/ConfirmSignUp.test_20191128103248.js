import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  wait,
  getByText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ConfirmSignUp from "../ConfirmSignUp";
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme/Theme";

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    confirmSignUp: () => {}
  })
}));

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

describe("Presenting input errors to the user", () => {
  const { getByTestId, getByText, debug } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <ConfirmSignUp />
      </Router>
    </ThemeProvider>
  );
  it("Shows errors when fields are empty", () => {
    const submitButton = getByTestId("submitButton");
    expect(submitButton).toBeInTheDocument();

    const ConfirmSignUpCard = getByTestId("ConfirmSignUpCardBody");
    expect(ConfirmSignUpCard).toBeInTheDocument();

    const Info = getByText(
      "Please check your email for your confirmation code"
    );
    expect(Info).toBeInTheDocument();

    fireEvent.click(submitButton);

    debug();

    const firstNameMissingError = getByText("Please provide a first name");
  });
});
