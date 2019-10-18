import React from 'react'
import { storiesOf } from '@storybook/react'

import DeleteButton from '../DeleteSubjectButton'

storiesOf("Primitive|Buttons/DeleteSubjectButton", module)
    .add("DeleteButton", () => <DeleteButton />)