import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleInputWrapper = ({ api, ...props }) => {
    return <input  
      placeholder={"Title"} 
      value = {api.subjectTitle} 
      onChange = {event => api.updateSubjectTitle(event.target.value)}
      {...props}
    />;
  };
  
  const SubjectTitle = styled(TitleInputWrapper)`
    border: 1px solid #d8d8d8;
    /* border: 1px solid red; */
    /* Still need to add a radius to the border as otherwise it cuts off the parent radius */
    border-radius: 5px;
    width: 100%;
    height: 37px;
    box-sizing: border-box;
  
    padding-left: 25px;
  
    line-height: 2.4em;
    font-size: 20px;
  
    :focus {
      outline: 0;
    }
  `;

SubjectTitle.propTypes = {
  api: PropTypes.object.isRequired
}

export default SubjectTitle