import React from "react";
import { storiesOf } from "@storybook/react";

import CreatePageMainContent from "../CreatePageMainContent";

jest.mock("../../../../CustomHooks/user", () => ({
  useUser: () => ({
    user: "testUser",
  error: null,
  loading: false,
  login: () => {},
  logout: () => {},
  signUp: () => {},
  confirmSignUp: () => {},
  forgotPassword: () => {},
  submitCodeAndNewPassword: () => {}
})));

jest.mock("CustomHooks/useSubject", () => ({
  useSubject: () => ({
    error: null,
    loading: false,
    saveSubject: () => {},
    downloadSubject: () => {}
  })
}));

storiesOf("PageContentWrappers|CreatePages/CreatePageMainContent", module)
  .add("Cause", () => <CreatePageMainContent pageTitle={"Create Cause"} />)
  .add("Post", () => <CreatePageMainContent pageTitle={"Create Post"} />);
