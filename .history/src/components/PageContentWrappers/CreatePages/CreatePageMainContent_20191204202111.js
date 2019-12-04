import React from "react";
import styled from "styled-components";

import TopOfPage from "../TopOfPage/TopOfPage";
import CreateSubject from "../../DisplayWrappers/CreateSubject/CreateSubject";

const CreatePageMainContentWrapper = ({secondary, ...props}) => {
  return (
    <div {...props}>
      <TopOfPage shouldShowFilters = {false}>{secondary ? "Create a Post" : "Create a Cause"}</TopOfPage>
      <CreateSubject secondary = {secondary}/>
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