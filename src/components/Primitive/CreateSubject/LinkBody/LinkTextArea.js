import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SubjectLinkTextWrapper = ({ api, secondary, ...props}) => {
  return (
    <textarea 
      {...props}
      placeholder = {"URL"}
      value = {api.linkContent}
      onChange = {(event) => api.updateLinkContent(event.target.value)}
    />
  );
};

const SubjectLinkTextArea = styled(SubjectLinkTextWrapper)`
    /* border: none; */
    border: 1px solid #d8d8d8;
    /* Still need to add a radius to the border as otherwise it cuts off the parent radius */
    border-radius: 5px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;

    /* Padding must be removed so the text is in correct place */
    padding: 0px;
    margin-top: 20px;
    margin-bottom: 30px;
    padding-left: 25px;

    line-height: 2.4em;
    font-size: 20px;
    margin-right: auto;

    color: ${props => props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};
    text-decoration: underline;

    resize: none;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: ${props => props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};
    }
`;

SubjectLinkTextArea.propTypes = {
  api: PropTypes.object.isRequired
};

export default SubjectLinkTextArea;