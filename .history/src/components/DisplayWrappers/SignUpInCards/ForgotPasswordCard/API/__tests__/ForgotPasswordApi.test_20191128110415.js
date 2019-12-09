import api from "../ForgotPasswordApi";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    confirmSignUp: () => {}
  })
}));

//Allows us to ignore window . log calls
global.log = () => {};

const state = {
  emailValue: "",
  codeValue: "",
  firstPasswordValue: "",
  secondPasswordValue: "",
  content: "email",
  passwordsMatch: null
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

const mockApi = useApiMock(api, state);

describe("Input field updaters", () => {
  it("updates the email value", () => {
    mockApi.api.updateEmailValue("TEST");
    expect(mockApi.api.emailValue).toEqual("TEST");
  });
  it("updates the code value", () => {
    mockApi.api.updateCodeValue("TEST");
    expect(mockApi.api.codeValue).toEqual("TEST");
  });
  it("updates the first password value", () => {
    mockApi.api.updateFirstPasswordValue("TEST");
    expect(mockApi.api.firstPasswordValue).toEqual("TEST");
  });
  it("updates the second password value", () => {
    mockApi.api.updateSeconPasswordValue("TEST");
    expect(mockApi.api.firstPasswordValue).toEqual("TEST");
  });
});
