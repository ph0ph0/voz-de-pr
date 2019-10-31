import React from 'react'
import { storiesOf } from '@storybook/react'

import FeedMainPageContent from '../FeedMainPageContent'

storiesOf("PageContentWrappers|FeedPages/FeedMainPageContent", module)
    .add("Standard", () => <FeedMainPageContent profileType = {false} pageTitle = {"Title"}></FeedMainPageContent>, {
        notes: "*PROPS; pageTitle: The title of the page to be shown, profileType: bool determines the type of the Filters*"
    })
    .add("Profile", () => <FeedMainPageContent profileType = {true} pageTitle = {"Title"}></FeedMainPageContent>)