import React from "react";
import { storiesOf } from "@storybook/react";

import CreatePageMainContent from "../CreatePageMainContent";

jest.mock("../../../../CustomHooks/user", () => ({
  user: null,
  error: null,
  loading: false,
  login: () => {},
  logout: () => {},
  signUp: () => {},
  confirmSignUp: () => {},
  forgotPassword: () => {},
  submitCodeAndNewPassword: () => {},
  useUser: () => {}
}));

storiesOf("PageContentWrappers|CreatePages/CreatePageMainContent", module)
  .add("Cause", () => <CreatePageMainContent pageTitle={"Create Cause"} />)
  .add("Post", () => <CreatePageMainContent pageTitle={"Create Post"} />);
