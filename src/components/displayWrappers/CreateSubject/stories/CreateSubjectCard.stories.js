import React from 'react'
import { storiesOf } from '@storybook/react'

import CreateSubjectCard from '../CreateSubjectCard'

storiesOf('DisplayWrappers|CreateSubject/CreateSubjectCard/CreateSubjectCard', module)
    .add('Standard', () => <CreateSubjectCard />, {
        notes: "This component is wrapped by the CreateSubject component which provides this with state management."
    })