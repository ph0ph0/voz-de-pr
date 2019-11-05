import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectLink from '../SubjectLink'

storiesOf('Primitive|Links/SubjectDetailSubjectLink', module)
    .add('Cause', () => <SubjectLink>www.google.com</SubjectLink>)
    .add('Post', () => <SubjectLink secondary>www.google.com</SubjectLink>)