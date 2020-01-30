import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DescriptionInputWrapper = ({ api, ...props }) => {
  return (
    <input
      {...props}
      placeholder={"Description"}
      value={api.linkDescription}
      onChange={event => api.updateLinkDescription(event.target.value)}
    />
  );
};

const LinkDescription = styled(DescriptionInputWrapper)`
  border: 1px solid #d8d8d8;
  /* border: 1px solid red; */
  /* Still need to add a radius to the border as otherwise it cuts off the parent radius */
  border-radius: 5px;
  width: 100%;
  height: 37px;
  box-sizing: border-box;
  margin-bottom: 20px;

  padding-left: 25px;

  /* line-height: 2.4em; */
  font-size: 20px;

  :focus {
    outline: 0;
  }
`;

LinkDescription.propTypes = {
  api: PropTypes.object.isRequired
};

export default LinkDescription;
