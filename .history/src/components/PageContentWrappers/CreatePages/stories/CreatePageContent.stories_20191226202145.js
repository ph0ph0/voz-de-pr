import React from "react";
import { storiesOf } from "@storybook/react";

import CreatePageContent from "../CreatePageContent";
import userMock from "CustomHooks/__mocks__/user.mock";

//Mock the useUser hook
jest.mock("CustomHooks/user", () => userMock);

storiesOf("PageContentWrappers/CreatePages/CreatePageContent", module)
  .add("Cause", () => <CreatePageContent />)
  .add("Post", () => <CreatePageContent />);
