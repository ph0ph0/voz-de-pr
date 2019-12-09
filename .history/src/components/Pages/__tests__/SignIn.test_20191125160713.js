import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved,
  cleanup
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// import { createMemoryHistory } from "history";
import Routes from "../../../Routes/Routes";

import SignIn from "../SignIn";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
// import {useUser} from '../../../CustomHooks/user'

beforeEach(() => {
  jest.resetModules(), (history = { push: jest.fn() });
});

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

// it("renders", () => {
//   const { getByTestId } = render(
//     <UserProvider>
//       <ThemeProvider theme={theme}>
//         <Router>
//           <SignIn />
//         </Router>
//       </ThemeProvider>
//     </UserProvider>
//   );
//   const emailInput = getByTestId("EmailInput");

//   expect(emailInput).toBeInTheDocument();
// });

// describe("Input validation", () => {
//   it("Indicates that email must be entered to login", () => {
//     const { getByTestId, queryByText } = render(
//       <UserProvider>
//         <ThemeProvider theme={theme}>
//           <Router>
//             <SignIn />
//           </Router>
//         </ThemeProvider>
//       </UserProvider>
//     );

//     fireEvent.change(getByTestId("EmailInput"), { target: { value: "" } });
//     fireEvent.change(getByTestId("PasswordInput"), {
//       target: { value: "1234567890" }
//     });

//     fireEvent.click(getByTestId("SignInButton"));

//     const emailEmptyErrorText = getByTestId("EmailEmptyErrorText");

//     expect(emailEmptyErrorText).toBeInTheDocument();
//     expect(queryByText("Please provide your password")).toBeNull();
//   });

//   it("Indicates that password must be entered to login", () => {
//     const { getByTestId, queryByText } = render(
//       <UserProvider>
//         <ThemeProvider theme={theme}>
//           <Router>
//             <SignIn />
//           </Router>
//         </ThemeProvider>
//       </UserProvider>
//     );

//     fireEvent.change(getByTestId("EmailInput"), {
//       target: { value: "1234567890" }
//     });
//     fireEvent.change(getByTestId("PasswordInput"), {
//       target: { value: "" }
//     });

//     fireEvent.click(getByTestId("SignInButton"));

//     const passwordEmptyErrorText = getByTestId("PasswordEmptyErrorText");

//     expect(passwordEmptyErrorText).toBeInTheDocument();
//     expect(queryByText("Please provide your email")).toBeNull();
//   });
// });

describe("SignIn page navigation", () => {
  it("Navigates to forgot password when forgot password text is clicked", async () => {
    const history = createMemoryHistory("/signin");

    jest.spyOn(history, "push");

    const { getByTestId, getByText } = render(
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Router initialEntries={["/signin"]}>
            <Routes />
          </Router>
        </ThemeProvider>
      </UserProvider>
    );

    const forgotPasswordText = getByText("Forgot your password?");
    fireEvent.click(forgotPasswordText);

    expect(history.push.calledOnce);

    await waitForElementToBeRemoved(() => forgotPasswordText);

    const forgotPWSubmitButton = await waitForElement(() =>
      getByTestId("fpwEmailInput")
    );

    expect(forgotPWSubmitButton).toBeInTheDocument();
  });
});
