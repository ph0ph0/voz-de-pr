import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ForgotPassword from "../ForgotPassword";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
import { act } from "react-dom/test-utils";

jest.mock("../../../CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    forgotPassword: jest.fn(() => {
      return Promise.reject();
    }),
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
  const { getByTestId, getByText, debug } = render(
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

  const emailInput = getByTestId("fpwEmailInput");

  act(() => {
    fireEvent.change(emailInput, {
      target: { value: "testemail@testemail.com" }
    });
  });

  act(() => {
    fireEvent.click(submitButton);
  });

  debug();

  console.log("@!@!@!@!@!@! CUNT!!!!!");

  const codeInput = getByTestId("CodeInput");
  expect(codeInput).toBeInTheDocument();
});
