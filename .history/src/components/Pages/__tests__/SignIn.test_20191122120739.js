import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignIn from "../SignIn";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
// import {useUser} from '../../../CustomHooks/user'

beforeEach(() => {
  jest.resetModules();
});

//Allows us to ignore window . log calls
global.log = () => {};

it("renders", () => {
  const { getByTestId } = render(
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <SignIn />
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
  const emailInput = getByTestId("EmailInput");

  expect(emailInput).toBeInTheDocument();
});

describe("Input validation", () => {
  it("Indicates that email must be entered to login", () => {
    const { getByTestId, queryByText } = render(
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <SignIn />
          </Router>
        </ThemeProvider>
      </UserProvider>
    );

    fireEvent.change(getByTestId("EmailInput"), { target: { value: "" } });
    fireEvent.change(getByTestId("PasswordInput"), {
      target: { value: "1234567890" }
    });

    fireEvent.click(getByTestId("SignInButton"));

    const emailEmptyErrorText = getByTestId("EmailEmptyErrorText");
    //   const passwordEmptyErrorText = getByTestId("PasswordEmptyErrorText");

    expect(emailEmptyErrorText).toBeInTheDocument();
    expect(queryByText("Please provide your password")).toBeNull();
  });

  it("Indicates that password must be entered to login", () => {
    const { getByTestId, queryByText } = render(
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <SignIn />
          </Router>
        </ThemeProvider>
      </UserProvider>
    );

    fireEvent.change(getByTestId("EmailInput"), {
      target: { value: "1234567890" }
    });
    fireEvent.change(getByTestId("PasswordInput"), {
      target: { value: "" }
    });

    fireEvent.click(getByTestId("SignInButton"));

    const passwordEmptyErrorText = getByTestId("PasswordEmptyErrorText");
    //   const passwordEmptyErrorText = getByTestId("PasswordEmptyErrorText");

    expect(passwordEmptyErrorText).toBeInTheDocument();
    expect(queryByText("Please provide your email")).toBeNull();
  });
});

describe("Auth Errors", () => {
  it("Indicates user not found", () => {
    const { getByTestId, queryByText } = render(
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <SignIn />
          </Router>
        </ThemeProvider>
      </UserProvider>
    );

    fireEvent.change(getByTestId("EmailInput"), {
      target: { value: "1234567890" }
    });
    fireEvent.change(getByTestId("PasswordInput"), {
      target: { value: "" }
    });

    fireEvent.click(getByTestId("SignInButton"));

    const passwordEmptyErrorText = getByTestId("PasswordEmptyErrorText");
    //   const passwordEmptyErrorText = getByTestId("PasswordEmptyErrorText");

    expect(passwordEmptyErrorText).toBeInTheDocument();
    expect(queryByText("Please provide your email")).toBeNull();
  });
});
