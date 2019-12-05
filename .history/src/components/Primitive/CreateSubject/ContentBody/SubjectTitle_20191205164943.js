import React from "react";
import styled from "styled-components";

const TitleInputWrapper = ({ api, ...props }) => {
  return <input {...props} />;
};

const SubjectTitle = styled(TitleInputWrapper)`
  border: 1px solid #d8d8d8;
  /* border: 1px solid red; */
  /* Still need to add a radius to the border as otherwise it cuts off the parent radius */
  border-radius: 5px;
  width: 100%;
  height: 37px;
  box-sizing: border-box;

  padding-left: 250px;
  margin-bottom: 20px;

  line-height: 20em;
  font-size: 20px;

  :focus {
    outline: 0;
  }
`;

export default SubjectTitle;
