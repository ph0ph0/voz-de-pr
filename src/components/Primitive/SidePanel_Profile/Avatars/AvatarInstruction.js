import styled from "styled-components";

//We haven't for a story for this one because of the conditional CSS combinator.
//SB doesn't know what DropDown is and it throws and error

import DropDown from "../../../DisplayWrappers/SidePanel_Profile/DropDown/DropDown";

const AvatarInstruction = styled.div`
  /* border: 1px solid red; */
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5px;
  /* padding-left: 15px; */

  font-size: 14px;
  text-align: left;
  color: #878a8c;

  /* This keeps the rest of the content in line when the DropDown opens! */
  ${DropDown} + & {
    margin-top: ${props => (props.api.listOpen ? "61px" : "0px")};
  }
`;

export default AvatarInstruction;
