import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Filters from "./Filters";
import PageTitle from "../../Primitive/TopOfPage/PageTitle";

const TopOfPageWrapper = ({children, profileType, shouldShowFilters, ...props}) => {
  return (
    <div {...props}>
      <PageTitle>{children}</PageTitle>
      {shouldShowFilters && <Filters profileType = {profileType}/>}
    </div>
  );
};

const TopOfPage = styled(TopOfPageWrapper)`
    /* border: 1px solid orange; */
    height: 34px;
    
    margin-top: 35px;
    margin-bottom: 32px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;
TopOfPage.propTypes = {
  children: PropTypes.string.isRequired,
  shouldShowFilters: PropTypes.bool.isRequired
};

export default TopOfPage;