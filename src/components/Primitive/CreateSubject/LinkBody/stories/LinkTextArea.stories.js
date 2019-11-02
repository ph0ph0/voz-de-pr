import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkTextArea from '../LinkTextArea'

import { mockApi } from '../../../../DisplayWrappers/CreateSubject/API/__mocks__/mockApi'

storiesOf('Primitive|text/LinkTextArea', module)
    .add('Cause', () => <LinkTextArea api = {mockApi}/>)
    .add('Post', () => <LinkTextArea secondary api = {mockApi}/>)