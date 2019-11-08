import React from 'react'
import { storiesOf } from '@storybook/react'
import PR from '../../../../assets/SubjectCard/PuertoRico_VdPR.jpg'

import SubjectCards from '../SubjectCards'

import { CauseOnly } from '../../../../Constants/MockSubjectsData'

storiesOf("DisplayWrappers|SubjectCards/SubjectCards", module)
    .add("Standard", () => <SubjectCards arrayOfSubjectCardData = {CauseOnly}/>, {
        notes: "*PROPS; arrayOfSubjectCardData: This is the array of data that is passed to the SubjectCards* This is the wrapper for all of the SubjectCards on the page."
    })

