import React from 'react'
import {Route, Switch } from 'react-router-dom'

import MainFeed from './MainFeed'
import Causes from './Causes'
import Posts from './Posts'
import Profile from './Profile'
import CreateCause from './CreateCause'

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
            <Route path = "/create-cause">
                <CreateCause />
            </Route>
            <Route path = "/create-post">
                <CreateCause />
            </Route>
        </Switch>
    )
}

export default Routes