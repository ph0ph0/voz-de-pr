import React from 'react'
import styled from 'styled-components'

import SubjectTitle from '../../../Primitive/CreateSubject/ContentBody/SubjectTitle'
import SubjectContent from '../../../Primitive/CreateSubject/ContentBody/SubjectContent'
import ActionButton from '../../../Primitive/General/ActionButton'

const ContentBodyWrapper = ({ secondary, ...props }) => {
    return (
      <div {...props}>
        <SubjectTitle />
        <SubjectContent />
        <ActionButton secondary={secondary}>
          {secondary ? "Create Post" : "Create Cause"}
        </ActionButton>
      </div>
    );
  };
  
  const ContentBody = styled(ContentBodyWrapper)`
    /* border: 1px solid green; */
  
    /* 87% is roughly 650px wide */
    width: 87%;
    height: auto;
  
    margin-top: 33px;
  
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;
  
  export default ContentBody;