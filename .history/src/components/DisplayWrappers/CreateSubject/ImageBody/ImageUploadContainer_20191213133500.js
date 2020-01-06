import React from "react";
import styled from "styled-components";

// import UploadImageButton from "../../../Primitive/CreateSubject/ImageBody/UploadImageButton";

const ImageUploadWrapper = ({ secondary, ...props }) => {
  return (
    <div {...props}>
      <UploadImageButton secondary={secondary}>Upload Image</UploadImageButton>
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
