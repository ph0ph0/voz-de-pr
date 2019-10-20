import React from 'react'
import { storiesOf } from '@storybook/react'

import ActionButton from '../ActionButton'

storiesOf("Primitive|Buttons/ActionButton", module)
    .add("Standard", () => <ActionButton />, {
        notes: "*PROPS; secondary: turns it into a post button* This is the action button that is used as a link to take a user to the create cause/post page. It can also be used to post a comment or to acually create the cause or post"
    })
    .add("C", () =><ActionButton>Create Cause</ActionButton>)
    .add("P", () =><ActionButton secondary>Create Post</ActionButton>)