import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkBody from '../LinkBody'

import { mockApi } from '../../API/__mocks__/mockApi'

storiesOf('DisplayWrappers|CreateSubject/LinkBody/LinkBody', module)
    .add('Cause', () => <LinkBody api = {mockApi}/>)
    .add('Post', () => <LinkBody secondary api = {mockApi}/>)