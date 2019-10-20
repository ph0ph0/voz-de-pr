import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectImage from '../SubjectImage'
import PR from '../../../../assets/SubjectCard/PuertoRico_VdPR.jpg'

storiesOf("Primitive|Images/SubjectImage", module)
    .add("Standard", () => <SubjectImage src = {PR} />, {
        notes: "*Props; src ie the image source* This is the image of the subject card."
    })