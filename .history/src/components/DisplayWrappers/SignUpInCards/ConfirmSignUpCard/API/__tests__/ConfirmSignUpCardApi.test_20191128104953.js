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

const state = {
  codeValue: "",
  success: false
};
