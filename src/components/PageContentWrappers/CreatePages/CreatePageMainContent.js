import React from "react";
import styled from "styled-components";

import TopOfPage from "../TopOfPage/TopOfPage";
import CreateSubject from "../../DisplayWrappers/CreateSubject/CreateSubject";
import { useLanguage } from "CustomHooks/useLanguage";

import { Helmet } from "react-helmet";

const displayText = {
  en: {
    createCause: "Create a Cause",
    createPost: "Create a Post"
  },
  sp: {
    createCause: "Crear una Causa",
    createPost: "Crear una Publicación"
  }
};

const CreatePageMainContentWrapper = ({ secondary, ...props }) => {
  const { language } = useLanguage();

  const createPostTitle = "Voz de Puerto Rico | ".concat(
    language === "spanish"
      ? displayText.sp.createPost
      : displayText.en.createPost
  );

  const createCauseTitle = "Voz de Puerto Rico | ".concat(
    language === "spanish"
      ? displayText.sp.createCause
      : displayText.en.createCause
  );

  return (
    <div {...props}>
      <Helmet>
        <title>{secondary ? createPostTitle : createCauseTitle}</title>
      </Helmet>
      <TopOfPage shouldShowFilters={false}>
        {secondary
          ? language === "spanish"
            ? displayText.sp.createPost
            : displayText.en.createPost
          : language === "spanish"
          ? displayText.sp.createCause
          : displayText.en.createCause}
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
