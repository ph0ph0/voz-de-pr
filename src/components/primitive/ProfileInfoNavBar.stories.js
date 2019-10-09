import React from 'react'
import ProfileInfoNavBar from './ProfileInfoNavBar.js'

export default {
    component: ProfileInfoNavBar,
    title: 'ProfileInfoNavBar'
}

export const ProfileInfoStandard = () => <ProfileInfoNavBar>Standard</ProfileInfoNavBar>
export const ProfileInfoName = () => <ProfileInfoNavBar fontSize = {"16px"} width = {"100%"} height = {"50%"} paddingTop = {"15px"}>James Wheeler</ProfileInfoNavBar>
export const ProfileInfoEmail = () => <ProfileInfoNavBar fontSize = {"12px"} width = {"100%"} height = {"50%"} paddingBottom = {"15px"}>larkin_tr***@yahoo.com</ProfileInfoNavBar>