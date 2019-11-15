//This is used to display either the profile name or email in the top right of the nav bar (nav bar right)

import styled from "styled-components";

const ProfileInfoNavBar = styled.div`
    /* border: 1px solid black; */
    width: ${(props) => props.width ? props.width : "100%"};
    height: ${(props) => props.height ? props.height : "50%"};
    font-size: ${(props) => props.fontSize ? props.fontSize : "16px"};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop: "0px"};
    padding-bottom: ${(props) => props.paddingBottom ? props.paddingBottom : 0 };
    padding-left: "100px"
`;

export default ProfileInfoNavBar;