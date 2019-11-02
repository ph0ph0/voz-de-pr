import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkDescription from '../LinkDescription'

import { mockApi } from '../../../../DisplayWrappers/CreateSubject/API/__mocks__/mockApi'

storiesOf('Primitive|text/LinkDescription', module)
    .add('Standard', () => <LinkDescription api = {mockApi}/>)