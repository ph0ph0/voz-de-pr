import React from "react";
import ProfileInfoNavBar from "../ProfileInfoNavBar.js";
import { storiesOf } from "@storybook/react";

storiesOf("Primitive|/Text/ProfileInfoNavBar", module)
  .add("Standard", () => <ProfileInfoNavBar>Standard</ProfileInfoNavBar>, {
    notes: "This represents the profile information, their name and their email"
  })
  .add("ProfileName", () => <ProfileInfoNavBar fontSize = {"16px"} width = {"100%"} height = {"50%"} paddingTop = {"15px"}>James Wheeler</ProfileInfoNavBar>)
  .add("ProfileEmail", () => <ProfileInfoNavBar fontSize = {"12px"} width = {"100%"} height = {"50%"} paddingBottom = {"15px"}>larkin_tr***@yahoo.com</ProfileInfoNavBar>);

// export default {
//     component: ProfileInfoNavBar,
//     title: 'Primitive|Text/ProfileInfoNavBar'
// }

// export const ProfileInfoStandard = () => <ProfileInfoNavBar>Standard</ProfileInfoNavBar>
// export const ProfileInfoName = () => <ProfileInfoNavBar fontSize = {"16px"} width = {"100%"} height = {"50%"} paddingTop = {"15px"}>James Wheeler</ProfileInfoNavBar>
// export const ProfileInfoEmail = () => <ProfileInfoNavBar fontSize = {"12px"} width = {"100%"} height = {"50%"} paddingBottom = {"15px"}>larkin_tr***@yahoo.com</ProfileInfoNavBar>