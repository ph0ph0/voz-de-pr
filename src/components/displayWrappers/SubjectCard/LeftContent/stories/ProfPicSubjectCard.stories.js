import React from 'react'
import { storiesOf } from '@storybook/react'

import ProfPicSubjectCard from '../ProfPicSubjectCard'

storiesOf("DisplayWrappers|SubjectCard/ProfPicSubjectCard", module)
    .add("Standard", () => <ProfPicSubjectCard />)