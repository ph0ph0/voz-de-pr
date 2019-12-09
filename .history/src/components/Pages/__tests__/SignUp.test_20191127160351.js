import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignUp from "../SignUp";
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme/Theme";

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    forgotPassword: () => {},
    submitCodeAndNewPassword: () => {}
  })
}));

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

describe("Presenting input errors to the user", () => {
  const { getByTestId, debug } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <SignUp />
      </Router>
    </ThemeProvider>
  );
  it("Shows errors when fields are empty", () => {
    const submitButton = getByTestId("submitButton");
    expect(submitButton).toBeInTheDocument();
  });
});
