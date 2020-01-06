import React from "react";
import { storiesOf } from "@storybook/react";

import CreatePageContent from "../CreatePageContent";

//Mock the useUser hook
jest.mock("CustomHooks/user", () => ({
  user: null,
  error: null,
  loading: false,
  login: () => {},
  logout: () => {},
  signUp: () => {},
  confirmSignUp: () => {},
  forgotPassword: () => {},
  submitCodeAndNewPassword: () => {}
}));

storiesOf("PageContentWrappers/CreatePages/CreatePageContent", module)
  .add("Cause", () => <CreatePageContent />)
  .add("Post", () => <CreatePageContent />);
