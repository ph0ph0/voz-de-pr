import React from "react";
import styled from "styled-components";

import SidePanel from "../../DisplayWrappers/SidePanel/SidePanel";
import MainPageContent from "./CreatePageMainContent";

const CreatePageContentWrapper = ({ secondary, ...props }) => {
  return (
    <div {...props}>
      <MainPageContent secondary={secondary} />
      <SidePanel type={secondary ? "PostInfo" : "CauseInfo"} />
    </div>
  );
};

const CreatePageContent = styled(CreatePageContentWrapper)`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default CreatePageContent;
