import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ForgotPasswordCardBody from "../ForgotPasswordCardBody";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../../../../CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "../../../../../../theme/Theme";

import api from "../../API/ForgotPasswordApi";

afterEach(cleanup);

const state = {
  emailValue: "",
  firstPasswordValue: "",
  secondPasswordValue: "",
  codeValue: "",
  content: "email",
  passwordsMatch: null
};

jest.mock("../../API/ForgotPasswordApi", () => ({
  submit: jest.fn()
}));

const useApiMock = (api, defaultValue) => {
  let state = defaultValue;
  let setState = updater => {
    if (typeof updater === "function") {
      state = updater(state);
    } else {
      state = updater;
    }
    ref.api = api({ state, setState });
  };
  let ref = {
    api: api({ state, setState })
  };
  return ref;
};

const mockApi = useApiMock(SignInCardAPI, state);

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
