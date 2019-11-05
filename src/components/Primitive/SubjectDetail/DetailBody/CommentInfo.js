import React from 'react'
import styled from 'styled-components'

const Name = styled.p`
  font-size: 12px;
  color: ${props => props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};
  font-family: Avenir;

  margin-left: 5px;
`;

const Info = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  font-family: Avenir;
`;

const CommentInfoWrapper = ({ secondary, ...props }) => {
  return (
    <div {...props}>
      <Info>Comment as</Info>
      <Name secondary = {secondary}>James Wheeler</Name>
    </div>
  );
};

const CommentInfo = styled(CommentInfoWrapper)`
  display: flex;
`;

export default CommentInfo