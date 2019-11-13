import { cleanup } from "@testing-library/react";

import SignInCardAPI from "../SignInCardAPI";

afterEach(cleanup);

const state = {
  emailValue: "",
  passwordValue: ""
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

//Allows us to ignore window . log calls
global.log = () => {};

describe("Input field updaters", () => {
  it("updates the email field", () => {
    mockApi.api.updateEmailValue("TEST");
    expect(mockApi.api.emailValue).toEqual("TEST");
  });

  it("updates the password field", () => {
    mockApi.api.updatePasswordValue("TEST");
    expect(mockApi.api.passwordValue).toEqual("TEST");
  });
});

describe("Form submission", () => {
  it("checks email is not empty", () => {
    mockApi.api.updateEmailValue("");
    mockApi.api.updatePasswordValue("Test");
    expect(mockApi.api.emailInputIsErrored).toEqual(true);
  });

  it("checks password is not empty", () => {
    mockApi.api.updateEmailValue("TEST");
    mockApi.api.updatePasswordValue("");
    expect(mockApi.api.passwordInputIsErrored).toEqual(true);
  });

  it("checks both inputs are not empty", () => {
    mockApi.api.updateEmailValue("");
    mockApi.api.updatePasswordValue("");
    expect(mockApi.api.emailInputIsErrored).toEqual(true);
    expect(mockApi.api.passwordInputIsErrored).toEqual(true);
  });

  it("checks both inputs will submit without errors", () => {
    mockApi.api.updateEmailValue("TEST");
    mockApi.api.updatePasswordValue("TEST");
    expect(mockApi.api.emailInputIsErrored).toEqual(false);
    expect(mockApi.api.passwordInputIsErrored).toEqual(false);
  });

  it("resets the form after submit", () => {
    mockApi.api.updateEmailValue("TEST");
    mockApi.api.updatePasswordValue("TEST");

    mockApi.api.submit();
    expect(mockApi.api.updateEmailValue("")).toEqual("");
    expect(mockApi.api.updatePasswordValue("")).toEqual("");
    expect(mockApi.api.emailInputIsErrored).toEqual(false);
    expect(mockApi.api.passwordInputIsErrored).toEqual(false);
  });
});
