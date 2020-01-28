import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SubjectPropTypes } from "Constants/__PropTypes__/SubjectPropTypes";

import SubjectInfo from "./SubjectinfoWrapper";
import SubjectImage from "../../../Primitive/SubjectCard/SubjectImage";
import Placeholder from "assets/General/placeholder.gif";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";

import { useSubject } from "CustomHooks/useSubject";

const RightContentWrapper = ({ subject, secondary, ...props }) => {
  const [pictureURL, setPictureURL] = useState(null);

  const { getSubjectPicture, loading } = useSubject();

  const fetchPictures = async key => {
    try {
      const pictures = await getSubjectPicture(key);
      return pictures;
    } catch (error) {
      window.log(`Error fetching pictures for subject: ${error}`);
      throw error;
    }
  };

  useEffect(() => {
    let isMounted = true;
    try {
      var key =
        subject.pictures &&
        subject.pictures.items[0] &&
        subject.pictures.items[0].key;
      var compressedImageKey = key.replace(
        "subjectPictures",
        "subjectPictures-thumbnails_350x246"
      );
      (async function fetchAndGetPictures() {
        const pictures = await fetchPictures(compressedImageKey);
        if (isMounted === false) {
          window.log("Subject Card was not mounted, aborting setting picture");
          return;
        }
        setPictureURL(pictures);
      })();
    } catch (error) {
      window.log(
        `Error getting subject picture in useEffect of RightContent: ${error}`
      );
      setPictureURL(null);
    }
    return () => (isMounted = false);
  }, []);

  return (
    <div {...props}>
      <SubjectInfo
        numberOfVotes={subject.votes}
        secondary={secondary}
      ></SubjectInfo>
      {loading ? (
        <LoadingSpinner colour={"#EC220D"} />
      ) : (
        <SubjectImage
          src={pictureURL ? pictureURL : Placeholder}
          onError={event => (event.target.src = Placeholder)}
        />
      )}
      {/* {src ? null : <LoadingSpinner colour={"black"} />} */}
    </div>
  );
};

const RightContent = styled(RightContentWrapper)`
  /* border: 1px solid rosybrown; */
  width: 50%;
  height: 100%;
  /* margin-top: 12px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// RightContent.propTypes = SubjectPropTypes;

export default RightContent;
