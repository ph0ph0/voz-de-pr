import React from 'react'
import { storiesOf } from '@storybook/react'

import BottomWrapper from '../BottomWrapper'

storiesOf("DisplayWrappers|SubjectCard/BottomWrapper", module)
    .add("Standard", () => <BottomWrapper>12 Comments</BottomWrapper>)