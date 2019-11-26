import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
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
    forgotPassword: jest.fn(email => {
      return new Promise((resolve, reject) => {
        if (email) {
          resolve(email);
        } else {
          reject("Error");
        }
      });
    }),
    submitCodeAndNewPassword: async () => ({ data: {} })
  })
}));

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

// it("renders email content initially", () => {
//   const { getByTestId } = render(
//     // <UserProvider>
//     <ThemeProvider theme={theme}>
//       <Router>
//         <ForgotPassword />
//       </Router>
//     </ThemeProvider>
//     // </UserProvider>
//   );
//   const emailInput = getByTestId("fpwEmailInput");
//   const submitButton = getByTestId("fpwSubmitButton");

//   expect(emailInput).toBeInTheDocument();
//   expect(submitButton).toBeInTheDocument();
// });

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

  const submitButton = getByTestId("fpwSubmitButton");
  expect(submitButton).toBeInTheDocument();

  const emailInput = getByTestId("fpwEmailInput");

  act(() => {
    fireEvent.change(emailInput, {
      target: { value: "testemail@testemail.com" }
    });
  });

  fireEvent.click(submitButton);

  debug();

  const codeInput = getByTestId("CodeInput");
  expect(codeInput).toBeInTheDocument();
});
