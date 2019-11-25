import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ForgotPasswordCardBody from "../ForgotPasswordCardBody";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../../../../CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "../../../../../../theme/Theme";

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

it("renders email content initially", () => {
  const { getByTestId } = render(
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <ForgotPasswordCardBody />
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
  const emailInput = getByTestId("fpwEmailInput");
  const submitButton = getByTestId("fpwSubmitButton");

  expect(emailInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
