//This is the Card which the CreateSubject component wraps around in order to provide it with state

import React from "react";
import styled from "styled-components";

import ContentBody from "./ContentBody/ContentBody";
import ImageBody from "./ImageBody/ImageBody";
import LinkBody from "./LinkBody/LinkBody";
import TitlesPanel from "./TitlesPanel/TitlesPanel";
import Button from "../../Primitive/General/ActionButton";

import CreateSubjectFormAPI from "./API/CreateSubjectFormAPI";
import useAPI from "../../../CustomHooks/useAPI";

const ActionButton = styled(Button)`
  margin-left: auto;
  margin-right: 49px;
`;

const CreateSubjectWrapper = ({ secondary, ...props }) => {
  // const [addSubject, { data, loading, error, called }] = useMutation(
  //   gql(createSubject)
  // );

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
    contentIsErrored: false
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

  return (
    <div {...props}>
      <TitlesPanel secondary={secondary} api={api} />
      {renderSwitch()}
      {/* {data && <p>GotData</p>}
      {loading && <p>Loading</p>}
      {error && <p>Error {`${error.message}`}</p>}
      {called && <p>Called</p>} */}
      {api.loading && <p>Loading...</p>}
      <ActionButton secondary={secondary} onClick={() => api.submit(secondary)}>
        {secondary ? "Create Post" : "Create Cause"}
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
