import React from 'react'
import { storiesOf } from '@storybook/react'

import { EditSVG, ImageSVG, LinkSVG } from '../StateTitleSVGs'

storiesOf('Primitive|Images/StateTitleSVGs', module)
    .add('Content_Inactive', () => <EditSVG type = {"content"} currentState = {""}/>)
    .add('Content_Cause', () => <EditSVG type = {"content"} currentState = {"content"}/>)
    .add('Content_Post', () => <EditSVG type = {"content"} currentState = {"content"} secondary />)
    .add('Image_Inactive', () => <ImageSVG type = {"image"} currentState = {""}/>)
    .add('Image_Cause', () => <ImageSVG type = {"image"} currentState = {"image"}/>)
    .add('Image_Post', () => <ImageSVG type = {"image"} currentState = {"image"} secondary />)
    .add('Link_Inactive', () => <LinkSVG type = {"link"} currentState = {""}/>)
    .add('Link_Cause', () => <LinkSVG type = {"link"} currentState = {"link"}/>)
    .add('Link_Post', () => <LinkSVG type = {"link"} currentState = {"link"} secondary />)