import React from "react";
import styled from "styled-components";

import { SignUpInCardApiPropTypes } from "../API/proptypes/SignUpCardApiPropTypes";

import LocationInput from "../../../../Primitive/SidePanel_Profile/DropDown/LocationInput";
import DropDownArrow from "../../../../Primitive/SidePanel_Profile/DropDown/DropDownArrow";
import ClearInput from "../../../../Primitive/SidePanel_Profile/DropDown/ClearInput";

const LocationInputSignUpInCard = styled(LocationInput)`
  font-size: 20px;
  line-height: 0px;
`;

const ClearInputSignUpInCard = styled(ClearInput)`
  /* border: 1px solid orange; */
  margin-right: -80px;
  margin-left: auto;
`;

const InlineWrapper = ({ api, ...props }) => {
  return (
    <div {...props}>
      <LocationInputSignUpInCard api={api} />
      {api.listOpen && <ClearInputSignUpInCard api={api} />}
      <DropDownArrow />
    </div>
  );
};

const InlineContent = styled(InlineWrapper)`
  border: 1px solid green;
  height: auto;
  width: auto;

  color: #878a8c;
  display: flex;
  justify-content: flex-end;
`;

InlineContent.propTypes = {
  api: SignUpInCardApiPropTypes
};

export default InlineContent;