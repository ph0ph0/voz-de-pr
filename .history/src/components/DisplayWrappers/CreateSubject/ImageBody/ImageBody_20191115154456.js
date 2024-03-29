import React from "react";
import styled from "styled-components";

import ImageDescription from "../../../Primitive/CreateSubject/ImageBody/ImageDescription";
import ImageUploadContainer from "./ImageUploadContainer";
import ActionButton from "../../../Primitive/General/ActionButton";

const ImageBodyWrapper = ({secondary, api, ...props}) => {
  return (
    <div {...props}>
      <ImageDescription api = {api}/>
      <ImageUploadContainer secondary={secondary} />
      <ActionButton secondary={secondary} onClick = {api.submit}>
        {secondary ? "Create Post" : "Create Cause"}
      </ActionButton>
    </div>
  );
};

const ImageBody = styled(ImageBodyWrapper)`
    /* border: 1px solid green; */

    /* 87% is roughly 650px wide */
    width: 87%;
    height: auto;

    margin-top: 33px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export default ImageBody;


