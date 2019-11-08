import React from 'react'
import { storiesOf } from '@storybook/react'

import RightContent from '../RightContent'
import PR from '../../../../../assets/SubjectCard/PuertoRico_VdPR.jpg'

//PROPS: numberOfVotes, secondary, src

storiesOf("DisplayWrappers|SubjectCard/RightContent", module)
    .add("Standard", () => <RightContent numberOfVotes = {147} secondary = {false} />, {
        notes: "*PROPS; numberOfVotes: string ie '147 Votes', secondary: bool, src: image source*, the right content of the subject card"
    })
    .add("C", () => <RightContent numberOfVotes = {147} secondary = {false} src = {PR}/>, {
        notes: "*PROPS; numberOfVotes, secondary, src*"
    })
    .add("P", () => <RightContent numberOfVotes = {147} secondary = {true} src = {PR}/>)