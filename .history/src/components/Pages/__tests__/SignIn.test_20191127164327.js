import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignIn from "../SignIn";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    login: () => {}
  })
}));

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
  const passwordInput = getByTestId("PasswordInput");
  const submitButton = getByTestId("SignInButton");

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
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

    expect(passwordEmptyErrorText).toBeInTheDocument();
    expect(queryByText("Please provide your email")).toBeNull();
  });
});

describe("After valid email and password added, it segues to main feed", () => {
  const { getByTestId, queryByText, debug } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <SignIn />
      </Router>
    </ThemeProvider>
  );

  fireEvent.change(getByTestId("EmailInput"), {
    target: { value: "test@test.com" }
  });
  fireEvent.change(getByTestId("PasswordInput"), {
    target: { value: "1234567890" }
  });

  fireEvent.click(getByTestId("SignInButton"));

  debug();
});
