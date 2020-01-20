import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DetailHeader from "./DetailHeader/DetailHeader";
import DetailImage from "../../Primitive/SubjectDetail/DetailImage/DetailImage";
import DetailSummary from "./DetailSummary/DetailSummary";
import DetailBody from "./DetailBody/DetailBody";
import CommentsSection from "./CommentsSection/CommentsSection";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";

import { useSubject } from "CustomHooks/useSubject";

const SubjectDetailContentWrapper = ({ secondary, subject, ...props }) => {
  const numberOfComments = subject.comments && subject.comments.length;

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
        "subjectPictures-detailImages_670x460"
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
      <DetailHeader secondary={secondary} subject={subject} />
      {loading ? <LoadingSpinner /> : <DetailImage src={pictureURL} />}
      <DetailSummary
        secondary={secondary}
        subjectID={subject.id}
        votesOnSubject={subject.votes}
        noOfComments={subject.numberOfComments}
      />
      <DetailBody
        secondary={secondary}
        subjectContent={subject.subjectContent}
      />
      {subject.comments &&
        subject.comments.items &&
        subject.comments.items.length !== 0 && (
          <CommentsSection comments={subject.comments.items} />
        )}
    </div>
  );
};

const SubjectDetailContent = styled(SubjectDetailContentWrapper)`
  /* border: 1px solid purple; */
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0 34px 0 34px;
`;

SubjectDetailContent.propTypes = {
  secondary: PropTypes.bool,
  subject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subjectContent: PropTypes.string.isRequired,
    subjectImage: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object.isRequired),
    timePassed: PropTypes.string.isRequired
  })
};

export default SubjectDetailContent;
