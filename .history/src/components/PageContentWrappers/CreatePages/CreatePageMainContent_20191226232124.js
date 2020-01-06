import React from "react";
import styled from "styled-components";

import TopOfPage from "../TopOfPage/TopOfPage";
import CreateSubject from "../../DisplayWrappers/CreateSubject/CreateSubject";

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    forgotPassword: () => {},
    submitCodeAndNewPassword: () => {},
    user: "testUser"
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

const CreatePageMainContentWrapper = ({ secondary, ...props }) => {
  return (
    <div {...props}>
      <TopOfPage shouldShowFilters={false}>
        {secondary ? "Create a Post" : "Create a Cause"}
      </TopOfPage>
      <CreateSubject secondary={secondary} />
    </div>
  );
};

const CreatePageMainContent = styled(CreatePageMainContentWrapper)`
  /* border: 1px solid green; */
  /* background-color: red; */

  margin-right: 30px;
  padding-right: 0px;

  display: flex;
  flex-direction: column;
`;

export default CreatePageMainContent;
