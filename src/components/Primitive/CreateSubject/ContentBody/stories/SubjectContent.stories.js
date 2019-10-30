import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectContent from '../SubjectContent'

storiesOf("Primitive|text/SubjectContent", module)
    .add("Standard", () => <SubjectContent />)