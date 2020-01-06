import React from "react";
import styled from "styled-components";
import { API } from "aws-amplify";

// import UploadImageButton from "../../../Primitive/CreateSubject/ImageBody/UploadImageButton";

const ImageUploadWrapper = ({ api, secondary, ...props }) => {
  return (
    <div {...props}>
      <UploadImageButton htmlFor="fileinput" secondary={secondary}>
        Upload Image
      </UploadImageButton>
      <FileInput
        type="file"
        accept="image/*"
        id="fileinput"
        onChange={event => api.updateSubjectImage(event.target.files)}
      />
      {api.subjectImage && <ImagePreview src={api.subjectImage} />}
    </div>
  );
};

const UploadImageButton = styled.label`
  border: ${props =>
    props.secondary ? "2px solid #1B4EA0" : "2px solid #EC220D"};
  border-radius: 5px;

  width: 153px;
  height: 49px;

  font-size: 20px;
  color: ${props => (props.secondary ? "#1B4EA0" : "#EC220D")};

  /* display: block; */
  text-align: center;

  line-height: 50px;

  :hover {
    cursor: pointer;
  }
  /* opacity: 1; */
  position: absolute;
  /* top: 500px;
  left: 100px; */
  z-index: 10;
`;

const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 471px;
`;

const ImageUploadContainer = styled(ImageUploadWrapper)`
  /* border: orange; */
  border: 1px solid #d8d8d8;
  /* Still need to add a radius to the border as otherwise it cuts off the parent radius */
  border-radius: 5px;
  width: 100%;
  height: 471px;
  box-sizing: border-box;

  /* Padding must be removed so the text is in correct place */
  padding: 0px;
  margin-top: 20px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ImageUploadContainer;
