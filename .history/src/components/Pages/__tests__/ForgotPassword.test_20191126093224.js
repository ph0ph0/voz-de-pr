import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ForgotPassword from "../ForgotPassword";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";

jest.mock("../../../CustomHooks/user", () => ({
  useUser: () => ({
    error: "Test Error",
    loading: false,
    forgotPassword: () => {
      return;
    },
    submitCodeAndNewPassword: () => ({ data: {} })
  })
}));

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

it("renders email content initially", () => {
  const { getByTestId } = render(
    // <UserProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <ForgotPassword />
      </Router>
    </ThemeProvider>
    // </UserProvider>
  );
  const emailInput = getByTestId("fpwEmailInput");
  const submitButton = getByTestId("fpwSubmitButton");

  expect(emailInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

it("changes state/content from email to code when submit clicked", () => {
  const { getByText, debug } = render(
    // <UserProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <ForgotPassword />
      </Router>
    </ThemeProvider>
    // </UserProvider>
  );

  const submitButton = getByText("SEND");
  expect(submitButton).toBeInTheDocument();

  fireEvent.click(submitButton);

  debug();

  const codeInput = getByTestId("CodeInput");
  expect(codeInput).toBeInTheDocument();
});
