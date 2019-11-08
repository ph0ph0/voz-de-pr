import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectDetailContent from '../SubjectDetailContent'

import { CauseOnly } from '../../../../Constants/MockSubjectsData'

storiesOf('DisplayWrappers|SubjectDetail/SubjectDetailContent/SubjectDetailContent', module)
    .add('Cause_withComments', () => <SubjectDetailContent subject = {CauseOnly[0]}/>)
    .add('Post_withComments', () => <SubjectDetailContent secondary subject = {CauseOnly[0]}/>)
    .add('Cause_withoutComments', () => <SubjectDetailContent subject = {CauseOnly[0]} />)
    .add('Post_withoutComments', () => <SubjectDetailContent secondary subject = {CauseOnly[0]}/>)