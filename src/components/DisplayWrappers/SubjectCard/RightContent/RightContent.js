import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SubjectInfo from "./SubjectinfoWrapper";
import SubjectImage from "../../../Primitive/SubjectCard/SubjectImage";
import Placeholder from "assets/General/placeholder.gif";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";

import { useSubject } from "CustomHooks/useSubject";

const Wrapper = ({ numberOfVotes, secondary, pictures, ...props }) => {
  const [pictureURL, setPictureURL] = useState(null);

  const { getSubjectPicture, loading } = useSubject();

  const fetchPictures = async key => {
    try {
      const pictures = await getSubjectPicture(key);
      setPictureURL(pictures);
    } catch (error) {
      window.log(`Error fetching pictures for subject: ${error}`);
    }
  };

  useEffect(() => {
    window.log(
      `Picture: ${JSON.stringify(pictures.items[0] && pictures.items[0].key)}`
    );
    const key = pictures.items[0] && pictures.items[0].key;
    fetchPictures(key);
  }, []);

  return (
    <div {...props}>
      <SubjectInfo
        numberOfVotes={numberOfVotes}
        secondary={secondary}
      ></SubjectInfo>
      {loading ? (
        "LOADING"
      ) : (
        <SubjectImage src={pictureURL ? pictureURL : Placeholder} />
      )}
      {/* {src ? null : <LoadingSpinner colour={"black"} />} */}
    </div>
  );
};

const RightContent = styled(Wrapper)`
  /* border: 1px solid rosybrown; */
  width: 50%;
  height: 100%;
  /* margin-top: 12px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

RightContent.propTypes = {
  numberOfVotes: PropTypes.number.isRequired,
  secondary: PropTypes.bool.isRequired
};

export default RightContent;
