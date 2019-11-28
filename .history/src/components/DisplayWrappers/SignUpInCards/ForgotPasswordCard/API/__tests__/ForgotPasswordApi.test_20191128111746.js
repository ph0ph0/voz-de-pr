import api from "../ForgotPasswordApi";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    forgotPassword: () => {}
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

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

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
    mockApi.api.updateSecondPasswordValue("TEST");
    expect(mockApi.api.firstPasswordValue).toEqual("TEST");
  });
  it("checks the passwords are the same", () => {
    mockApi.api.updateFirstPasswordValue("Fail");
    mockApi.api.updateSecondPasswordValue("TEST");
    expect(mockApi.api.passwordsMatch).toEqual(false);

    mockApi.api.updateFirstPasswordValue("Test");
    mockApi.api.updateSecondPasswordValue("TEST");
    expect(mockApi.api.passwordsMatch).toEqual(false);

    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    expect(mockApi.api.passwordsMatch).toEqual(true);
  });
});

describe("Switching content on submit", () => {
  it("switches from email to code", async () => {
    expect(mockApi.api.content).toEqual("email");

    mockApi.api.submit();

    await flushPromises();

    expect(mockApi.api.content).toEqual("code");

    mockApi.api.updateFirstPasswordValue("TEST");
    mockApi.api.updateSecondPasswordValue("TEST");
    expect(mockApi.api.passwordsMatch).toEqual(true);

    mockApi.api.submit();

    await flushPromises();

    expect(mockApi.api.content).toEqual("success");
  });
  //   it("switches from code to success", done => {
  //     mockApi.api.content = "code";
  //     expect(mockApi.api.content).toEqual("code");

  //     mockApi.api.submit();

  //     setTimeout(() => {
  //       expect(mockApi.api.content).toEqual("success");
  //       done();
  //     });
  //   });
});
