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
import CommentAPI from "./API/CommentAPI";
import useAPI from "CustomHooks/useAPI";

const SubjectDetailContentWrapper = ({ secondary, subject, ...props }) => {
  const comments = subject.comments && subject.comments.items;

  window.log("...........Running subjectDetailWrapper");
  const commentApi = useAPI(CommentAPI, {
    commentText: "",
    commentError: "",
    comments: comments
  });

  window.log(
    `Comments in sDW after useAPI: ${JSON.stringify(
      JSON.stringify(commentApi.comments)
    )}`
  );

  const [pictureURL, setPictureURL] = useState(null);

  const { getSubjectPicture, loading: pictureLoading } = useSubject();

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

  const noOfComments =
    commentApi && commentApi.comments && commentApi.comments.length;

  return (
    <div {...props}>
      <DetailHeader secondary={secondary} subject={subject} />
      {pictureLoading ? <LoadingSpinner /> : <DetailImage src={pictureURL} />}
      <DetailSummary
        secondary={secondary}
        subjectID={subject.id}
        votesOnSubject={subject.votes}
        noOfComments={noOfComments}
      />
      <DetailBody
        secondary={secondary}
        subject={subject}
        commentApi={commentApi}
      />
      {commentApi.comments && (
        <CommentsSection comments={commentApi.comments} />
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
