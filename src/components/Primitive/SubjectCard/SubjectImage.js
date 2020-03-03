import styled from "styled-components";
import React from "react";
import Microlink from "@microlink/react";

import Placeholder from "assets/General/placeholder.gif";

const Sub = ({ pictureURL, subjectLink }) => {
  return pictureURL ? (
    <SubjectImage
      src={pictureURL ? pictureURL : Placeholder}
      onError={event => (event.target.src = Placeholder)}
    />
  ) : subjectLink ? (
    <SubjectLinkImage
      url={subjectLink}
      setData={{
        title: null,
        description: null,
        publisher: null,
        url: null
      }}
    />
  ) : null;
};

export const SubjectImage = styled.img`
  /* Note that image should be jpg, png wouldnt work for some reason.
    By setting the width to 100% */
  /* border: 1px solid bisque; */
  /* background-color: red; */
  object-fit: cover;
  width: 175px;
  height: 123px;
  /* width: 100%;
  height: auto; */

  border-radius: 5px;
`;

const SubjectLinkImage = styled(Microlink)`
  border-radius: 5px;
  width: 175px;
  /* height: 123px; */
  ${".microlink_card__media"} {
    flex: none;
    width: 175px;
    height: 123px;
`;

export default Sub;
