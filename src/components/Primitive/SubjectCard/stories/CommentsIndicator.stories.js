import React from 'react'
import { storiesOf } from '@storybook/react'

import CommentsIndicator from '../CommentsIndicator'

storiesOf("Primitive|text/CommentsIndicator", module)
    .add("Standard", () => <CommentsIndicator>Test</CommentsIndicator>)
    .add("Content", () => <CommentsIndicator>12 Comments</CommentsIndicator>)