import React from "react";
import styled from "styled-components";

const SubjectContentWrapper = ({ ...props }) => {
  return <textarea {...props} />;
};

const SubjectContent = styled(SubjectContentWrapper)`
  /* border: none; */
  border: 1px solid #d8d8d8;
  /* Still need to add a radius to the border as otherwise it cuts off the parent radius */
  border-radius: 5px;
  width: 100%;
  height: 471px;
  box-sizing: border-box;

  /* Padding must be removed so the text is in correct place */
  padding: 0px;
  margin-bottom: 30px;
  padding-left: 25px;
  padding-top: 10px;
  /* line-height: 2.4em; */
  /* Mozilla takes font parameters from browser instead of style sheet for TextAreas... */
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-size: 20px;

  margin-right: auto;

  resize: none;
  :focus {
    outline: none;
  }
`;

export default SubjectContent;
