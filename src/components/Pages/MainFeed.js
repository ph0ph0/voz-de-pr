import React, { Fragment } from 'react'
import styled from 'styled-components'

import SubjectCard from '../DisplayWrappers/SubjectCard/SubjectCard'
import PR from '../../assets/SubjectCard/PuertoRico_VdPR.jpg'
import SidePanel_Profile from '../DisplayWrappers/SidePanel_Profile/SidePanel_Profile'
import SidePanel from '../DisplayWrappers/SidePanel/SidePanel'

const Page = (props) => {
    return (
        <Fragment>
            <SubjectCard 
            profileName = {"James Wheeler Montgommery McGuiness "}
            timeAgo = {"1 hour ago"}
            title = "Puerto Rico - Cherish Its Natural Wonders"
            subjectSummary = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Magna ac placerat vestibulum lectus mauris ultrices eros in. Tellus id interdum velit laoreet. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Tincidunt augue interdum velit euismod in pellentesque massa. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Egestas erat imperdiet sed euismod nisi. Vulputate eu scelerisque felis imperdiet. Ante in nibh mauris cursus mattis molestie. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Tortor at auctor urna nunc id cursus. Est ante in nibh mauris cursus mattis molestie a iaculis. Vel pharetra vel turpis nunc eget. Sed pulvinar proin gravida hendrerit. Facilisis leo vel fringilla est ullamcorper eget nulla. Tempus imperdiet nulla malesuada pellentesque. Proin libero nunc consequat interdum varius sit amet mattis. Urna cursus eget nunc scelerisque viverra mauris. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Metus vulputate eu scelerisque felis imperdiet proin. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Id leo in vitae turpis massa sed elementum. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Vel pharetra vel turpis nunc eget lorem. Tellus cras adipiscing enim eu turpis egestas. Tellus in metus vulputate eu. Lacus sed turpis tincidunt id. Neque sodales ut etiam sit amet. Mauris sit amet massa vitae tortor condimentum lacinia quis vel."}
            numberOfComments = {"12 Comments"}
            numberOfVotes = {"147 Votes"}
            secondary = {false}
            src = {PR}
            />
            <SidePanel_Profile />
        </Fragment>
    )
}

const MainFeed = styled(Page)`
    position: static;
`

export default MainFeed