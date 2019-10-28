import React from 'react'
import styled from 'styled-components'

import MainPageContent from '../MainPageContent/MainPageContent'
import SidePanel from '../SidePanel/SidePanel'
import SidePanelProfile from '../SidePanel_Profile/SidePanel_Profile'

const PageContentWrapper = ({pageTitle, sidePanelType, ...props}) => {

    switch (sidePanelType) {
        case "Standard":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} />
                    <SidePanel type = {"Standard"} />
                </div>
            )
        case "CauseOnly":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} />
                    <SidePanel type = {"CauseOnly"} />
                </div>
            )
        case "PostOnly":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} />
                    <SidePanel type = {"PostOnly"} />
                </div>
            )
        case "CauseInfo":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} />
                    <SidePanel type = {"CauseInfo"} />
                </div>
            )
        case "PostInfo":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} />
                    <SidePanel type = {"PostInfo"} />
                </div>
            )
        case "Profile":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} />
                    <SidePanelProfile />
                </div>
            )
        default:
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} />
                    <SidePanel type = {"Standard"} />
                </div>
            )
    }
}

const PageContent = styled(PageContentWrapper)`
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export default PageContent
