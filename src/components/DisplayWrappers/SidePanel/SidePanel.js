import React from "react";
import styled, { css } from "styled-components";

import { ReactComponent as PRFlag } from "../../../assets/SidePanel/PRFlag.svg";
import Logo from "../../Primitive/SidePanel/Logo";
import Info from "../../Primitive/SidePanel/Info";
import CreateSubjectButton from "../../Primitive/SidePanel/SidePanelActionButton";



const SidePanel = ({type, secondary, props}) => {
  switch (type) {
  case "Standard":
    return <SidePanelStandard {...props} />;
  case "CauseOnly":
    return <SidePanelCauseOnly {...props} />;
  case "PostOnly":
    return <SidePanelPostOnly {...props} />;
  case "CauseInfo":
    return <SidePanelCauseInfo {...props} />;
  case "PostInfo":
    return <SidePanelPostInfo {...props} />;
  case "Detail":
    return <SidePanelDetail secondary = {secondary} {...props}/>;
  default:
    return <SidePanelStandard {...props}/>;
  }
};

const sidePanelStyle = css`
    /* border: 1px solid black; */
    width: 300px;
    height: auto;
    background-color: #fff;

    padding-bottom: 20px;
    margin-top: 100px;
    position: sticky;
    top: 172px;

    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`; 

const StandardWrapper = (props) => {
  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
          Voz de Puerto Rico (Voz de PR) is a social platform that allows users to
          take an active role in the progression of human needs, social betterment
          and national development of Puerto Rico. It is community based, and
          provides a voice to those who wish to enact change across society.
      </Info>
      <CreateSubjectButton />
      <CreateSubjectButton secondary/>
    </div>
  );
};
  
const SidePanelStandard = styled(StandardWrapper)`
    ${sidePanelStyle}
`;

const CauseOnlyWrapper = (props) => {
  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
            A Cause in Voz de PR is a request for assistance. It should be used to bring attention to a situation that requires help. Help can be in the form of volunteer work, a donation, or any other type of assistance that would help the Cause to achieve its goal! If you would like to make a donation, please make a note of the Cause ID and donate via ATH MOVIL.
      </Info>
      <CreateSubjectButton />
    </div>
  );
};

const SidePanelCauseOnly = styled(CauseOnlyWrapper)`
    ${sidePanelStyle}
`;

const PostOnlyWrapper = (props) => {
  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
                A Post in Voz de PR is curated information that will be useful to the people of Puerto Rico. A  Post aims to inform using knowledge, facts, figures, news articles, or general information that may benefit other users. It can be used as the starting point for a conversation relevant to Puerto Rico!
      </Info>
      <CreateSubjectButton secondary/>
    </div>
  );
};

const SidePanelPostOnly = styled(PostOnlyWrapper)`
    ${sidePanelStyle}
`;
const CauseInfoWrapper = (props) => {
  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
                A Cause in Voz de PR is a request for assistance. It should be used to bring attention to a situation that requires help. Help can be in the form of volunteer work, a donation, or any other type of assistance that would help the Cause to achieve its goal! 
      </Info>
    </div>
  );
};

const SidePanelCauseInfo = styled(CauseInfoWrapper)`
    ${sidePanelStyle}
`;

const PostInfoWrapper = (props) => {
  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
                A Post in Voz de PR is curated information that will be useful to the people of Puerto Rico. It’s aim is to inform using knowledge, facts, figures, news articles, or general information that may benefit other users. The goal of a Post is to provide information that may benefit another user!
      </Info>
    </div>
  );
};

const SidePanelPostInfo = styled(PostInfoWrapper)`
    ${sidePanelStyle}
`;

const SidePanelDetailWrapper = ({ secondary, ...props}) => {
  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
        {secondary ? "A Post in Voz de PR is curated information that will be useful to the people of Puerto Rico. A  Post aims to inform using knowledge, facts, figures, news articles, or general information that may benefit other users. It can be used as the starting point for a conversation relevant to Puerto Rico!" : "A Cause in Voz de PR is a request for assistance. It should be used to bring attention to a situation that requires help. Help can be in the form of volunteer work, a donation, or any other type of assistance that would help the Cause to achieve its goal! If you would like to make a donation, please make a note of the Cause ID and donate via ATH MOVIL."}
      </Info>
      <CreateSubjectButton secondary = {secondary}/>
    </div>

  );
};

const SidePanelDetail = styled(SidePanelDetailWrapper)`
    ${sidePanelStyle}
    margin-top: 0px;
    position: sticky;
    top: 95px;
`;


export default SidePanel;