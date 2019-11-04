import React from 'react'
import { storiesOf } from '@storybook/react'

import { EditSVG, ImageSVG, LinkSVG } from '../StateTitleSVGs'
import { mockApi } from '../../../../DisplayWrappers/CreateSubject/API/__mocks__/mockApi'

storiesOf('Primitive|Images/StateTitleSVGs', module)
    .add('Content_Inactive', () => {
       
        return (
        <EditSVG type = {"content"} api = {mockApi}/>
        )
    })
    .add('Content_Cause', () => {
        mockApi.currentPanel = "content" 
        return (
            <EditSVG type = {"content"} api = {mockApi}/>
            )
        }
    )
    .add('Content_Post', () => {
        mockApi.currentPanel = "content"
        return (
            <EditSVG type = {"content"} api = {mockApi} secondary />
            )
        }
    )
    .add('Image_Inactive', () => {
        return (
            <ImageSVG type = {"image"} api = {mockApi}/>
            )
        }
    )
    .add('Image_Cause', () => {
        mockApi.currentPanel = "image"
        return (
            <ImageSVG type = {"image"} api = {mockApi}/>
            )
        }
    )
    .add('Image_Post', () => {
        mockApi.currentPanel = "image"
        return (
            <ImageSVG type = {"image"} api = {mockApi} secondary />
            )
        }
    )
    .add('Link_Inactive', () => {
        return (
            <LinkSVG type = {"link"} api = {mockApi}/>
            )
        }
    )
    .add('Link_Cause', () => {
        mockApi.currentPanel = "link"
        return (
            <LinkSVG type = {"link"} api = {mockApi}/>
            )
        }
    )
    .add('Link_Post', () => {
        mockApi.currentPanel = "link"
        return (
        <LinkSVG type = {"link"} api = {mockApi} secondary />
        )
    }
)