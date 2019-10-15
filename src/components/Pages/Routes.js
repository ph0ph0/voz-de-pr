import React from 'react'
import {Route, Switch } from 'react-router-dom'

import MainFeed from './MainFeed'
import Causes from './Causes'
import Posts from './Posts'
import Profile from './Profile'

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/">
                <MainFeed />
            </Route>
            <Route path = "/causes">
                <Causes />
            </Route>
            <Route path = "/posts">
                <Posts />
            </Route>
            <Route path = "/profile">
                <Profile />
            </Route>
        </Switch>
    )
}

export default Routes