import React from "react";
import styled from "styled-components";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    commentAs: "Comment as"
  },
  sp: {
    commentAs: "Comentar como"
  }
};

const Name = styled.p`
  font-size: 12px;
  color: ${props =>
    props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};
  font-family: Avenir;

  margin-left: 5px;
`;

const Info = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  font-family: Avenir;
`;

const CommentInfoWrapper = ({ secondary, username, ...props }) => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <Info>
        {language === "spanish"
          ? displayText.sp.commentAs
          : displayText.en.commentAs}
      </Info>
      <Name secondary={secondary}>{username}</Name>
    </div>
  );
};

const CommentInfo = styled(CommentInfoWrapper)`
  display: flex;
`;

export default CommentInfo;
