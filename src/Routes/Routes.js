import React from 'react'
import {Route, Switch } from 'react-router-dom'

import MainFeed from '../components/Pages/MainFeed'
import Causes from '../components/Pages/Causes'
import Posts from '../components/Pages/Posts'
import Profile from '../components/Pages/Profile'
import CreateCause from '../components/Pages/CreateCause'
import CreatePost from '../components/Pages/CreatePost'
import SubjectDetail from '../components/Pages/SubjectDetail'

const Routes = (props) => {
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
                <CreatePost />
            </Route>
            <Route path = "/:subjectID">
                <SubjectDetail {...props}/>
            </Route>
        </Switch>
    )
}

export default Routes