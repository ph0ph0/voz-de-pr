//Detail Page doesnt have a MainPageContent as there is only the SubjectDetailCard and the side panel.

import React from "react";
import styled from "styled-components";

import SubjectDetailCard from "../../DisplayWrappers/SubjectDetailCard/SubjectDetailCard";
import SidePanel from "../../DisplayWrappers/SidePanel/SidePanel";

const SubjectDetailPageContentWrapper = ({ subject, secondary, ...props}) => {
  return (
    <div {...props}>
      <SubjectDetailCard secondary = {secondary} subject = {subject}/>
      <SidePanel type = {"Detail"} secondary = {secondary}/>
    </div>
  );
};

const SubjectDetailPageContent = styled(SubjectDetailPageContentWrapper)`
    /* border: 1px solid green; */

    margin-top: 23px;

    display: flex;
    align-items: flex-start;
`;

export default SubjectDetailPageContent;