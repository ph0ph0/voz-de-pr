import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectCardTopLineWrapper from '../SubjectCardTopLineWrapper'

storiesOf("DisplayWrappers|SubjectCard/SubjectCardTopLineWrapper", module)
    .add("Standard", () => <SubjectCardTopLineWrapper profileName={"James Wheeler Montgommery McGuiness"} timeAgo = {"1 Hour Ago"}/>)