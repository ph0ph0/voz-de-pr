import React from 'react'
import styled, { css } from 'styled-components'

import { ReactComponent as PRFlag } from '../../../assets/General/PRFlag.svg'
import Logo from '../../Primitive/SidePanel/Logo'
import Info from '../../Primitive/SidePanel/Info'
import ActionButton from '../../Primitive/General/ActionButton'

const SidePanel = ({type, props}) => {
    switch (type) {
        case "Standard":
            return <SidePanel_Standard {...props} />
        case "CauseOnly":
            return <SidePanel_CauseOnly {...props} />
        case "PostOnly":
                return <SidePanel_PostOnly {...props} />
        case "CauseInfo":
            return <SidePanel_CauseInfo {...props} />
        case "PostInfo":
                return <SidePanel_PostInfo {...props} />
        default:
            return <SidePanel_Standard {...props}/>
    }
}

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
        <ActionButton>Create Cause</ActionButton>
        <ActionButton secondary>Create Post</ActionButton>
      </div>
    );
};

const sidePanelStyle = css`
    /* border: 1px solid black; */
    width: 300px;
    height: auto;
    background-color: #fff;
    padding-bottom: 20px;

    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
` 
  
const SidePanel_Standard = styled(StandardWrapper)`
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
        <ActionButton>Create Cause</ActionButton>
    </div>
    );
}

const SidePanel_CauseOnly = styled(CauseOnlyWrapper)`
    ${sidePanelStyle}
`

const PostOnlyWrapper = (props) => {
    return (
        <div {...props}>
            <PRFlag />
            <Logo />
            <Info>
                A Post in Voz de PR is curated information that will be useful to the people of Puerto Rico. A  Post aims to inform using knowledge, facts, figures, news articles, or general information that may benefit other users. It can be used as the starting point for a conversation relevant to Puerto Rico!
            </Info>
            <ActionButton secondary>Create Post</ActionButton>
        </div>
    )
}

const SidePanel_PostOnly = styled(PostOnlyWrapper)`
    ${sidePanelStyle}
`
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
}

const SidePanel_CauseInfo = styled(CauseInfoWrapper)`
    ${sidePanelStyle}
`

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
}

const SidePanel_PostInfo = styled(PostInfoWrapper)`
    ${sidePanelStyle}
`


export default SidePanel