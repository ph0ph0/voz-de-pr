import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MainPageContent from '../MainPageContent/MainPageContent'
import SidePanel from '../SidePanel/SidePanel'
import SidePanelProfile from '../SidePanel_Profile/SidePanel_Profile'

const PageContentWrapper = ({pageTitle, sidePanelType, profileType, ...props}) => {

    switch (sidePanelType) {
        case "Standard":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} profileType = {profileType} />
                    <SidePanel type = {"Standard"} />
                </div>
            )
        case "CauseOnly":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} profileType = {profileType} />
                    <SidePanel type = {"CauseOnly"} />
                </div>
            )
        case "PostOnly":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} profileType = {profileType} />
                    <SidePanel type = {"PostOnly"} />
                </div>
            )
        case "CauseInfo":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} profileType = {profileType} />
                    <SidePanel type = {"CauseInfo"} />
                </div>
            )
        case "PostInfo":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} profileType = {profileType} />
                    <SidePanel type = {"PostInfo"} />
                </div>
            )
        case "Profile":
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} profileType = {profileType} />
                    <SidePanelProfile />
                </div>
            )
        default:
            return (
                <div {...props}>
                    <MainPageContent pageTitle = {pageTitle} profileType = {profileType} />
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

PageContent.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    sidePanelType: PropTypes.string.isRequired,
    profileType: PropTypes.bool.isRequired
}

export default PageContent
