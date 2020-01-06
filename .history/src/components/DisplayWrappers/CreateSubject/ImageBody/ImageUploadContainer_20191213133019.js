import React from "react";
import styled from "styled-components";

import UploadImageButton from "../../../Primitive/CreateSubject/ImageBody/UploadImageButton";

const ImageUploadWrapper = ({ secondary, ...props }) => {
  return (
    <div {...props}>
      <UploadImageButton secondary={secondary}>Upload Image</UploadImageButton>
    </div>
  );
};

const ImageUploadContainer = styled(ImageUploadWrapper)`
  border: orange;
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
