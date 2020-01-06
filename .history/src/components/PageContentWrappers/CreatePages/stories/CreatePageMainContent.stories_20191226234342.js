import React from "react";
import { storiesOf } from "@storybook/react";

import CreatePageMainContent from "../CreatePageMainContent";
import { UserProvider } from "./CustomHooks/user";

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
  })
}));

jest.mock("CustomHooks/useSubject", () => ({
  useSubject: () => ({
    error: null,
    loading: false,
    saveSubject: () => {},
    downloadSubject: () => {}
  })
}));

storiesOf("PageContentWrappers|CreatePages/CreatePageMainContent", module)
  .add("Cause", () => (
    <UserProvider>
      <CreatePageMainContent pageTitle={"Create Cause"} />
    </UserProvider>
  ))
  .add("Post", () => (
    <UserProvider>
      <CreatePageMainContent pageTitle={"Create Post"} />
    </UserProvider>
  ));
