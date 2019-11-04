import React from 'react'
import styled from 'styled-components'

import SubjectTitle from '../../../Primitive/CreateSubject/ContentBody/SubjectTitle'
import SubjectContent from '../../../Primitive/CreateSubject/ContentBody/SubjectContent'
import ActionButton from '../../../Primitive/General/ActionButton'
import ErrorText from '../../../Primitive/General/ErrorText'

const ContentBodyWrapper = ({ secondary, api, ...props }) => {
    return (
      <div {...props}>
        {api.titleIsErrored && <ErrorText>Please choose a title</ErrorText>}
        <SubjectTitle api = {api}/>
        {api.contentIsErrored && (secondary ? <ErrorText>Please describe your post</ErrorText> : <ErrorText>Please describe your cause</ErrorText>)}
        <SubjectContent api = {api}/> 
        <ActionButton secondary={secondary} onClick = {api.submit}>
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