//This is the Card which the CreateSubject component wraps around in order to provide it with state

import React from "react";
import styled from "styled-components";

import ContentBody from "./ContentBody/ContentBody";
import ImageBody from "./ImageBody/ImageBody";
import LinkBody from "./LinkBody/LinkBody";
import TitlesPanel from "./TitlesPanel/TitlesPanel";
import Button from "../../Primitive/General/ActionButton";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import ErrorText from "components/Primitive/General/ErrorText";
import DeleteButton from "components/Primitive/SubjectCard/DeleteSubjectButton";

import CreateSubjectFormAPI from "./API/CreateSubjectFormAPI";
import useAPI from "../../../CustomHooks/useAPI";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    cause: "Create Cause",
    post: "Create Post"
  },
  sp: {
    cause: "Crear Causa",
    post: "Crear Publicación"
  }
};

const ActionButton = styled(Button)`
  margin-left: auto;
  margin-right: 49px;
`;

const DeleteSubjectImageButton = styled(DeleteButton)`
  margin-top: -10px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: 50px;
`;

const CreateSubjectWrapper = ({ secondary, ...props }) => {
  const { language } = useLanguage();

  const api = useAPI(CreateSubjectFormAPI, {
    currentPanel: "content",
    subjectTitle: "",
    subjectContent: "",
    selectedImage: null,
    subjectImage: null,
    imageDescription: "",
    linkDescription: "",
    linkContent: "",
    titleIsErrored: false,
    contentIsErrored: false,
    linkIsErrored: false
  });

  function renderSwitch() {
    switch (api.currentPanel) {
      case "content":
        return <ContentBody secondary={secondary} api={api} />;
      case "image":
        return <ImageBody secondary={secondary} api={api} />;
      case "link":
        return <LinkBody secondary={secondary} api={api} />;
      default:
        return <ContentBody secondary={secondary} api={api} />;
    }
  }

  const errorMessage =
    api.error &&
    api.error.message &&
    (api.error.message ===
    "Image is too large, please use an image smaller than 6 MB"
      ? language === "spanish"
        ? "La imagen es demasiado grande. Utilice una imagen de menos de 6 MB."
        : api.error.message
      : api.error.message);

  return (
    <div {...props}>
      <TitlesPanel secondary={secondary} api={api} />
      {renderSwitch()}
      {api.subjectImage && api.currentPanel === "image" && (
        <DeleteSubjectImageButton onClick={api.removeSubjectImage} />
      )}
      {api.error && <ErrorText>{errorMessage}</ErrorText>}
      <ActionButton
        secondary={secondary}
        onClick={() => api.submit(secondary)}
        disabled={api.loading && "disabled"}
      >
        {api.loading ? (
          <LoadingSpinner />
        ) : secondary ? (
          language === "spanish" ? (
            displayText.sp.post
          ) : (
            displayText.en.post
          )
        ) : language === "spanish" ? (
          displayText.sp.post
        ) : (
          displayText.en.post
        )}
      </ActionButton>
    </div>
  );
};

const CreateSubject = styled(CreateSubjectWrapper)`
  /* border: 1px solid black; */
  width: 750px;
  height: auto;

  padding-bottom: 30px;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export default CreateSubject;
