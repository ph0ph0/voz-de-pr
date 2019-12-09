import api from "../ConfirmSignUpCardAPI";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    forgotPassword: () => {},
    submitCodeAndNewPassword: () => {}
  })
}));

//Allows us to ignore window . log calls
global.log = () => {};

const state = {
  codeValue: "",
  success: false
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
  it("updates the code value", () => {
    mockApi.api.updateCodeValue("TEST");
    expect(mockApi.api.codeValue).toEqual("TEST");
  });
});
