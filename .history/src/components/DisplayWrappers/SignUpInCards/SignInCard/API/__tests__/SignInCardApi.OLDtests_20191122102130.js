import { cleanup, render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import SignInCardAPI from "../SignInCardApi";

afterEach(cleanup);

const state = {
  emailValue: "",
  passwordValue: "",
  emailInputIsErrored: false,
  passwordInputIsErrored: false
};

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

const { result } = renderHook(() => mockApi);

//Allows us to ignore window . log calls
global.log = () => {};

describe("Input field updaters", () => {
  it("updates the email field", () => {
    result.current.cunt.api.updateEmailValue("TEST");
    expect(result.current.cunt.api.emailValue).toEqual("TEST");
  });

  // it("updates the password field", () => {
  //   mockApi.api.updatePasswordValue("TEST");
  //   expect(mockApi.api.passwordValue).toEqual("TEST");
  // });
});

// describe("Form submission", () => {
//   it("checks email is not empty", () => {
//     mockApi.api.updateEmailValue("");
//     mockApi.api.updatePasswordValue("Test");
//     mockApi.api.submit();
//     expect(mockApi.api.emailInputIsErrored).toEqual(true);
//   });

//   it("checks password is not empty", () => {
//     mockApi.api.updateEmailValue("TEST");
//     mockApi.api.updatePasswordValue("");
//     mockApi.api.submit();
//     expect(mockApi.api.passwordInputIsErrored).toEqual(true);
//   });

//   it("checks both inputs are not empty", () => {
//     mockApi.api.updateEmailValue("");
//     mockApi.api.updatePasswordValue("");
//     mockApi.api.submit();
//     expect(mockApi.api.emailInputIsErrored).toEqual(true);
//     expect(mockApi.api.passwordInputIsErrored).toEqual(true);
//   });

//   it("checks both inputs will submit without errors", () => {
//     mockApi.api.updateEmailValue("TEST");
//     mockApi.api.updatePasswordValue("TEST");
//     mockApi.api.submit();
//     expect(mockApi.api.emailInputIsErrored).toEqual(false);
//     expect(mockApi.api.passwordInputIsErrored).toEqual(false);
//   });

//   it("resets the form after submit", () => {
//     mockApi.api.updateEmailValue("TEST");
//     mockApi.api.updatePasswordValue("TEST");

//     mockApi.api.submit();
//     expect(mockApi.api.emailValue).toEqual("");
//     expect(mockApi.api.passwordValue).toEqual("");
//     expect(mockApi.api.emailInputIsErrored).toEqual(false);
//     expect(mockApi.api.passwordInputIsErrored).toEqual(false);
//   });
// });
