import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DetailHeaderTopLineWrapper from "./TopLine/DetailHeaderTopLine";
import DetailHeaderBottomLineWrapper from "./BottomLine/DetailHeaderBottomLine";

const DetailHeaderWrapper = ({ secondary, api, ...props }) => {
  return (
    <div {...props}>
      <DetailHeaderTopLineWrapper api={api} />
      <DetailHeaderBottomLineWrapper secondary={secondary} api={api} />
    </div>
  );
};

const DetailHeader = styled(DetailHeaderWrapper)`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 0px;
  margin-bottom: 25px;
  padding: 0px;
`;
// DetailHeader.propTypes = {
//   secondary: PropTypes.bool,
//   votesOnSubject: PropTypes.number.isRequired
// };

export default DetailHeader;
