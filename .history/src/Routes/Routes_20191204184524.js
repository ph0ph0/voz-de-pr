import React from "react";
import { Route, Switch } from "react-router-dom";

import MainFeed from "../Components/Pages/MainFeed";
import Causes from "../Components/Pages/Causes";
import Posts from "../Components/Pages/Posts";
import Profile from "../Components/Pages/Profile";
import CreateCause from "../Components/Pages/CreateCause";
import CreatePost from "../Components/Pages/CreatePost";
import SubjectDetail from "../Components/Pages/SubjectDetail";
import SignUp from "../Components/Pages/SignUp";
import SignIn from "../Components/Pages/SignIn";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/">
        <MainFeed />
      </Route>
      <Route path="/causes">
        <Causes />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/create-cause">
        <CreateCause />
      </Route>
      <Route path="/create-post">
        <CreatePost />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route path="/:subjectID">
        <SubjectDetail />
      </Route>
    </Switch>
  );
};

export default Routes;
