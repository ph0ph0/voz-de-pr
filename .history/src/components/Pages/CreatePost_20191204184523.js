import React from "react";
import styled from "styled-components";

import CreatePageContent from "../PageContentWrappers/CreatePages/CreatePageContent";

const CreatePostWrapper = ({...props}) => {
  return (
    <div {...props}>
      <CreatePageContent secondary/>
    </div>
  );
};

const CreatePost = styled(CreatePostWrapper)`
    /* position: static; */

    display: flex;
    flex-direction: row;

    justify-content: center;

    /* Needed to make the SidePanel keep its proper height */
    align-items: flex-start;
`;

export default CreatePost;